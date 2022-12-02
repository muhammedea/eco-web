<template>
  <button
    @click="router.push('/ecoproject/detail')"
    class="h-auto cursor-pointer"
    :class="
      heroCard
        ? 'border rounded-lg w-[333px] flex-1'
        : 'w-full xs:w-n-gap-3-50 md:w-n-gap-3-33 lg:w-n-gap-3-50 xl:w-n-gap-3-33 2xl:w-n-gap-4-25'
    "
  >
    <div class="flex flex-col gap-4">
      <div class="w-full overflow-hidden rounded-lg relative" :class="heroCard ? 'h-[200px]' : 'h-[240px]'">
        <img class="w-full h-full object-cover" src="@/assets/images/exp-photo.jpg" alt="ecoproject-photo" />
        <div
          class="absolute py-1 px-6 font-bold text-Grayscale-Grey-2 text-sm leading-6 bottom-4 right-4 rounded-lg outline outline-Grayscale-Grey-5 -outline-offset-1 bg-Tint-Brand-Primary"
        >
          IMG
        </div>
      </div>
      <div class="flex flex-col gap-2" :class="heroCard ? 'p-4' : ''">
        <div class="flex flex-col text-start">
          <p
            class="text-Black-and-White-Black font-semibold"
            :class="heroCard ? 'text-lg leading-5' : 'text-lg lg:text-2xl leading-6'"
          >
            Bailarina por #1245
          </p>
          <p v-if="heroCard" class="text-sm">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
          </p>
          <button
            v-else
            @click.stop=""
            class="text-Grayscale-Grey-1 text-base-leading-5 max-w-fit hover:underline transition-all"
          >
            Vladsiv
          </button>
        </div>
        <div v-if="!heroCard" class="flex flex-col w-full">
          <div class="w-full flex items-center justify-between text-Grayscale-Grey-3 text-base-leading-5">
            <span>Price</span>
            <span>Offer</span>
          </div>
          <div
            class="w-full flex items-center justify-between text-Black-and-White-Black font-semibold text-xl leading-6"
          >
            <span>1.2 TGS</span>
            <span>-</span>
          </div>
        </div>
      </div>
    </div>
  </button>
</template>
<script setup>
import router from '@/router';

defineProps({
  heroCard: {
    type: Boolean,
    default: false,
  },
});
</script>
