<script setup>
</script>

<template>

    <div v-if="dictionaryTerms">

        <div class="dictionaryTerms">
            <h4>Definition :</h4>
            <p>{{ dictionaryTerms.definition }}</p>
        </div>

        <div v-if="dictionaryTerms.noun !== null" class="dictionaryTerms">
            <h4>Noun :</h4>
            <p>{{ dictionaryTerms.noun }}</p>
        </div>

        <div v-if="dictionaryTerms.verb !== null" class="dictionaryTerms">
            <h4>Verb :</h4>
            <p>{{ dictionaryTerms.verb }}</p>
        </div>

        <div class="dictionaryTerms" >
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
        <p>Loading...</p>
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
    .dicionaryTerms {
        border-bottom: 2px solid var(--peach);
    }

    li {
        list-style: circle;
    }

    li, p {
        font-family: "Roboto Slab", serif;
    }
</style>
