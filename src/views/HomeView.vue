<script setup>
import BookIcon from '../components/icons/BookIcon.vue'
import ForwardIcon from '../components/icons/ForwardIcon.vue'
let fontSize = '48px';
</script>

<template>
  <main>
    <div id="backgroundImage">
        <div class="containerFluid">
            <h1 :style="{ fontSize: fontSize }">DefineMe</h1>
            <h2>English Dictionary</h2>

            <BookIcon />

            <!-- Forward button to navigate to SearchView -->
            <ForwardIcon />
        </div>
    </div>

  </main>
</template>

<style scoped>
    #backgroundImage {
        margin-top: 0;
        height: 100vh;
        background-image: url(../assets/img/city-background.jpg);
        background-color: #2A3340;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .containerFluid {
        padding-top: 35vh;
    }

    h2 {
        font-family: "Roboto Slab", serif;
    }

</style>
