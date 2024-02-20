<script setup>
import { useSearchStore } from '@/stores/counter';

const store = useSearchStore();
 // Deklarera en ref för att lagra informationen om sökordet
const terms = {
  word: store.word
};

</script>

<template>


    <div v-if="terms">
        <div class="header">
            <h1>{{ terms.word }}</h1>
            <h4>Word</h4>

        </div>
        <div class="definition">
            <h4>Definition</h4>
            <p>{{ terms.definition }}</p>
        </div>
        <div class="noun">
            <h4>Noun</h4>
            <p>{{ terms.noun }}</p>
        </div>
        <div class="verb">
            <h4>Verb</h4>
            <p>{{ terms.verb }}</p>
        </div>
        <div class="synonyms">
            <h4>Synonyms</h4>
            <ul>
                <li v-for="synonym in terms.synonyms" :key="synonym">{{ synonym }}</li>
            </ul>
        </div>
        <div class="example">
            <h4>Example</h4>
            <ul>
                <li v-for="example in terms.examples" :key="example">{{ example }}</li>
            </ul>
        </div>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>
<script>
export default {
        props: {
            terms: {
                required: true,
                type: String
            }
        }
    }

</script>

<style scoped>
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
