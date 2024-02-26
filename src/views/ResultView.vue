<script setup>
/* import NavBar from '@/components/NavBar.vue'
import BackIcon from '@/components/icons/BackIcon.vue'
import WordResult from '@/components/WordResult.vue'
import { useSearchStore } from '@/stores/counter'
import { ref, watch } from 'vue'

const store = useSearchStore()
const searchWord = ref(store.word) */
/* let dictionary = []; */
/* const matchingTerm = ref(null); */ // Initialize matchingTerm as a ref

/* async function fetchDictionary() {
  const response = await fetch('dictionary.json');
  const value = await response.json();
  dictionary = value;
  updateMatchingTerm(); // Update matchingTerm after data is available
}

function updateMatchingTerm() {
  matchingTerm.value = dictionary?.find(term => term.word === searchWord.value);
}

fetchDictionary(); */

 // Watch for changes in searchWord and update matchingTerm accordingly



</script>

<template>
  <NavBar />
  <BackIcon />

  <div class="container">
    <div class="header">
      <h1>{{ searchWord }}</h1>
      <h4>Word</h4>
    </div>

    <WordResult :dicionaryTerms="matchingTerm" />
    <WordResult v-for="matchingTerm in updateMatchingTerm" :key="matchingTerm" :dicionaryTerms="matchingTerm" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import BackIcon from '@/components/icons/BackIcon.vue'
import WordResult from '@/components/WordResult.vue'
import { useSearchStore } from '@/stores/counter'
import { ref } from 'vue'

const store = useSearchStore()
const searchWord = ref(store.word)
const matchingTerm = ref({});


export default {
  data() {
    return {
      dictionary: []
    }
  },
  created() {
    this.fetchDictionary()
  },
  computed: {
    updateMatchingTerm() {
        matchingTerm.value = this.dictionary.find(term => term.word === searchWord.value);

        return matchingTerm.value

    }
  },
  methods: {
    async fetchDictionary() {
      const response = await fetch('dictionary.json')
      const value = await response.json()
      this.dictionary = value
    }
  }
}
</script>
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
