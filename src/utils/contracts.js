import useWeb3Store from '@/store/web3';
import abis from '@/utils/abis';
import { ethers } from 'ethers';

const contracts = {
  97: {
    OrderbookExchange: {
      address: '0x33fe3dF9E881d1Ee60950b3C411DFC32349F9833',
      abiName: 'OrderbookExchange',
    },
    OrderbookERC20Proxy: {
      address: '0x6f6Ef558B098C652502ABA96Aab1A844eCCA492d',
      abiName: 'OrderbookERC20Proxy',
    },

    // ---------- Tokens ----------
    Token_ECO: {
      address: '0xe038b786b005e5ADB06Bdcce3D4F893b645D675B',
      abiName: 'ERC20',
    },
    Token_USDT: {
      address: '0xd2aD7d10B96A811D97E8A85ad4270b4E4BcE4F79',
      abiName: 'ERC20',
    },
    Token_ECO_EFLTN: {
      address: '0x9659B883C8DE877f13d6b5a7e55b24D4F494E06E',
      abiName: 'ERC20',
    },
    Token_ECO_AKD: {
      address: '0x973C176624cD4d8BE70dac40C5e800d4bA1F7d5e',
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
    Stake_ECO_EFLTN: {
      address: '0xe23eAbd49e87B0c1D525a5B4eC3f249588a5EB6e',
      abiName: 'LockedStakingPositions',
    },
    Stake_ECO_AKD: {
      address: '0xFC19Df957A2e6b3b5287506cc3b3754980588599',
      abiName: 'LockedStakingPositions',
    },
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
