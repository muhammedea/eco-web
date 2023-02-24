<template>
  <div
    class="w-full overflow-hidden navBreak:overflow-visible transition-all duration-300 navBreak:h-20 border-b border-Grayscale-Grey-4 navBreak:px-6 flex navBreak:items-center navBreak:justify-center sticky top-0 left-0 z-50 bg-Primary-Blue"
    :class="responsiveNav ? 'h-screen' : 'h-20'"
  >
    <div class="w-full h-full flex navBreak:flex-row flex-col navBreak:gap-16 gap-6 items-center mx-auto">
      <div class="min-h-[80px] flex items-center justify-center navBreak:justify-start border-b navBreak:border-none navBreak:p-0 px-6 w-full navBreak:w-auto relative">
        <button
          v-if="!responsiveNav"
          @click="openResponsiveNav"
          class="absolute top-5 left-6 rounded-md w-10 h-10 navBreak:hidden flex justify-center items-center bg-Primary-Blue border border-white"
        >
          <i class="yi yi-menu-outline" style="font-size: 24px; color: white"></i>
        </button>
        <button v-else @click="closeResponsiveNav" class="absolute top-5 left-6 rounded-md w-10 h-10 navBreak:hidden flex justify-center items-center bg-[#FFFFFF80] border border-white">
          <i class="yi yi-close" style="font-size: 24px; color: white"></i>
        </button>
        <router-link to="/" class="text-logo text-white font-bold select-none focus-visible:outline-none">ecolarium</router-link>
      </div>
      <div class="flex navBreak:flex-row flex-col navBreak:items-center navBreak:justify-between h-full w-full px-6 pb-7 navBreak:px-0 navBreak:pb-0">
        <div class="flex navBreak:flex-row flex-col navBreak:gap-6 gap-5">
          <router-link
            :to="{ name: 'TradeView' }"
            class="w-fit text-base-leading-5 text-white flex justify-center items-center p-2 relative transition-all"
            exact-active-class="after:bg-white after:h-0.5 after:block after:rounded-lg after:w-full after:left-0 after:bottom-0 after:absolute"
          >
            Trade
          </router-link>
          <router-link
            :to="{ name: 'EcoProjectView' }"
            class="w-fit text-base-leading-5 text-white flex justify-center items-center p-2 relative transition-all"
            :class="$route.path.includes('ecoproject') ? 'after:bg-white after:h-0.5 after:block after:rounded-lg after:w-full after:left-0 after:bottom-0 after:absolute' : ''"
          >
            EcoProject
          </router-link>
          <router-link
            :to="{ name: 'EcoMarketView' }"
            class="w-fit text-base-leading-5 text-white flex justify-center items-center p-2 relative transition-all"
            :class="$route.path.includes('ecomarket') ? 'after:bg-white after:h-0.5 after:block after:rounded-lg after:w-full after:left-0 after:bottom-0 after:absolute' : ''"
          >
            EcoMarket
          </router-link>
          <router-link
            :to="{ name: 'ApplyScreenView' }"
            class="w-fit text-base-leading-5 text-white flex justify-center items-center p-2 relative transition-all"
            exact-active-class="after:bg-white after:h-0.5 after:block after:rounded-lg after:w-full after:left-0 after:bottom-0 after:absolute"
          >
            Apply
          </router-link>
        </div>
        <div class="flex navBreak:flex-row flex-col items-center gap-4 mt-auto navBreak:mt-0 navBreak:w-auto w-full">
          <div :key="responsiveDropdownTopValue" v-if="web3Store.isWalletConnected" class="navBreak:w-auto w-full flex navBreak:flex-row flex-col navBreak:items-center gap-6 navBreak:p-0 relative">
            <!-- v-if="web3Store.isWrongChain" -->
            <button
              @click="switchNetwork"
              v-if="false"
              class="xs:w-fit w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-Primary-Blue text-sm rounded-md font-semibold hover:text-Acsen-Yellow transition-all duration-200 cursor-pointer"
            >
              <img class="w-6 h-6" src="@/assets/icon/danger.svg" alt="danger" />
              Unsupported
              <y-icon name="yi yi-chevron-down text-xl ml-auto"></y-icon>
            </button>
            <button v-else @click="openChangeNetworkDropdown" class="flex bg-[#FFFFFFCC] rounded-md pr-2.5 text-Primary-Blue items-center gap-2 transition-all duration-200 cursor-pointer">
              <span class="w-10 h-10 rounded-md bg-white flex items-center justify-center">
                <img v-if="selectedNetwork === 'eth'" class="w-6 h-6" src="@/assets/images/ETH.svg" alt="eth" />
                <img v-if="selectedNetwork === 'bnb'" class="w-6 h-6" src="@/assets/images/BNB.svg" alt="eth" />
                <img v-if="selectedNetwork === 'matic'" class="w-6 h-6" src="@/assets/images/MATIC.svg" alt="eth" />
              </span>
              {{ selectedNetwork === 'eth' ? 'Ethereum' : selectedNetwork === 'bnb' ? 'BNB Smartchain' : selectedNetwork === 'matic' ? 'Polygon Matic' : '' }}
              <y-icon name="yi yi-chevron-down text-xl text-Primary-Blue ml-auto"></y-icon>
            </button>
            <div
              v-if="changeNetworkDropdownController"
              ref="changeNetworkDropdownMenu"
              class="absolute min-w-max bg-white py-1 z-20 navBreak:!top-11 navBreak:left-auto navBreak:right-0 left-0 rounded-lg border flex flex-col gap-0 text-Black-and-White-Black font-medium text-base-leading-5 shadow-lg"
              :style="{ top: -responsiveDropdownTopValue + 'px' }"
            >
              <button @click="selectedNetwork = 'eth'" class="px-4 py-2 text-Primary-Blue flex gap-2 items-center">
                <img class="w-6 h-6" src="@/assets/images/ETH.svg" alt="eth" />
                Ethereum
                <y-icon :name="['yi yi-check text-GREEN ml-auto', selectedNetwork === 'eth' ? 'opacity-1' : 'opacity-0']"></y-icon>
              </button>
              <button @click="selectedNetwork = 'bnb'" class="px-4 py-2 text-Primary-Blue flex gap-2 items-center">
                <img class="w-6 h-6" src="@/assets/images/BNB.svg" alt="bnb" />
                BNB Smartchain
                <y-icon :name="['yi yi-check text-GREEN ml-auto', selectedNetwork === 'bnb' ? 'opacity-1' : 'opacity-0']"></y-icon>
              </button>
              <button @click="selectedNetwork = 'matic'" class="px-4 py-2 text-Primary-Blue flex gap-2 items-center">
                <img class="w-6 h-6" src="@/assets/images/MATIC.svg" alt="matic" />
                Polygon Matic
                <y-icon :name="['yi yi-check text-GREEN ml-auto', selectedNetwork === 'matic' ? 'opacity-1' : 'opacity-0']"></y-icon>
              </button>
            </div>
          </div>
          <div class="navBreak:w-auto w-full flex navBreak:flex-row flex-col navBreak:items-center gap-6 navBreak:p-0 relative">
            <button
              v-if="web3Store.isLoading"
              class="xs:w-fit w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-Primary-Blue text-sm rounded-md font-semibold hover:text-Acsen-Yellow transition-all duration-200 cursor-pointer"
            >
              Loading...
            </button>
            <button
              @click="connectWallet"
              v-else-if="!web3Store.isWalletConnected"
              class="xs:w-fit w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-Primary-Blue text-sm rounded-md font-semibold hover:text-Acsen-Yellow transition-all duration-200 cursor-pointer"
            >
              <img class="w-6 h-6" src="@/assets/icon/wallet.svg" alt="" />
              Connect Wallet
            </button>
            <button
              v-else
              @click="openProfileDropdown"
              class="xs:w-fit !w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-Primary-Blue text-sm rounded-md font-semibold hover:text-Acsen-Yellow transition-all duration-200 cursor-pointer"
            >
              <img class="w-6 h-6" src="@/assets/icon/wallet.svg" alt="" />
              <p class="navBreak:max-w-[70px] truncate">{{ web3Store.account }}</p>
            </button>
            <div
              v-if="profileDropdownController"
              ref="profileDropdownMenu"
              class="absolute min-w-max bg-white p-6 z-20 navBreak:!top-11 navBreak:left-auto navBreak:right-0 left-0 rounded-lg border flex flex-col gap-5 text-Black-and-White-Black font-medium text-base-leading-5 shadow-lg"
              :style="{ top: -responsiveDropdownTopValue + 'px' }"
            >
              <div class="flex items-center gap-16">
                <div class="flex items-center justify-center gap-2 text-Grayscale-Grey-3 text-sm font-semibold cursor-default">
                  <img class="w-6 h-6" src="@/assets/icon/wallet.svg" alt="" />
                  <p class="max-w-[70px] truncate">{{ web3Store.account }}</p>
                </div>
                <div class="flex items-center gap-2">
                  <button @click="copyWallet" class="w-8 h-8 bg-BORDER hover:bg-Tint-Acsend-Yellow rounded-full flex items-center justify-center">
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
              <div class="flex flex-col gap-3 items-center">
                <p class="text-sm leading-6 text-Grayscale-Grey-3">BALANCE</p>
                <div class="flex items-center gap-3 justify-center">
                  <div class="flex flex-col gap-2 items-center justify-center">
                    <span class="text-2xl font-bold text-Black-and-White-Black"> 0.00001 </span>
                    <div class="flex items-center gap-2 text-sm leading-6 text-Grayscale-Grey-3">
                      <img class="w-5 h-5" src="@/assets/images/ETH.svg" alt="" />
                      ETH
                    </div>
                  </div>
                  <div class="w-px h-16 bg-BORDER"></div>
                  <div class="flex flex-col gap-2 items-center justify-center">
                    <span class="text-2xl font-bold text-Black-and-White-Black"> 0.00001 </span>
                    <div class="flex items-center gap-2 text-sm leading-6 text-Grayscale-Grey-3">
                      <img class="w-5 h-5" src="@/assets/images/MATIC.svg" alt="" />
                      MATIC
                    </div>
                  </div>
                </div>
              </div>
              <router-link
                to="/profile"
                class="text-Primary-Blue border border-Primary-Blue rounded-md py-2.5 w-full flex items-center justify-center hover:text-white hover:bg-Primary-Blue transition-all duration-200"
              >
                <img class="w-5 h-5" src="@/assets/icon/profile.svg" alt="" />
                Profile
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// eslint-disable-next-line
import { onClickOutside, useClipboard } from '@vueuse/core';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useYartuNotify } from '@yartu/ui-kit';
import useWeb3Store from '@/store/web3';

