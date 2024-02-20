<script setup>
import NavBar from '@/components/NavBar.vue'
import PopularWords from '@/components/PopularWords.vue'
import { useSearchStore } from '@/stores/counter'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const store = useSearchStore()
const router = useRouter()
const word = ref('')

function searchWord() {
    store.getWord(word.value) // Update word in store from input from user
    console.log(word.value)

    goToResult()
}
function goToResult() {
    router.push('/result')
    }
</script>

<template>
  <NavBar />

  <div class="container">
    <!-- Form get the word to define -->
    <form id="searchForm" action="submit" @submit.prevent="searchWord">
      <input type="text" id="searchInput" v-model="word" placeholder="Search for a word" />
      <button type="submit" id="searchBtn" aria-label="Search" @click="searchWord()">
        <i class="bi bi-search"></i>
      </button>
    </form>
    <ul>
      <h4>{{ title }}</h4>
      <!-- For the words in popularWorlds() get component to render li elements with the words shuffled from the array -->
      <PopularWords v-for="term in popularWords" :key="term.word" :terms="term" />
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* Save the objects from json file in an array */
      dictionary: [],
      title: 'Popular words',
      word: ''
    }
  },
  name: 'SearchView',
  created() {
    this.fetchDictionary()
  },
  computed: {
    popularWords() {
      // Copying the dictionary array
      const dictionaryCopy = [...this.dictionary]
      // Shuffle the copied array
      const shuffled = this.shuffleArray(dictionaryCopy)
      // Slice the first 4 elements to display
      return shuffled.slice(0, 4)
    }
  },
  methods: {
    /* Fetching data fron JSON-file */
    async fetchDictionary() {
      const response = await fetch('dictionary.json')
      const value = await response.json()
      this.dictionary = value
      console.log(value)
    },
    /* Function to create a shuffled array with Fisher-Yates shuffle algorithm */
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    }
  }
}
</script>

<style scoped>
#searchForm {
  width: 100%;
  margin: 1.1rem;
}
#searchInput {
  border: none; /* Removing border for a cleaner look */
  outline: none;
  width: 80%;
  height: 5vh;
  padding-left: 1rem;
  border-radius: 0.5rem 0 0 0.5rem;
}
#searchBtn {
  border: none; /* Removing border for a cleaner look */
  border-radius: 0 0.5rem 0.5rem 0;
  outline: none;
  height: 5vh;
}
#searchBtn .bi {
  opacity: 70%;
}
</style>
