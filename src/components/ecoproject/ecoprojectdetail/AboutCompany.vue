<template>
  <div
    class="flex flex-col gap-10 w-full xs:w-[333px] sticky top-24 max-h-screen pb-8 overflow-y-scroll scrollbar-hide"
  >
    <div class="flex flex-col gap-4">
      <div class="flex gap-3 items-center">
        <div class="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden outline -outline-offset-1 outline-Grayscale-Grey-5">
          <img src="@/assets/images/exp-photo-2.png" alt="brand-logo" class="h-full rounded-full object-cover" />
        </div>
        <div class="text-base-leading-5 flex flex-col text-Black-and-White-Black font-bold">
          <span class="line-clamp-2">Bluth Company</span>
          <span class="font-normal text-Grayscale-Grey-2">Green company since 2010</span>
        </div>
      </div>
      <p class="text-Grayscale-Grey-2 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <div class="flex flex-col gap-3">
        <div class="text-sm leading-6 flex items-start gap-2 text-Grayscale-Grey-1 font-normal">
          <i class="yi yi-location" style="font-size: 24px"></i>4517 Washington Ave. Manchester, Kentucky 39495
        </div>
        <div class="text-sm leading-6 flex items-start gap-2 text-Grayscale-Grey-1 font-normal">
          <i class="yi yi-shared-with-me" style="font-size: 24px"></i>Number of worker: 45 worker
        </div>
        <div class="text-sm leading-6 flex items-start gap-2 text-Grayscale-Grey-1 font-normal">
          <i class="yi yi-web" style="font-size: 24px"></i
          ><a
            href="https://www.bluthcompany.com"
            class="underline text-Dark-Mode-Blue-3 hover:no-underline"
            target="_blank"
            >www.bluthcompany.com</a
          >
        </div>
        <div class="flex items-center gap-3">
          <a
            href="#"
            target="_blank"
            class="w-8 h-8 bg-Grayscale-Grey-5 text-Grayscale-Grey-3 rounded-full p-1.5 font-bold hover:shadow-md"
            ><img src="@/assets/icon/facebook.svg" class="w-full" alt="facebook"
          /></a>
          <a
            href="#"
            target="_blank"
            class="w-8 h-8 bg-Grayscale-Grey-5 text-Grayscale-Grey-3 rounded-full p-1.5 font-bold hover:shadow-md"
            ><img src="@/assets/icon/twitter.svg" class="w-full" alt="twitter"
          /></a>
          <a
            href="#"
            target="_blank"
            class="w-8 h-8 bg-Grayscale-Grey-5 text-Grayscale-Grey-3 rounded-full p-1.5 font-bold hover:shadow-md"
            ><img src="@/assets/icon/linkedin.svg" class="w-full" alt="linkedin"
          /></a>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-4">
        <span class="text-Black-and-White-Black text-base-leading-5 font-bold">My Stakes</span>
        <EcoProjectStakeCard :stake-progress="55" v-for="i in 3" :key="i"/>
      </div>
      <div class="flex flex-col gap-4">
        <span class="text-Black-and-White-Black text-base-leading-5 font-bold">Financial Details</span>
        <div class="w-full p-4 border rounded-md">
          <div class="w-full flex flex-col gap-2">
            <div class="flex items-end w-full">
              <div class="flex flex-col xs:flex-row">
                <span class="text-xl leading-6 text-Black-and-White-Black">230,000,000.00</span>
                <span class="text-sm text-Grayscale-Grey-3 ml-1">of 420,000,000.00</span>
              </div>
              <span class="text-xl leading-6 text-Black-and-White-Black ml-auto">%{{ progress }}</span>
            </div>
            <div class="flex flex-col">
              <y-progress-bar :progress="progress" :height="8" color="#4ED8F7"></y-progress-bar>
              <div class="flex items-center justify-between text-sm text-Grayscale-Grey-3 leading-6">
                <span>790 investors</span>
                <span>1 month left</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full p-4 border rounded-md">
          <div class="w-full flex flex-col gap-2">
            <div class="flex">
              <div class="w-1/2 flex flex-col">
                <div class="text-sm leading-6 text-Grayscale-Grey-3 flex items-center gap-1">
                  <span>Max supply</span>
                  <y-tooltip right bottom>
                    <template #tooltip>
                      <p>Information</p>
                    </template>
                    <i class="yi yi-info" style="font-size: 12px"></i>
                  </y-tooltip>
                </div>
                <p class="text-sm leading-6 text-Black-and-White-Black font-semibold">420,000,000.00</p>
              </div>
              <div class="w-1/2 flex flex-col">
                <div class="text-sm leading-6 text-Grayscale-Grey-3 flex items-center gap-1">
                  <span>Market cap</span>
                  <y-tooltip right bottom>
                    <template #tooltip>
                      <p>Information</p>
                    </template>
                    <i class="yi yi-info" style="font-size: 12px"></i>
                  </y-tooltip>
                </div>
                <p class="text-sm leading-6 text-Black-and-White-Black font-semibold">$2,046,450.82</p>
              </div>
            </div>
            <div class="flex">
              <div class="w-1/2 flex flex-col">
                <div class="text-sm leading-6 text-Grayscale-Grey-3 flex items-center gap-1">
                  <span>IDO take amount</span>
                  <y-tooltip right bottom>
                    <template #tooltip>
                      <p>Information</p>
                    </template>
                    <i class="yi yi-info" style="font-size: 12px"></i>
                  </y-tooltip>
                </div>
                <p class="text-sm leading-6 text-Black-and-White-Black font-semibold">50,563,533.00</p>
              </div>
              <div class="w-1/2 flex flex-col">
                <div class="text-sm leading-6 text-Grayscale-Grey-3 flex items-center gap-1">
                  <span>IDO take sold</span>
                  <y-tooltip right bottom>
                    <template #tooltip>
                      <p>Information</p>
                    </template>
                    <i class="yi yi-info" style="font-size: 12px"></i>
                  </y-tooltip>
                </div>
                <p class="text-sm leading-6 text-Black-and-White-Black font-semibold">₺ 263,896.40</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5">
      <span class="text-Black-and-White-Black text-base-leading-5 font-bold">More EcoProject</span>
      <div class="flex flex-col gap-2">
        <div class="flex gap-2 items-center">
          <div class="flex flex-col gap-2">
            <div class="flex gap-2 min-w-max items-center">
              <div class="w-6 h-6 outline-Grayscale-Grey-5 outline -outline-offset-1 rounded-full p-0.5">
                <img src="@/assets/images/exp-logo.jpg" class="w-full h-full object-contain" alt="" />
              </div>
              <span class="text-sm text-Grayscale-Grey-2">Greenland New Energy</span>
            </div>
            <p class="text-Black-and-White-Black font-semibold text-base">Green wind electric project of west coast</p>
          </div>
          <div class="py-3 pr-2 rounded-md overflow-hidden">
            <img
              src="@/assets/images/exp-photo-2.png"
              class="h-[57px] object-cover w-[94px] rounded-md"
              alt="project-photo"
            />
          </div>
        </div>
        <div class="w-full h-px bg-Grayscale-Grey-5"></div>
        <div class="flex gap-2 items-center">
          <div class="flex flex-col gap-2">
            <div class="flex gap-2 min-w-max items-center">
              <div class="w-6 h-6 outline-Grayscale-Grey-5 outline -outline-offset-1 rounded-full p-0.5">
                <img src="@/assets/images/exp-logo.jpg" class="w-full h-full object-contain" alt="" />
              </div>
              <span class="text-sm text-Grayscale-Grey-2">Greenland New Energy</span>
            </div>
            <p class="text-Black-and-White-Black font-semibold text-base">Green wind electric project of west coast</p>
          </div>
          <div class="py-3 pr-2 rounded-md overflow-hidden">
            <img
              src="@/assets/images/exp-photo-2.png"
              class="h-[57px] object-cover w-[94px] rounded-md"
              alt="project-photo"
            />
          </div>
        </div>
        <div class="w-full h-px bg-Grayscale-Grey-5"></div>
        <div class="flex gap-2 items-center">
          <div class="flex flex-col gap-2">
            <div class="flex gap-2 min-w-max items-center">
              <div class="w-6 h-6 outline-Grayscale-Grey-5 outline -outline-offset-1 rounded-full p-0.5">
                <img src="@/assets/images/exp-logo.jpg" class="w-full h-full object-contain" alt="" />
              </div>
              <span class="text-sm text-Grayscale-Grey-2">Greenland New Energy</span>
            </div>
            <p class="text-Black-and-White-Black font-semibold text-base">Green wind electric project of west coast</p>
          </div>
          <div class="py-3 pr-2 rounded-md overflow-hidden">
            <img
              src="@/assets/images/exp-photo-2.png"
              class="h-[57px] object-cover w-[94px] rounded-md"
              alt="project-photo"
            />
          </div>
        </div>
        <div class="w-full h-px bg-Grayscale-Grey-5"></div>
        <div class="flex gap-2 items-center">
          <div class="flex flex-col gap-2">
            <div class="flex gap-2 min-w-max items-center">
              <div class="w-6 h-6 outline-Grayscale-Grey-5 outline -outline-offset-1 rounded-full p-0.5">
                <img src="@/assets/images/exp-logo.jpg" class="w-full h-full object-contain" alt="" />
              </div>
              <span class="text-sm text-Grayscale-Grey-2">Greenland New Energy</span>
            </div>
            <p class="text-Black-and-White-Black font-semibold text-base">Green wind electric project of west coast</p>
          </div>
          <div class="py-3 pr-2 rounded-md overflow-hidden">
            <img
              src="@/assets/images/exp-photo-2.png"
              class="h-[57px] object-cover w-[94px] rounded-md"
              alt="project-photo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import EcoProjectStakeCard from './EcoProjectStakeCard.vue';

const progress = ref(53);

</script>