const yartuNotify = useYartuNotify();
const route = useRoute();
const { copy, copied } = useClipboard();

const responsiveNav = ref(false);
const web3Store = useWeb3Store();
const profileDropdownMenu = ref();
const changeNetworkDropdownMenu = ref();
const profileDropdownController = ref(false);
const changeNetworkDropdownController = ref(false);
const responsiveDropdownTopValue = ref();

const selectedNetwork = ref('eth');

function openResponsiveNav() {
  responsiveNav.value = true;
  document.body.classList.add('overflow-hidden');
}
function closeResponsiveNav() {
  responsiveNav.value = false;
  document.body.classList.remove('overflow-hidden');
}

function openProfileDropdown() {
  profileDropdownController.value = !profileDropdownController.value;
  setTimeout(() => {
    responsiveDropdownTopValue.value = profileDropdownMenu.value.getBoundingClientRect().height + 8;
  }, 0);
}
function openChangeNetworkDropdown() {
  changeNetworkDropdownController.value = !changeNetworkDropdownController.value;
  setTimeout(() => {
    responsiveDropdownTopValue.value = changeNetworkDropdownMenu.value.getBoundingClientRect().height + 8;
  }, 0);
}

function connectWallet() {
  profileDropdownController.value = false;
  web3Store.connect();
}

function switchNetwork() {
  web3Store.changeNetwork();
}

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

onClickOutside(profileDropdownMenu, () => {
  openProfileDropdown();
});

onClickOutside(changeNetworkDropdownMenu, () => {
  openChangeNetworkDropdown();
});

watch(
  () => route.query,
  () => {
    closeResponsiveNav();
    profileDropdownController.value = false;
  },
);
</script>
