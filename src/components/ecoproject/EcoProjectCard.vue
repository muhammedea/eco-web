<template>
  <button @click="router.push('/ecoproject/detail')" class="w-full xs:w-n-gap-3-50 md:w-n-gap-3-33 lg:w-n-gap-3-50 xl:w-n-gap-3-33 h-auto cursor-pointer">
    <div class="flex flex-col gap-2">
      <div class="w-full overflow-hidden rounded-lg h-[200px]">
        <img class="w-full h-full object-cover" src="@/assets/images/exp-photo.jpg" alt="ecoproject-photo" />
      </div>
      <div class="flex flex-col gap-1.5">
        <div class="flex gap-2 items-center">
          <div class="w-8 h-8 overflow-hidden p-1 rounded-full border">
            <img class="w-full h-full object-contain" src="@/assets/images/exp-logo.jpg" alt="ecoproject-photo" />
          </div>
          <p class="text-base-leading-5 lg:text-lg leading-5 text-Black-and-White-Black font-semibold">GREEN FUEL Technologies</p>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col">
            <div class="flex items-center justify-between">
              <div class="text-sm leading-6 text-Grayscale-Grey-3 flex items-center gap-1">
                <span>Max supply</span>
                <y-tooltip right bottom>
                  <template #tooltip>
                    <p>Information</p>
                  </template>
                  <i class="yi yi-info" style="font-size: 12px"></i>
                </y-tooltip>
              </div>
              <p class="text-sm leading-6 text-Black-and-White-Black">420,000,000.00</p>
            </div>
            <div class="flex items-center justify-between">
              <div class="text-sm leading-6 text-Grayscale-Grey-3 flex items-center gap-1">
                <span>Market cap</span>
                <y-tooltip right bottom>
                  <template #tooltip>
                    <p>Information</p>
                  </template>
                  <i class="yi yi-info" style="font-size: 12px"></i>
                </y-tooltip>
              </div>
              <p class="text-sm leading-6 text-Black-and-White-Black">$2,046,450.82</p>
            </div>
            <div class="flex items-center justify-between">
              <div class="text-sm leading-6 text-Grayscale-Grey-3 flex items-center gap-1">
                <span>Circulating supply</span>
                <y-tooltip right bottom>
                  <template #tooltip>
                    <p>Information</p>
                  </template>
                  <i class="yi yi-info" style="font-size: 12px"></i>
                </y-tooltip>
              </div>
              <p class="text-sm leading-6 text-Black-and-White-Black">120,000,000.00</p>
            </div>
          </div>
          <div class="dashed-stroke"></div>
          <div class="flex flex-col">
            <div class="flex items-center justify-between">
              <div class="text-sm leading-6 text-Grayscale-Grey-3 flex items-center gap-1">
                <span>IDO take amount</span>
                <y-tooltip right bottom>
                  <template #tooltip>
                    <p>Information</p>
                  </template>
                  <i class="yi yi-info" style="font-size: 12px"></i>
                </y-tooltip>
              </div>
              <p class="text-sm leading-6 text-Black-and-White-Black">50,563,533.00</p>
            </div>
            <div class="flex items-center justify-between">
              <div class="text-sm leading-6 text-Grayscale-Grey-3 flex items-center gap-1">
                <span>IDO take sold</span>
                <y-tooltip right bottom>
                  <template #tooltip>
                    <p>Information</p>
                  </template>
                  <i class="yi yi-info" style="font-size: 12px"></i>
                </y-tooltip>
              </div>
              <p class="text-sm leading-6 text-Black-and-White-Black">$263,896.40</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </button>
</template>
<script setup>
import router from '@/router';
</script>
<style scoped>
.dashed-stroke {
  width: 100%;
  height: 1px;
  background-image: linear-gradient(90deg, #dedede, #dedede 75%, transparent 75%, transparent 100%);
  background-size: 8px 1px;
  border: none;
}
</style>
