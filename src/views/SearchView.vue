<script setup>
import NavBar from '@/components/NavBar.vue'
import PopularWords from '@/components/PopularWords.vue'
import { useSearchStore } from '@/stores/counter'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const store = useSearchStore()
const router = useRouter()
const word = ref('')

function searchWord() {
  store.getWord(word.value) // Update word in store from input from user
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

      <button type="submit" id="searchBtn" @click="searchWord()">
        <i class="bi bi-search-heart"></i>
      </button>
    </form>
    <ul>
      <h4>{{ title }}</h4>
      <!-- For the words in popularWorlds() get component to render li elements with the words shuffled from the array -->
      <PopularWords v-for="words in popularWords" :key="words.word" :terms="words" />
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* Save the objects from json file in an array */
      dictionary: [],
      title: 'Popular words'
    }
  },
  name: 'SearchView',
  created() {
    this.fetchDictionary()
  },
  computed: {
    popularWords() {
      // Create a copy of the dictionary array with the shuffledArray function
      const shuffled = this.shuffleArray([...this.dictionary]);
      // Slice the first 4 elements to display
      return shuffled.slice(0, 4);
    }
  },
  methods: {
    /* Fetching data fron JSON-file */
    async fetchDictionary() {
      const response = await fetch('dictionary.json')
      const value = await response.json()
      this.dictionary = value
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
.container {
    width: 90vw;
    margin: 0 auto;
}

#searchForm {
    margin: 0 auto;
    width: 90%;
    margin-bottom: 2rem;
}
#searchInput {
    /* margin-left: 1rem; */
    border: none; /* Removing border for a cleaner look */
    outline: none;
    width: 85%;
    height: 48px;
    padding-left: 1rem;
    border-radius: 0.5rem 0 0 0.5rem;
}
#searchBtn {
    border: none; /* Removing border for a cleaner look */
    border-radius: 0 0.5rem 0.5rem 0;
    height: 50px;
    width: 9%;
    outline: none;
    background-color: white;
}
#searchBtn .bi {
    opacity: 70%;
}

/* Setting negative value on ul because it has default margin I don't want */
ul {
    margin-left: -1.5rem;
}

/* Media-queries wider screen (default is mobile) */
@media only screen and (min-width: 768px) and (max-width: 959px){
.container {
    width: 80vw;
}

#searchForm {
    margin: 0 auto;
    width: 70%;
    margin-bottom: 2rem;
}

}
</style>
