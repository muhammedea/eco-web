import { shallowRef, watch } from 'vue';
import { ethers } from 'ethers';
import abis from '@/utils/abis';
import contracts from '@/utils/contracts';
import useWeb3Store from '@/store/web3';

const cache = {};

export default function useContract(contractName) {
  if (cache[contractName]) {
    return cache[contractName];
  }

  const instance = shallowRef(null);
  const web3Store = useWeb3Store();

  watch(() => web3Store.account, () => {
    if (web3Store.provider) {
      const contract = contracts[80001][contractName];
      if (!contract) {
        throw new Error(`contract not found, ${contractName}`);
      }
      if (!abis[contract.abiName]) {
        throw new Error(`ABI not found, ${contract.abiName}`);
      }
      instance.value = new ethers.Contract(contract.address, abis[contract.abiName], web3Store.provider);
    }
  }, {
    immediate: true,
  });

  cache[contractName] = instance;
  return instance;
}

/* function getContractFunction(contractName) {
  return () => {
    const web3Store = useWeb3Store();
    if (web3Store.provider) {
      const contract = contracts[contractName];
      return new ethers.Contract(contract.address, abis[contract.abiName], web3Store.provider);
    }
    return null;
  };
}

const useContractsStore = defineStore('contracts', {
  getters: Object.fromEntries(Object.keys(contracts[80001]).map((c) => [c, getContractFunction(c)])),
});

export default useContractsStore; */
