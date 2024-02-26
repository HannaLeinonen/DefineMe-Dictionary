<script setup>
</script>

<template>

    <div v-if="dicionaryTerms">

        <div class="dicionaryTerms">
            <h4>Definition :</h4>
            <p>{{ dicionaryTerms.definition }}</p>
        </div>

        <div v-if="dicionaryTerms.noun !== null" class="dicionaryTerms">
            <h4>Noun :</h4>
            <p>{{ dicionaryTerms.noun }}</p>
        </div>

        <div v-if="dicionaryTerms.verb !== null" class="dicionaryTerms">
            <h4>Verb :</h4>
            <p>{{ dicionaryTerms.verb }}</p>
        </div>

        <div class="dicionaryTerms" >
            <h4>Synonyms :</h4>
            <ul>
                <li v-for="synonym in dicionaryTerms.synonyms" :key="synonym">{{ synonym }}</li>
            </ul>
        </div>

        <div class="dicionaryTerms">
            <h4>Example :</h4>
            <ul>
                <li v-for="example in dicionaryTerms.examples" :key="example">{{ example }}</li>
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
            dicionaryTerms: {
                required: true,
                type: String
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
