<script setup>
    import NavBar from '@/components/NavBar.vue';
    import SearchBar from '@/components/SearchBar.vue';
    import PopularWords from '@/components/PopularWords.vue';
    /* import { ref } from 'vue'; */


</script>

<template>
    <NavBar />

    <SearchBar />

    <div class="container">
        <h4>{{ title }}</h4>
        <ul>
            <PopularWords v-for="term in popularWords" :key="term" :terms="term"/>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                /* Using the PopularWords-component to save the words input from SearchBar-component in an array */
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
                // Shuffle the dictionary array
            const dictionaryCopy = [...this.dictionary];
            // Shuffle the copied array
            const shuffled = this.shuffleArray(dictionaryCopy);
            // Slice the first 4 elements
            return shuffled.slice(0, 4);
            }
        },
        methods: {
            async fetchDictionary() {
                const response = await fetch('dictionary.json')
                const value = await response.json()
                this.dictionary = value
            },
            shuffleArray(array) {
                // Fisher-Yates shuffle algorithm
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            },
            searchWord() {
                // Byt ut '/home/result' mot den faktiska sökvägen till den nya sidan
                window.location.href = '/home/result';
            }
        }

    }
</script>

<style scoped>

</style>
