<script setup>
import NavBar from '@/components/NavBar.vue';
import BackIcon from '@/components/icons/BackIcon.vue';
import WordResult from '@/components/WordResult.vue';
import { useSearchStore } from '@/stores/counter';
import { ref } from 'vue';

const store = useSearchStore();
const word = ref(store.word) ;


</script>

<template>
  <NavBar />
  <BackIcon />

  <div class="container">

    <WordResult  :terms="word"/>
  </div>
</template>


<style scoped>
.container {
  background-color: var(--grey);
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
}
</style>
