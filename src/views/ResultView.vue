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
  const matchedTerm = dictionary.find(term => term.word.toLowerCase() === searchWord.value.toLowerCase()) ;
  matchingTerm.value = matchedTerm;
}

fetchDictionary();

// Listen for changes in searchWord and update matchingTerm when it changes
watch(searchWord, updateMatchingTerm);


</script>

<template>
  <NavBar />
  <div class="backBtn">
    <BackIcon />
  </div>

  <div class="container">
    <div class="header">
      <h1>{{ matchingTerm.word }}</h1>
      <h4>Word :</h4>
    </div>

    <WordResult :dictionaryTerms="matchingTerm" />
  </div>
</template>

<style scoped>
.container {
    width: 65vw;
    background-color: var(--grey);
    margin: 0 auto;
    margin-bottom: 2rem;
    padding: 2rem;
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
    color: white;
}
.backBtn {
    width: max-content;
    margin-left: 1rem;
}



@media only screen and (min-width: 768px) and (max-width: 959px) {
    .container {
        width: 65vw;
    }
    .backBtn{
    width: max-content;
    margin-left: 5.5rem;
}
}
</style>
