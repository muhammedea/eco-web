<template>
  <div class="flex flex-col gap-3 p-6">
    <span class="text-Black-And-White-Black text-lg font-semibold">Pelease Select the token you want to add to the wallet</span>
    <y-radio v-model="selectedToken" :input-value="1" :label="'Add ' + tokenA.symbol"></y-radio>
    <y-radio v-model="selectedToken" :input-value="2" :label="'Add ' + tokenB.symbol"></y-radio>
    <y-button primary @click="add">Confirm</y-button>
    <y-button @click="$emit('closeYartuModal')" secondary>Cancel</y-button>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import useWeb3Store from '@/store/web3';

const props = defineProps({
  tokenA: {
    type: Object,
    required: true,
  },
  tokenB: {
    type: Object,
    required: true,
  },
});

const selectedToken = ref(1);

const web3Store = useWeb3Store();
const emit = defineEmits(['confirm', 'closeYartuModal']);

function add() {
  const token = selectedToken.value === 1 ? props.tokenA : props.tokenB;
  web3Store.web3provider
    .request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: token.contractAddress,
          symbol: token.symbol,
          decimals: 18,
          image: '',
        },
      },
    })
    .then((success) => {
      if (success) {
        console.log('Token successfully added');
      } else {
        throw new Error('Something went wrong.');
      }
      emit('closeYartuModal');
    })
    .catch((e) => {
      console.log(e);
      emit('closeYartuModal');
    });
}
</script>
