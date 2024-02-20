<template>
    <!-- List of words to display on SearchView-->
    <li>{{ terms.word }}</li>
</template>

<script>

    export default {
        props: {
            terms: {
                required: true,
                type: Object
            }
        }
    }

</script>

<style>
ul {
    list-style: none;
}
</style>
