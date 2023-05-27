import { ethers } from 'ethers';
import { hexConcat, hexlify, splitSignature } from '@ethersproject/bytes';
import { getContractAddress } from '@/utils/contracts';

function hexLeftPad(input, bytesLength = 32) {
  const hex = ethers.BigNumber.from(input).toHexString();
  const clean = hex.substring(2);
  const missingZeros = bytesLength * 2 - clean.length;
  if (missingZeros > 0) {
    return `0x${'0'.repeat(missingZeros)}${clean}`;
  } if (missingZeros < 0) {
    return `0x${clean.substring(Math.abs(missingZeros))}`;
  }
  return `0x${clean}`;
}

export function getERC20AssetData(tokenAddress) {
  const ERC20_PROXY_ID = '0xf47261b0';
  return hexConcat([ERC20_PROXY_ID, hexLeftPad(tokenAddress)]);
}

function prepareOrderSignatureFromEoaWallet(rawSignature) {
  // Append the signature type (eg. "0x02" for EIP712 signatures)
  // at the end of the signature since this is what 0x expects
  const signature = splitSignature(rawSignature);
  return hexConcat([hexlify(signature.v), signature.r, signature.s, '0x02']);
}

export async function signOrder(order, signer, chainId) {
  const domain = {
    name: 'Ecolarium',
    version: '1',
    chainId: chainId.toString(10),
    verifyingContract: getContractAddress('OrderbookExchange'),
  };

  const types = {
    Order: [
      { name: 'makerAddress', type: 'address' },
      { name: 'takerAddress', type: 'address' },
      { name: 'feeRecipientAddress', type: 'address' },
      { name: 'senderAddress', type: 'address' },
      { name: 'makerAssetAmount', type: 'uint256' },
      { name: 'takerAssetAmount', type: 'uint256' },
      { name: 'makerFee', type: 'uint256' },
      { name: 'takerFee', type: 'uint256' },
      { name: 'expirationTimeSeconds', type: 'uint256' },
      { name: 'salt', type: 'uint256' },
      { name: 'makerAssetData', type: 'bytes' },
      { name: 'takerAssetData', type: 'bytes' },
      { name: 'makerFeeAssetData', type: 'bytes' },
      { name: 'takerFeeAssetData', type: 'bytes' },
    ],
  };

  // eslint-disable-next-line
  const rawSignature = await signer._signTypedData(domain, types, order);
  const signature = prepareOrderSignatureFromEoaWallet(rawSignature);
  return signature;
}
