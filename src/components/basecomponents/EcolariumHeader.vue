<template>
  <div class="w-full h-20 shadow-header-bottom-border px-8 flex items-center justify-center">
    <div class="w-full h-full flex gap-12 items-center">
      <div class="">
        <router-link to="/" class="text-logo text-Primary-Blue font-bold">ecolarium</router-link>
      </div>
      <div class="flex items-center justify-between h-full w-full">
        <div class="flex h-full">
          <router-link
            :to="{ name: 'TradeView' }"
            class="text-base-leading-5 text-Black-and-White-Black-Opacity-50 flex justify-center items-center px-6 relative hover:text-Black-and-White-Black transition-all"
            exact-active-class="!text-Black-and-White-Black after:bg-Primary-Blue after:h-1 after:block after:rounded-t-lg after:w-full after:bottom-0 after:absolute"
          >
            Trade
          </router-link>
          <router-link
            :to="{ name: 'EcoProjectView' }"
            class="text-base-leading-5 text-Black-and-White-Black-Opacity-50 flex justify-center items-center px-6 relative hover:text-Black-and-White-Black transition-all"
            exact-active-class="!text-Black-and-White-Black after:bg-Primary-Blue after:h-1 after:block after:rounded-t-lg after:w-full after:bottom-0 after:absolute"
          >
            EcoProject
          </router-link>
          <router-link
            :to="{ name: 'EcoMarketView' }"
            class="text-base-leading-5 text-Black-and-White-Black-Opacity-50 flex justify-center items-center px-6 relative hover:text-Black-and-White-Black transition-all"
            exact-active-class="!text-Black-and-White-Black after:bg-Primary-Blue after:h-1 after:block after:rounded-t-lg after:w-full after:bottom-0 after:absolute"
          >
            EcoMarket
          </router-link>
          <router-link
            :to="{ name: 'ApplyScreenView' }"
            class="text-base-leading-5 text-Black-and-White-Black-Opacity-50 flex justify-center items-center px-6 relative hover:text-Black-and-White-Black transition-all"
            exact-active-class="!text-Black-and-White-Black after:bg-Primary-Blue after:h-1 after:block after:rounded-t-lg after:w-full after:bottom-0 after:absolute"
          >
            Apply
          </router-link>
        </div>
        <div class="flex items-center gap-6">
          <span>EN</span>
          <div class="stroke w-[1px] h-8 bg-Primary-Blue opacity-20 block"></div>
          <a class="px-4 py-2.5 border-Primary-Blue border text-Primary-Blue text-sm rounded-md font-semibold hover:bg-Primary-Blue hover:text-white transition-all cursor-pointer">
            Connect Wallet
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
