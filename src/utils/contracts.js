import useWeb3Store from '@/store/web3';
import abis from '@/utils/abis';
import { ethers } from 'ethers';

const contracts = {
  97: {
    OrderbookExchange: {
      address: '0x22c041aB5D03e0bAb56b5c92a9C39e732AF3B412',
      abiName: 'OrderbookExchange',
    },
    OrderbookERC20Proxy: {
      address: '0x6f6Ef558B098C652502ABA96Aab1A844eCCA492d',
      abiName: 'OrderbookERC20Proxy',
    },

    // ---------- Tokens ----------
    Token_ECO: {
      address: '0x535bc2B3654Fd04e545b57f58B847d89626a1568',
      abiName: 'ERC20',
    },
    Token_USDT: {
      address: '0xd2aD7d10B96A811D97E8A85ad4270b4E4BcE4F79',
      abiName: 'ERC20',
    },
    Token_ECO_ORNG_1: {
      address: '0x5c1592Be06b27e8407976Ced7b3Be3DdB468B2de',
      abiName: 'ERC20',
    },
    Token_ECO_ORNG_2: {
      address: '0x181aFbcCfAC705324D6fcfa51AF33B57d39F761F',
      abiName: 'ERC20',
    },

    // ---------- Stake Contracts ----------
    Stake_ECO_ORNG_1: {
      address: '0x085235170145a47795c0ed8cC85Df89B678d6Dd3',
      abiName: 'LockedStakingPositions',
    },
    Stake_ECO_ORNG_2: {
      address: '0x95eEA907B478d972d9dd1fe81C660164ae493AfA',
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
