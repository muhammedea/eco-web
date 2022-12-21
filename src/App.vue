<template>
  <yartu-notify></yartu-notify>
  <yartu-modal></yartu-modal>
  <RouterView></RouterView>
  <web3-modal-component ref="web3modalRef" theme="light" :provider-options="providerOptions" cache-provider />
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { Web3ModalComponent } from 'web3modal-vue3';
import WalletConnectProvider from '@walletconnect/web3-provider';
import useWeb3Store from '@/store/web3';
import { getUsableChains } from '@/utils/chains';

const usableChains = getUsableChains();
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      chainId: usableChains[0].chainId,
      rpc: Object.fromEntries(usableChains.map((c) => [c.chainId, c.rpcUrls[0]])),
    },
  },
};

const web3modalRef = ref(null);
onMounted(async () => {
  const web3Store = useWeb3Store();
  web3Store.init(web3modalRef.value);
});

</script>
<style>
html {
  scroll-behavior: smooth;
}

table,
th,
td {
  border: 1px solid rgb(229, 231, 235);
  border-collapse: collapse;
}

table {
  border-radius: 1px;
  overflow: hidden;
}

th,
td {
  padding: 0.6em 1em;
}
</style>
