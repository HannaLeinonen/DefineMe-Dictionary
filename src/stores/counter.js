import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchStore', {
    state: () => {
        return {
            word: null
        }
    },
    actions: {
        getWord (keyword) {
            this.word = keyword
        }
    }


})
