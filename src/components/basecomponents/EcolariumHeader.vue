<template>
  <div
    class="w-full overflow-hidden navBreak:overflow-visible transition-all duration-300 navBreak:h-20 shadow-header-bottom-border navBreak:px-8 flex navBreak:items-center navBreak:justify-center sticky top-0 left-0 z-50 bg-white"
    :class="responsiveNav ? 'h-screen' : 'h-20'"
  >
    <div class="w-full h-full flex navBreak:flex-row flex-col navBreak:gap-12 gap-6 items-center navBreak:max-w-[1800px] mx-auto">
      <div
        class="min-h-[80px] flex items-center justify-between navBreak:justify-start border-b navBreak:border-none navBreak:p-0 px-6 w-full navBreak:w-auto"
      >
        <router-link to="/" class="text-logo text-Primary-Blue font-bold select-none focus-visible:outline-none"
          >ecolarium</router-link
        >
        <button
          v-if="!responsiveNav"
          @click="openResponsiveNav"
          class="rounded-full w-8 h-8 navBreak:hidden flex justify-center items-center bg-Grayscale-Grey-5"
        >
          <i class="yi yi-menu-outline" style="font-size: 20px"></i>
        </button>
        <button
          v-else
          @click="closeResponsiveNav"
          class="rounded-full w-8 h-8 navBreak:hidden flex justify-center items-center bg-Grayscale-Grey-5"
        >
          <i class="yi yi-close" style="font-size: 20px"></i>
        </button>
      </div>
      <div class="flex navBreak:flex-row flex-col navBreak:items-center navBreak:justify-between h-full w-full">
        <div class="flex navBreak:flex-row flex-col navBreak:h-full navBreak:gap-0 gap-5">
          <router-link
            :to="{ name: 'TradeView' }"
            class="w-fit text-base-leading-5 text-Black-and-White-Black-Opacity-50 flex justify-center items-center px-6 relative hover:text-Black-and-White-Black transition-all"
            exact-active-class="!text-Black-and-White-Black after:bg-Primary-Blue after:navBreak:h-1 after:h-full after:block after:navBreak:rounded-t-lg after:rounded-r-lg after:navBreak:w-full after:w-1 after:left-0 after:bottom-0 after:absolute"
          >
            Trade
          </router-link>
          <router-link
            :to="{ name: 'EcoProjectView' }"
            class="w-fit text-base-leading-5 text-Black-and-White-Black-Opacity-50 flex justify-center items-center px-6 relative hover:text-Black-and-White-Black transition-all"
            :class="$route.path.includes('ecoproject') ?'!text-Black-and-White-Black after:bg-Primary-Blue after:navBreak:h-1 after:h-full after:block after:navBreak:rounded-t-lg after:rounded-r-lg after:navBreak:w-full after:w-1 after:left-0 after:bottom-0 after:absolute':''"
          >
            EcoProject
          </router-link>
          <router-link
            :to="{ name: 'EcoMarketView' }"
            class="w-fit text-base-leading-5 text-Black-and-White-Black-Opacity-50 flex justify-center items-center px-6 relative hover:text-Black-and-White-Black transition-all"
            :class="$route.path.includes('ecomarket') ?'!text-Black-and-White-Black after:bg-Primary-Blue after:navBreak:h-1 after:h-full after:block after:navBreak:rounded-t-lg after:rounded-r-lg after:navBreak:w-full after:w-1 after:left-0 after:bottom-0 after:absolute':''"
          >
            EcoMarket
          </router-link>
          <router-link
            :to="{ name: 'ApplyScreenView' }"
            class="w-fit text-base-leading-5 text-Black-and-White-Black-Opacity-50 flex justify-center items-center px-6 relative hover:text-Black-and-White-Black transition-all"
            exact-active-class="!text-Black-and-White-Black after:bg-Primary-Blue after:navBreak:h-1 after:h-full after:block after:navBreak:rounded-t-lg after:rounded-r-lg after:navBreak:w-full after:w-1 after:left-0 after:bottom-0 after:absolute"
          >
            Apply
          </router-link>
        </div>
        <div class="flex navBreak:flex-row flex-col navBreak:items-center gap-6 navBreak:p-0 p-6 relative">
          <!-- we can change dropdown panel width  -->
          <y-dropdown v-if="false" left :classes="['!w-[55px]']">
            <template #activator="{ open }">
              <button @click.stop="open" class="flex items-center gap-1">EN <i class="yi yi-chevron-down"></i></button>
            </template>
            <y-dropdown-item @click="$emit('lowest', group)">TR</y-dropdown-item>
            <y-dropdown-item @click="$emit('relevance', group)">IT</y-dropdown-item>
          </y-dropdown>
          <div v-if="false" class="hidden navBreak:block stroke w-[1px] h-8 bg-Primary-Blue opacity-20"></div>
          <button
            v-if="web3Store.isLoading"
            class="xs:w-fit w-full flex items-center justify-center px-4 py-2.5 border-Primary-Blue border text-Primary-Blue text-sm rounded-md font-semibold hover:bg-Primary-Blue hover:text-white transition-all duration-200 cursor-pointer"
          >
            Loading...
          </button>
          <button
            @click="connectWallet"
            v-else-if="!web3Store.isWalletConnected"
            class="xs:w-fit w-full flex items-center justify-center px-4 py-2.5 border-Primary-Blue border text-Primary-Blue text-sm rounded-md font-semibold hover:bg-Primary-Blue hover:text-white transition-all duration-200 cursor-pointer"
          >
            Connect Wallet
          </button>
          <button
            v-else
            @click="openProfileDropdown"
            class="py-1 px-2 max-w-fit font-bold text-Grayscale-Grey-2 text-sm leading-6 bottom-4 right-4 rounded-lg outline outline-Grayscale-Grey-5 -outline-offset-1 bg-Tint-Brand-Primary"
          >
            {{ web3Store.account }}
          </button>
          <div
            v-if="profileDropdownController"
            ref="profileDropdownMenu"
            class="absolute max-w-fit bg-white py-2 z-20 navBreak:top-10 top-16 navBreak:left-auto navBreak:right-0 left-6 rounded-lg border flex flex-col gap-3 text-Black-and-White-Black font-medium text-base-leading-5 shadow-lg"
          >
            <router-link to="/profile" class="px-6 py-1.5 flex gap-2 items-center">
              <i class="yi yi-user text-Secondary-Light-Blue" style="font-size: 16px"></i>
              Profile
            </router-link>
            <button @click="connectWallet" class="px-6 py-1.5 flex gap-2 items-center">
              <i class="yi yi-sign-out text-Color-Code-Red" style="font-size: 16px"></i>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// eslint-disable-next-line
import { onClickOutside } from '@vueuse/core';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import useWeb3Store from '@/store/web3';

const route = useRoute();
const responsiveNav = ref(false);
const web3Store = useWeb3Store();
const profileDropdownMenu = ref();
const profileDropdownController = ref(false);

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
}

function connectWallet() {
  profileDropdownController.value = false;
  web3Store.connect();
}

onClickOutside(profileDropdownMenu, () => {
  openProfileDropdown();
});

watch(
  () => route.query,
  () => {
    closeResponsiveNav();
    profileDropdownController.value = false;
  },
);
</script>
