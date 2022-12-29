<template>
  <div class="flex flex-col gap-10 pb-8">
    <div id="about-project" class="flex flex-col gap-5 text-justify">
      <div class="flex flex-col gap-1">
        <h1 class="text-Black-and-White-Black text-logo font-bold">About the {{ project.name }}</h1>
        <p class="text-Grayscale-Grey-3 text-base font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div class="flex flex-wrap md:flex-row flex-col md:gap-0 gap-6">
        <div class="md:w-3/5 w-full h-64 relative">
          <img
            src="@/assets/images/exp-photo.jpg"
            class="w-full h-full object-cover object-center"
            alt="project-photo-1"
          />
          <button class="w-full h-full absolute bg-Overlay-Black flex justify-center items-center top-0 left-0">
            <span
              class="w-14 h-14 animate-pulse !duration-500 rounded-full border-4 border-white text-white text-3xl flex items-center justify-center"
            >
              <i class="yi yi-play"></i>
            </span>
          </button>
        </div>
        <div class="md:w-2/5 xs:w-3/5 w-full flex flex-col gap-6 md:pl-5 text-left">
          <div class="flex flex-col gap-2">
            <div class="flex">
              <div class="w-1/2 flex flex-col">
                <span class="text-sm leading-6 text-Grayscale-Grey-3 flex items-center gap-1">Campaign Status</span>
                <p class="text-sm leading-6 text-Black-and-White-Black font-semibold">In Termination Phase</p>
              </div>
              <div class="w-1/2 flex flex-col pl-5">
                <span class="text-sm leading-6 text-Grayscale-Grey-3 flex items-center gap-1">Campaign Code</span>
                <p class="text-sm leading-6 text-Black-and-White-Black font-semibold">EW5GZ3</p>
              </div>
            </div>
            <div class="flex">
              <div class="w-1/2 flex flex-col">
                <span class="text-sm leading-6 text-Grayscale-Grey-3 flex items-center gap-1"
                  >Campaign Closing Date</span
                >
                <p class="text-sm leading-6 text-Black-and-White-Black font-semibold">19.08.2022</p>
              </div>
              <div class="w-1/2 flex flex-col pl-5">
                <span class="text-sm leading-6 text-Grayscale-Grey-3 flex items-center gap-1">Location</span>
                <p class="text-sm leading-6 text-Black-and-White-Black font-semibold">Global, All Turkey</p>
              </div>
            </div>
            <div class="flex">
              <div class="w-1/2 flex flex-col">
                <span class="text-sm leading-6 text-Grayscale-Grey-3 flex items-center gap-1"
                  >Stage of the Initiative</span
                >
                <p class="text-sm leading-6 text-Black-and-White-Black font-semibold">Growth</p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-between">
            <div class="w-n-gap-2-33 h-12 rounded-md overflow-hidden">
              <img src="@/assets/images/exp-photo.jpg" class="w-full h-full object-cover" alt="project-photo-2" />
            </div>
            <div class="w-n-gap-2-33 h-12 rounded-md overflow-hidden">
              <img src="@/assets/images/exp-photo.jpg" class="w-full h-full object-cover" alt="project-photo-3" />
            </div>
            <div class="w-n-gap-2-33 h-12 rounded-md overflow-hidden relative">
              <div
                class="w-full h-full flex justify-center items-center absolute top-0 left-0 bg-Overlay-Black text-white text-sm"
              >
                +4
              </div>
              <img src="@/assets/images/exp-photo.jpg" class="w-full h-full object-cover" alt="project-photo-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-4 text-base text-Grayscale-Grey-2">
        <span class="text-xl leading-5 text-Black-and-White-Black font-semibold">IMPORTANT ANNOUNCEMENTS:</span>
        <p class="font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
          <span class="font-medium text-Black-and-White-Black">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </span>
        </p>
        <div class="flex flex-col gap-2.5">
          <p class="flex items-center gap-2">
            <span class="w-2 h-2 block rounded-full bg-[#D9D9D9]"></span>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p class="flex items-center gap-2">
            <span class="w-2 h-2 block rounded-full bg-[#D9D9D9]"></span>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
          <p class="flex items-center gap-2">
            <span class="w-2 h-2 block rounded-full bg-[#D9D9D9]"></span>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-4 text-base text-Grayscale-Grey-2">
        <span class="text-xl leading-5 text-Black-and-White-Black font-semibold">FREE SHARE GIFT CAMPAIGN</span>
        <p class="font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <p class="font-normal">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          <span class="font-medium text-Black-and-White-Black">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </span>
        </p>
      </div>
      <div class="flex flex-col gap-4 text-base text-Grayscale-Grey-2">
        <span class="text-xl leading-5 text-Black-and-White-Black font-semibold"
          >FREE SHARE GIFT CAMPAIGN - UPDATE</span
        >
        <p class="font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <p class="font-normal">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div id="documents" class="flex flex-col gap-5 text-justify">
      <div class="flex flex-col gap-1">
        <span class="text-Black-and-White-Black text-logo font-bold">Documents</span>
        <p class="text-Grayscale-Grey-3 text-base font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div class="flex flex-wrap gap-5">
        <div
          v-for="i in 7"
          :key="i"
          class="w-full md:w-n-gap-5-50 border border-Grayscale-Grey-4 rounded-md flex flex-wrap flex-row gap-6 items-center p-4"
        >
          <div class="w-10 h-10 bg-Primary-Blue rounded-full flex items-center justify-center">
            <i class="yi yi-file text-xl text-white"></i>
          </div>
          <div class="flex flex-col flex-wrap flex-1">
            <h1 class="text-Black-and-White-Black font-semibold">
              {{ 'Document ' + i }}
            </h1>
            <p class="text-Grayscale-Grey-2 text-sm">
              {{ 'Document S ' + i }}
            </p>
          </div>
          <!-- eslint-disable-next-line -->
          <a href="#" target="_blank">
            <button class="ml-auto flex items-center justify-center">
              <i class="yi yi-download text-2xl text-Grayscale-Grey-3 hover:text-Primary-Blue"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
    <div id="team" class="flex flex-col gap-5">
      <div class="flex flex-col gap-1">
        <span class="text-Black-and-White-Black text-logo font-bold">Team</span>
        <p class="text-Grayscale-Grey-3 text-base font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div class="flex flex-wrap gap-6">
        <TeamCard v-for="i in 3" :key="i" :item="teamMember" @open="toggleModal(teamMember)"> </TeamCard>
      </div>
      <div id="myModal" class="modal">
        <transition name="pop" mode="out-in">
          <div ref="teamCardModal" v-if="openedCard" class="modal-content w-full h-full lg:w-1/2 lg:h-auto">
            <button class="p-2 yi yi-close" @click="toggleModal"></button>
            <TeamCard :item="openedCard" detail-mode> </TeamCard>
          </div>
        </transition>
      </div>
    </div>
    <div id="production" class="flex flex-col gap-5">
      <div class="flex flex-col gap-1">
        <span class="text-Black-and-White-Black text-logo font-bold">Production</span>
        <p class="text-Grayscale-Grey-3 text-base font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
    </div>
    <div id="financial-tables" class="flex flex-col gap-5">
      <div class="flex flex-col gap-1">
        <span class="text-Black-and-White-Black text-logo font-bold">Financial tables</span>
        <p class="text-Grayscale-Grey-3 text-base font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div class="w-full">
        <y-simple-table ariaDesc="Financial tables" class="border rounded-lg">
          <template #thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </template>
          <template #tbody>
            <tr>
              <td>ariaDesc</td>
              <td>String</td>
              <td>''</td>
            </tr>
            <tr>
              <td>ariaDesc</td>
              <td>String</td>
              <td>''</td>
            </tr>
            <tr>
              <td>ariaDesc</td>
              <td>String</td>
              <td>''</td>
            </tr>
          </template>
        </y-simple-table>
      </div>
    </div>
    <div id="energy-analysis" class="flex flex-col gap-5">
      <div class="flex flex-col gap-1">
        <span class="text-Black-and-White-Black text-logo font-bold">Energy analysis</span>
        <p class="text-Grayscale-Grey-3 text-base font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
    </div>
    <div id="pics-and-videos" class="flex flex-col gap-5">
      <div class="flex flex-col gap-1">
        <span class="text-Black-and-White-Black text-logo font-bold">Pictures & Videos</span>
        <p class="text-Grayscale-Grey-3 text-base font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
    </div>
    <div id="updates" class="flex flex-col gap-5">
      <div class="flex flex-col gap-1">
        <span class="text-Black-and-White-Black text-logo font-bold">Updates</span>
        <p class="text-Grayscale-Grey-3 text-base font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
    </div>
    <div id="questions" class="flex flex-col gap-5 text-justify">
      <div class="flex flex-col gap-1">
        <span class="text-Black-and-White-Black text-logo font-bold">Questions</span>
        <p class="text-Grayscale-Grey-3 text-base font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <div v-for="i in 7" :key="i" class="w-full border h-auto border-Grayscale-Grey-4 rounded-md p-4">
          <y-accordion :title="'Question' + i" :hr="false" collapse icon="yi yi-chevron-right">
            <p class="text-Grayscale-Grey-3 text-base font-medium py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </y-accordion>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import TeamCard from '@/components/ecoproject/ecoprojectdetail/TeamCard.vue';
// eslint-disable-next-line
import { onClickOutside } from '@vueuse/core';
import { ref, computed } from 'vue';
import { getProjectById } from '@/utils/projects';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const project = computed(() => getProjectById(props.id));

const teamCardModal = ref();
const teamMember = ref({
  img: 'images/exp-photo-2.png',
  name: 'Team Member',
  title: 'CEO',
  desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`,
  socials: [
    {
      link: 'https://www.linkedin.com/in/ismail-hakk%C4%B1-karaca-7468196b/',
      icon: 'linkedin-outline',
    },
    {
      link: 'i.karaca@ecolarium.io',
      icon: 'mail',
    },
  ],
});

const openedCard = ref();

function toggleModal(item) {
  const modal = document.getElementById('myModal');
  if (modal.style.display !== 'block') {
    modal.style.display = 'block';
    openedCard.value = item;
  } else {
    modal.style.display = 'none';
    openedCard.value = null;
  }
}
onClickOutside(teamCardModal, () => {
  toggleModal();
});
</script>
<style>
.modal {
  display: none;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
