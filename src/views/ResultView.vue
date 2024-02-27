<script setup>
import NavBar from '@/components/NavBar.vue'
import BackIcon from '@/components/icons/BackIcon.vue'
import WordResult from '@/components/WordResult.vue'
import { useSearchStore } from '@/stores/counter'
import { ref, watch } from 'vue'

const store = useSearchStore()
const searchWord = ref(store.word)
let dictionary = [];
const matchingTerm = ref({}); // Initialize matchingTerm with an empty object

async function fetchDictionary() {
  try {
    const response = await fetch('dictionary.json');
    const value = await response.json();
    dictionary = value;
    updateMatchingTerm(); // Update matchingTerm after data is available

  } catch (error) {
    console.error('Error fetching dictionary:', error);
  }
}

function updateMatchingTerm() {
  matchingTerm.value = dictionary.find(term => term.word === searchWord.value) ;

}

fetchDictionary();

// Listen for changes in searchWord and update matchingTerm when it changes
watch(searchWord, updateMatchingTerm);


</script>

<template>
  <NavBar />
  <BackIcon />

  <div class="container">
    <div class="header">
      <h1>{{ searchWord }}</h1>
      <h4>Word</h4>
    </div>

    <WordResult :dictionaryTerms="matchingTerm" />
  </div>
</template>

<style scoped>
.container {
  background-color: var(--grey);
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  text-align: center;
  border-bottom: 2px solid var(--peach);
}
.header h1 {
  flex-grow: 1;
  margin-right: 2.5rem;
}
</style>
