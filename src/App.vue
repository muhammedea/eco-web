<template>
  <yartu-notify></yartu-notify>
  <yartu-modal></yartu-modal>
  <RouterView></RouterView>
  <web3-modal-component ref="web3modalRef" theme="light" :provider-options="providerOptions" cache-provider />
  <div
    class="lodaing-box-overlay"
    v-if="lodaingContexes.length > 0"
  >
    <div class="loading-box">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="loading-box-title" v-if="lodaingContexes[0].title">
        {{ lodaingContexes[0].title }}
      </div>
      <div class="loading-box-description" v-if="lodaingContexes[0].description">
        {{ lodaingContexes[0].description }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { Web3ModalComponent } from 'web3modal-vue3';
import WalletConnectProvider from '@walletconnect/web3-provider';
import useWeb3Store from '@/store/web3';
import { getUsableChains } from '@/utils/chains';
import { lodaingContexes } from '@/services/loadingDialogService';

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

/* loading icon css start */
.lodaing-box-overlay {
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.4);
  z-index: 999000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 8px;
  padding: 40px;
  max-width: 520px;
}

.loading-box-title {
  color: #080E38;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin-top: 32px;
  text-align: center;
  min-width: 150px;
}

.loading-box-description {
  color: #9C9FAF;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-top: 12px;
  text-align: center;
  min-width: 200px;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid rgb(51 120 152);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: rgb(51 120 152) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* loading icon css end */
</style>
