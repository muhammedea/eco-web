<template>
  <div class="w-full flex flex-col p-6 gap-6">
    <button
      @click="router.back()"
      class="flex gap-2 items-center w-fit text-base-leading-5 text-Black-and-White-Black font-semibold hover:text-Black-and-White-Black-Opacity-50"
    >
      <y-icon name="yi yi-chevron-left text-2xl"></y-icon>
      Go back
    </button>
    <div class="w-full flex items-center gap-4 flex-wrap justify-between">
      <div class="flex items-center gap-3">
        <span class="w-10 h-10 border rounded-full p-2">
          <img src="@/assets/images/ampl.svg" alt="token-logo" />
        </span>
        <p class="font-bold text-2xl leading-10 text-Black-and-White-Black">Orange Renewable Energy Plant 001</p>
      </div>
      <y-dropdown left>
        <y-dropdown-item @click="changePeriod('january')" :prefix="selectedPeriod == 'january' ? 'yi yi-check' : ''">
          January, 2023
        </y-dropdown-item>
        <y-dropdown-item @click="changePeriod('february')" :prefix="selectedPeriod == 'february' ? 'yi yi-check' : ''">
          February, 2023
        </y-dropdown-item>
        <y-dropdown-item @click="changePeriod('march')" :prefix="selectedPeriod == 'march' ? 'yi yi-check' : ''">
          March, 2023
        </y-dropdown-item>
        <y-dropdown-item @click="changePeriod('april')" :prefix="selectedPeriod == 'april' ? 'yi yi-check' : ''">
          April, 2023
        </y-dropdown-item>

        <template #activator="{ open }">
          <div class="flex items-center gap-3">
            <h1 class="text-base-leading-5 text-Grayscale-Grey-2">Period:</h1>
            <button
              @click="open"
              class="flex items-center border border-Primary-Blue rounded text-Primary-Blue hover:bg-LIGHTBLUE-6 transition-all duration-200 text-base-leading-5 font-semibold gap-2 p-2 min-w-max w-fit"
            >
              <span class="capitalize">{{ selectedPeriod }}</span>
              <y-icon name="yi yi-chevron-down text-Grayscale-Grey-2 text-2xl" />
            </button>
          </div>
        </template>
      </y-dropdown>
    </div>
    <div class="w-full flex flex-col xl:flex-row items-center gap-10">
      <div class="w-full flex flex-col sm:flex-row p-4 xs:p-6 gap-6 xl:justify-between border rounded-xl">
        <div class="flex flex-col gap-2.5">
          <p class="text-base-leading-5 font-medium">Total power production</p>
          <div
            class="flex items-center gap-1.5 text-2xl 2xl:text-logo leading-[52px] text-Black-and-White-Black font-semibold"
          >
            1,234,000 KwH
            <span class="text-base text-Color-Code-Green font-medium flex items-center gap-1">
              <img class="h-4 w-4" src="@/assets/icon/arrow-up.svg" alt="arrow-up" />
              1%
            </span>
          </div>
          <p class="text-xs text-Grayscale-Grey-2">All time production</p>
        </div>
        <div class="flex items-center gap-6 xl:gap-10">
          <div class="flex flex-col navBreak:flex-row xl:flex-col gap-6">
            <div class="flex flex-col gap-1.5">
              <p class="text-xs text-Grayscale-Grey-2">Todays power production</p>
              <div class="flex items-center gap-1.5 text-sm xs:text-base-leading-5 text-Black-and-White-Black font-meidum">
                20.5 KwH
                <span class="text-xs text-Color-Code-Green font-medium flex items-center gap-1">
                  <img class="h-3 w-3" src="@/assets/icon/arrow-up.svg" alt="arrow-up" />
                  1%
                </span>
              </div>
            </div>
            <div class="flex flex-col gap-1.5">
              <p class="text-xs text-Grayscale-Grey-2">Billing status</p>
              <span class="text-sm xs:text-base-leading-5 text-Color-Code-Green font-medium flex items-center gap-1">
                Billed on, Febuary 10
              </span>
            </div>
          </div>
          <div class="flex flex-col navBreak:flex-row xl:flex-col gap-6">
            <div class="flex flex-col gap-1.5">
              <p class="text-xs text-Grayscale-Grey-2">This week power production</p>
              <div class="flex items-center gap-1.5 text-sm xs:text-base-leading-5 text-Black-and-White-Black font-meidum">
                100 KwH
                <span class="text-xs text-Color-Code-Red font-medium flex items-center gap-1">
                  <img class="h-3 w-3" src="@/assets/icon/arrow-down.svg" alt="arrow-down" />
                  1%
                </span>
              </div>
            </div>
            <div class="flex flex-col gap-1.5">
              <p class="text-xs text-Grayscale-Grey-2">Billed amount</p>
              <span class="text-sm xs:text-base-leading-5 text-Black-and-White-Black font-medium flex items-center gap-1">
                $ 8,000.00
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col pb-9 p-4 xs:p-6 gap-5 justify-between border rounded-xl">
        <p class="text-base leading-[22px] text-Black-and-White-Black font-medium">
          You have 3 stake position for this month
        </p>
        <div class="flex flex-col sm:flex-row gap-6 w-full items-center">
          <div class="w-full sm:w-2/3 flex items-center">
            <div class="flex flex-col gap-1.5 w-1/2">
              <p class="text-xs leading-6 text-Grayscale-Grey-2">Your percentage:</p>
              <span class="text-sm xs:text-base text-Black-and-White-Black font-medium flex items-center gap-1">
                1.07% (118,100 KwH)
              </span>
            </div>
            <div class="flex flex-col gap-1.5 w-1/2">
              <p class="text-xs leading-6 text-Grayscale-Grey-2">Your reward:</p>
              <span class="text-sm xs:text-base text-Black-and-White-Black font-medium flex items-center gap-1">
                127,600 ECO_ORNG_1
              </span>
            </div>
          </div>
          <button
            class="w-full sm:w-1/3 bg-Primary-Blue text-white rounded py-2.5 border border-Primary-Blue hover:bg-white hover:text-Primary-Blue transition-all duration-200"
          >
            Claim All
          </button>
        </div>
      </div>
    </div>
    <div class="w-full h-[524px] border rounded-xl flex items-center justify-center">
        <span class="text-[120px] font-bold text-Acsen-Yellow">
          <ProductionChart></ProductionChart>
        </span>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ProductionChart from '@/components/ecoproject/ecoprojectdetail/ProductionChart.vue';

const router = useRouter();

const selectedPeriod = ref('january');
function changePeriod(period) {
  selectedPeriod.value = period;
  console.log('change period to', period);
}
</script>
