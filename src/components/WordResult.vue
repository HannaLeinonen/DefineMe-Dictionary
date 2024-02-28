<template>
  <div v-if="dictionaryTerms">
    <div class="dictionaryTerms">
      <h4>Definition :</h4>
      <p>{{ dictionaryTerms.definition }}</p>
    </div>

    <!-- Using if-condition to check if it's null in JSON-data and wont show if its true -->
    <div v-if="dictionaryTerms.noun !== null" class="dictionaryTerms">
      <h4>Noun :</h4>
      <p>{{ dictionaryTerms.noun }}</p>
    </div>

    <div v-if="dictionaryTerms.verb !== null" class="dictionaryTerms">
      <h4>Verb :</h4>
      <p>{{ dictionaryTerms.verb }}</p>
    </div>

    <div class="dictionaryTerms">
      <h4>Synonyms :</h4>
      <ul>
        <li v-for="synonym in dictionaryTerms.synonyms" :key="synonym">{{ synonym }}</li>
      </ul>
    </div>

    <div class="dictionaryTerms">
      <h4>Example :</h4>
      <ul>
        <li v-for="example in dictionaryTerms.examples" :key="example">{{ example }}</li>
      </ul>
    </div>
  </div>

  <div v-else>
    <p>No matching word found, go back and make a new search!</p>
  </div>
</template>

<script>
export default {
  props: {
    dictionaryTerms: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
.dictionaryTerms {
  border-bottom: 2px solid var(--peach);
  margin: 5px 0 5px 0;
}

li {
  list-style: circle;
}
h4 {
  font-family: 'Roboto Slab', serif;
}

li,
p {
  color: white;
}
</style>
