<script setup>
import BookIcon from '../components/icons/BookIcon.vue'
/* import ForwardIcon from '../components/icons/ForwardIcon.vue' */
</script>

<template>
  <main>
    <div id="backgroundImage">
        <div class="containerFluid">
            <h1>DefineMe</h1>
            <h2>English Dictionary</h2>

            <BookIcon />

            <!-- Forward button to navigate to SearchView -->
            <!-- <ForwardIcon /> -->
        </div>
    </div>

  </main>
</template>

<style scoped>
    #backgroundImage {
        margin-top: 0;
        height: 100vh;
        background-image: url(../assets/img/city.jpg);
        background-color: #2A3340;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .containerFluid {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 35vh;
        color: white;
    }
</style>
