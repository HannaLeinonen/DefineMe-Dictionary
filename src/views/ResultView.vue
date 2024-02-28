<script setup>
import NavBar from '@/components/NavBar.vue'
import BackIcon from '@/components/icons/BackIcon.vue'
import WordResult from '@/components/WordResult.vue'
import { useSearchStore } from '@/stores/counter'
import { ref, watch } from 'vue'

const store = useSearchStore()
const searchWord = ref(store.word) // Getting the stored search word from pinia store
let dictionary = []
const matchingTerm = ref({}) // Initialize matchingTerm with an empty object

/* Fetching the JSON-data and putting it in variable "dictionary" then calling the updateMatchingTerm() */
async function fetchDictionary() {
  try {
    const response = await fetch('dictionary.json')
    const value = await response.json()
    dictionary = value
    updateMatchingTerm() // Update matchingTerm after data is available
  } catch (error) {
    console.error('Error fetching dictionary:', error)
  }
}

/* Function to find and match searchWord with JSON-data "word" word*/
function updateMatchingTerm() {
  const matchedTerm = dictionary.find(
    (term) => term.word.toLowerCase() === searchWord.value.toLowerCase()
  )
  matchingTerm.value = matchedTerm
}

fetchDictionary()

// Listen for changes in searchWord and update matchingTerm when it changes
watch(searchWord, updateMatchingTerm)
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

    <!-- Sending props to the component that has the matched word from JSON-data -->
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

  box-shadow: 0px -1px 18px 3px rgba(0, 0, 0, 0.43);
  -webkit-box-shadow: 0px -1px 18px 3px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 0px -1px 18px 3px rgba(0, 0, 0, 0.43);
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

/* Media-queries tablets (default is mobile) */
@media only screen and (min-width: 768px) and (max-width: 959px) {
  .container {
    width: 65vw;
  }
  .backBtn {
    width: max-content;
    margin-left: 11vw;
  }
}

/* Media-queries desktop */
@media only screen and (min-width: 992px) {
  .container {
    width: 35vw;
  }
  .backBtn {
    width: max-content;
    margin: 0 auto 0 30vw;
  }
}
</style>
