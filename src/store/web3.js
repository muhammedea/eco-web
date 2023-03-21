import { defineStore } from 'pinia';
import { ethers } from 'ethers';
import { shallowRef } from 'vue';
import { getActiveChain, getChainInfo, getUsableChains } from '@/utils/chains';

const useWeb3Store = defineStore('web3', {
  state: () => ({
    web3Modal: null,

    isLoading: true,
    isWalletConnected: false,
    web3provider: shallowRef(null),
    provider: shallowRef(null),
    chainId: null,
    account: null,
  }),
  getters: {
    chainInfo(state) {
      return getChainInfo(state.chainId);
    },
    isWrongChain(state) {
      return state.isWalletConnected && getChainInfo(state.chainId).isUsable === false;
    },
    isUsable(state) {
      return state.isWalletConnected && state.account && getChainInfo(state.chainId).isUsable;
    },
  },
  actions: {
    async init(web3modal) {
      console.log('initttt');
      this.web3Modal = web3modal;
      if (web3modal.cachedProvider()) {
        const isConnected = await this.connect();
        if (isConnected) {
          return;
        }
      }
      this.connectRpcProvider();
      this.isLoading = false;
    },
    async connectRpcProvider() {
      const activeChain = getActiveChain();
      this.isWalletConnected = false;
      this.web3provider = null;
      this.provider = new ethers.providers.JsonRpcProvider(activeChain.rpcUrls[0]);
      this.chainId = activeChain.chainId;
      this.account = null;
    },
    async refreshConnection() {
      let web3provider = null;
      try {
        web3provider = await this.web3Modal.connect();
      } catch (err) {
        return false;
      }
      const provider = new ethers.providers.Web3Provider(web3provider);
      provider.pollingInterval = 12000;

      const accounts = await provider.listAccounts();
      const network = await provider.getNetwork();

      this.web3provider = web3provider;
      this.provider = provider;
      this.chainId = network.chainId;
      this.account = accounts[0];
      this.isWalletConnected = true;
      console.log('init bitti', accounts, network);
      return true;
    },
    async connect() {
      console.log('on connect');
      this.isLoading = true;
      const result = await this.refreshConnection();
      if (!result) {
        return false;
      }

      this.web3provider.on('connect', async (info) => {
        console.log('connect', info);
        this.chainId = parseInt(info.chainId, 10);
        this.isWalletConnected = true;
        this.isLoading = false;
      });

      this.web3provider.on('accountsChanged', async (newAccounts) => {
        // TODO: newAccounts.length == 0 olabilir
        console.log('accountsChanged', newAccounts);
        if (Array.isArray(newAccounts) === false || newAccounts.length === 0) {
          this.connectRpcProvider();
        } else {
          // this.account = newAccounts[0];
          this.refreshConnection();
        }
        setTimeout(() => window.location.reload(), 100);
      });

      this.web3provider.on('chainChanged', async (chainId) => {
        console.log('chainChanged', chainId);
        this.chainId = parseInt(chainId, 10);
        this.isWalletConnected = true;
        window.location.reload();
      });

      this.web3provider.on('disconnect', (a) => {
        console.log('disconnect', a);
        this.isWalletConnected = false;
        this.chainId = null;
        window.location.reload();
      });

      this.isLoading = false;

      return true;
    },
    async changeNetwork() {
      const chain = getUsableChains()[0];
      const chainIdHex = ethers.utils.hexValue(ethers.BigNumber.from(chain.chainId).toHexString());
      if (this.web3provider && chain) {
        try {
          await this.web3provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: chainIdHex }],
          });
          window.location.reload();
          return true;
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            try {
              await this.web3provider.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainName: chain.name,
                    chainId: chainIdHex,
                    nativeCurrency: chain.nativeCurrency,
                    rpcUrls: chain.rpcUrls,
                    blockExplorerUrls: chain.blockExplorerUrls,
                  },
                ],
              });
              window.location.reload();
              return true;
            } catch (addError) {
              // handle "add" error
              console.log(addError);
            }
          }
          // handle other "switch" errors
          console.log(switchError);
        }
        return false;
      }

      console.log('provider or chain not found');
      return false;
    },
    async logout() {
      await this.web3Modal.clearCachedProvider();
      this.isWalletConnected = false;
      this.selectedAddress = null;
    },
  },
});

export default useWeb3Store;
