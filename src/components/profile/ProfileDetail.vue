<template>
  <div class="flex flex-col gap-3">
    <button @click="router.back()" class="flex gap-2 items-center w-fit text-base-leading-5 text-Black-and-White-Black font-semibold hover:text-Black-and-White-Black-Opacity-50">
      <y-icon name="yi yi-chevron-left text-2xl"></y-icon>
      Go back
    </button>
    <div class="bg-white p-6 rounded-lg border flex flex-col gap-4 w-full">
      <h1 class="text-base-leading-5 font-semibold text-Black-and-White-Black">Account</h1>
      <div class="flex items-center gap-4 justify-between w-full">
        <div class="flex items-center justify-center gap-3 font-semibold cursor-default">
          <span class="w-12 h-12 rounded-full bg-Acsen-Yellow"></span>
          <div class="flex flex-col">
            <p class="text-Black-and-White-Black text-sm truncate max-w-[70px] xl:max-w-[150px]">
              {{ web3Store.account }}
            </p>
            <p class="text-Grayscale-Grey-3 text-sm">MetaMask</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="copyWallet"
            class="w-8 h-8 bg-BORDER hover:bg-Tint-Acsend-Yellow rounded-full flex items-center justify-center"
          >
            <img class="w-4 h-4" src="@/assets/icon/copy.svg" alt="" />
          </button>
          <button class="w-8 h-8 bg-BORDER hover:bg-Tint-Acsend-Yellow rounded-full flex items-center justify-center">
            <img class="w-4 h-4" src="@/assets/icon/share.svg" alt="" />
          </button>
          <button class="w-8 h-8 bg-BORDER hover:bg-Tint-Acsend-Yellow rounded-full flex items-center justify-center">
            <img class="w-4 h-4" src="@/assets/icon/logout.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-3 items-center w-full">
        <p class="text-sm leading-6 text-Grayscale-Grey-3">BALANCE</p>
        <div class="flex items-center gap-3 justify-center w-full">
          <div class="flex flex-col gap-2 items-center justify-center w-full">
            <span class="text-2xl font-bold text-Black-and-White-Black">{{ formatAmount(ecoBalance) }}</span>
            <div class="flex items-center gap-2 text-sm leading-6 text-Grayscale-Grey-3">
              <img class="w-5 h-5" src="@/assets/images/ETH.svg" alt="" />
              ECO
            </div>
          </div>
          <div class="w-px h-16 bg-BORDER"></div>
          <div class="flex flex-col gap-2 items-center justify-center w-full">
            <span class="text-2xl font-bold text-Black-and-White-Black">{{ formatAmount(nativeBalance) }}</span>
            <div class="flex items-center gap-2 text-sm leading-6 text-Grayscale-Grey-3">
              <img class="w-5 h-5" src="@/assets/images/BNB.svg" alt="" />
              BNB
            </div>
          </div>
        </div>
      </div>
    </div>
    <TokenCard token-symbol="ECO_ORNG_1"></TokenCard>
    <TokenCard token-symbol="ECO_ORNG_2"></TokenCard>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useClipboard } from '@vueuse/core';
import { useYartuNotify } from '@yartu/ui-kit';
import { useRouter } from 'vue-router';
import useWeb3Store from '@/store/web3';
import { formatAmount } from '@/utils/helpers';
import { getContract } from '@/utils/contracts';
import { ethers } from 'ethers';
import TokenCard from './TokenCard.vue';

const { copy, copied } = useClipboard();
const web3Store = useWeb3Store();
const yartuNotify = useYartuNotify();
const router = useRouter();
const nativeBalance = ref(ethers.BigNumber.from(0));
const ecoBalance = ref(ethers.BigNumber.from(0));

watch(() => (web3Store.account && web3Store.provider), (provider) => {
  if (provider) {
    provider.getBalance(web3Store.account).then((result) => {
      nativeBalance.value = result;
    });
    const ecoContract = getContract('Token_ECO');
    ecoContract.balanceOf(web3Store.account).then((result) => {
      console.log('Token_ECO', result);
      ecoBalance.value = result;
    });
  }
});

async function copyWallet() {
  await copy(web3Store.account);
  if (copied) {
    yartuNotify.snackbar({
      title: 'Wallet copied.',
      type: 'success',
      duration: 1000,
      position: 'center-bottom',
    });
  }
}
</script>
