<script setup>
import NavBar from '@/components/NavBar.vue'
import BackIcon from '@/components/icons/BackIcon.vue'
import WordResult from '@/components/WordResult.vue'
import { useSearchStore } from '@/stores/counter'
import { ref } from 'vue'

const store = useSearchStore()
const word = ref(store.word)
</script>

<template>
  <NavBar />
  <BackIcon />

  <div class="container">
    <div class="header">
      <h1>{{ word }}</h1>
      <h4>Word</h4>
    </div>

    <WordResult v-for="term in dictionary" :key="term" :dicionaryTerms="term" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dictionary: []
    }
  },
  props: {},
  created() {
    this.fetchDictionary()
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
