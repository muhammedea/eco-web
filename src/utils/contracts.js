import useWeb3Store from '@/store/web3';
import abis from '@/utils/abis';
import { ethers } from 'ethers';

const contracts = {
  80001: {
    ExchangeProxy: {
      address: '0xf471d32cb40837bf24529fcf17418fc1a4807626',
      abiName: 'ZeroEx',
    },
    ExchangeProxyFlashWallet: {
      address: '0x64254Cf2F3AbD765BeE46f8445B76e2bB0aF5A2c',
      abiName: 'FlashWallet',
    },

    // ---------- Tokens ----------
    Token_ECO: {
      address: '0x535bc2B3654Fd04e545b57f58B847d89626a1568',
      abiName: 'ERC20',
    },
    Token_USD: {
      address: '0x46DA39648179376DEF71076dFC5F45171239ecEd',
      abiName: 'ERC20',
    },
    Token_ECO_ORNG_1: {
      address: '0xbE593B942715FCb68C4062024f2A9be92f429C6a',
      abiName: 'ERC20',
    },
    Token_ECO_ORNG_2: {
      address: '0xEAc79A59750680b43B9AA40eA46124B1a54a0227',
      abiName: 'ERC20',
    },

    // ---------- Stake Contracts ----------
    Stake_ECO_ORNG_1: {
      address: '0x22c041aB5D03e0bAb56b5c92a9C39e732AF3B412',
      abiName: 'LockedStakingPositions',
    },
    Stake_ECO_ORNG_2: {
      address: '0x1d8c8188fd1bc66DD375d2E37cbA715144d089f7',
      abiName: 'LockedStakingPositions',
    },
  },
};

export function getAllContracInfos() {
  const web3Store = useWeb3Store();
  return contracts[web3Store.chainId];
}

export function getContractAddress(contractName) {
  const web3Store = useWeb3Store();
  if (web3Store.chainId) {
    const contract = contracts[web3Store.chainId][contractName];
    if (!contract) {
      throw new Error(`contract not found, ${contractName}`);
    }
    return contract.address;
  }
  return null;
}

export function getContract(contractName) {
  // TODO: can be a cache
  const web3Store = useWeb3Store();
  if (web3Store.provider) {
    if (!contracts[web3Store.chainId]) {
      throw new Error(`Chain not found, ${web3Store.chainId}`);
    }
    const contract = contracts[web3Store.chainId][contractName];
    if (!contract) {
      throw new Error(`contract not found, ${contractName}`);
    }
    if (!abis[contract.abiName]) {
      throw new Error(`ABI not found, ${contract.abiName}`);
    }
    return new ethers.Contract(
      contract.address,
      abis[contract.abiName],
      web3Store.account ? web3Store.provider.getSigner() : web3Store.provider,
    );
  }
  return null;
}
