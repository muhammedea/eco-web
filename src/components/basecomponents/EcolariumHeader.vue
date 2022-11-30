<template>
  <div
    class="w-full overflow-hidden transition-all duration-500 navBreak:h-20 shadow-header-bottom-border navBreak:px-8 flex navBreak:items-center navBreak:justify-center"
    :class="sideNavOpen ? 'h-screen' : 'h-20'"
  >
    <div class="w-full h-full flex navBreak:flex-row flex-col navBreak:gap-12 gap-6 items-center">
      <div
        class="min-h-[80px] flex items-center justify-between navBreak:justify-start border-b navBreak:border-none navBreak:p-0 px-6 w-full navBreak:w-auto"
      >
        <router-link to="/" class="text-logo text-Primary-Blue font-bold select-none focus-visible:outline-none"
          >ecolarium</router-link
        >
        <button
          @click="openResponsiveNav"
          class="rounded-full w-8 h-8 navBreak:hidden flex justify-center items-center bg-Grayscale-Grey-5"
        >
          <i :class="sideNavOpen ? 'yi yi-close' : 'yi yi-menu-outline'" style="font-size: 20px"></i>
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
            exact-active-class="!text-Black-and-White-Black after:bg-Primary-Blue after:navBreak:h-1 after:h-full after:block after:navBreak:rounded-t-lg after:rounded-r-lg after:navBreak:w-full after:w-1 after:left-0 after:bottom-0 after:absolute"
          >
            EcoProject
          </router-link>
          <router-link
            :to="{ name: 'EcoMarketView' }"
            class="w-fit text-base-leading-5 text-Black-and-White-Black-Opacity-50 flex justify-center items-center px-6 relative hover:text-Black-and-White-Black transition-all"
            exact-active-class="!text-Black-and-White-Black after:bg-Primary-Blue after:navBreak:h-1 after:h-full after:block after:navBreak:rounded-t-lg after:rounded-r-lg after:navBreak:w-full after:w-1 after:left-0 after:bottom-0 after:absolute"
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
        <div class="flex navBreak:flex-row flex-col navBreak:items-center gap-6 navBreak:p-0 p-6">
          <!-- we can change dropdown panel width  -->
          <y-dropdown left :classes="['!w-[55px]']">
            <template #activator="{ open }">
              <button @click.stop="open" class="flex items-center gap-1">EN <i class="yi yi-chevron-down"></i></button>
            </template>
            <y-dropdown-item @click="$emit('lowest', group)">TR</y-dropdown-item>
            <y-dropdown-item @click="$emit('relevance', group)">IT</y-dropdown-item>
          </y-dropdown>
          <div class="hidden navBreak:block stroke w-[1px] h-8 bg-Primary-Blue opacity-20"></div>
          <button
            @click="connectWallet = !connectWallet"
            v-if="!connectWallet"
            class="xs:w-fit w-full flex items-center justify-center px-4 py-2.5 border-Primary-Blue border text-Primary-Blue text-sm rounded-md font-semibold hover:bg-Primary-Blue hover:text-white transition-all cursor-pointer"
          >
            Connect Wallet
          </button>
          <button
            v-else
            @click="connectWallet = !connectWallet"
            class="py-1 px-2 max-w-fit font-bold text-Grayscale-Grey-2 text-sm leading-6 bottom-4 right-4 rounded-lg outline outline-Grayscale-Grey-5 -outline-offset-1 bg-Tint-Brand-Primary"
          >
            1BoatSLRHtKNngkdXEeobR76b53LETtpyT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const sideNavOpen = ref(false);
const connectWallet = ref(false);
function openResponsiveNav() {
  sideNavOpen.value = !sideNavOpen.value;
  if (document.body.classList.value === 'overflow-hidden') document.body.classList.remove('overflow-hidden');
  else document.body.classList.add('overflow-hidden');
}
</script>
