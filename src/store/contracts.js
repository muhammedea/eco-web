import { defineStore } from 'pinia';
import { ethers } from 'ethers';
import abis from '@/utils/abis';
import contracts from '@/utils/contracts';
import useWeb3Store from './web3';

function getContractFunction(contractName) {
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

export default useContractsStore;
