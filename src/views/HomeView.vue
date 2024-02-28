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

            <div class="bookIcon">
                <BookIcon />
            </div>

            <!-- Forward button to navigate to SearchView -->
            <div class="forwardBtn">
                <h3>Start search</h3>
                <ForwardIcon />
            </div>

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
    h1 {
        margin-bottom: 0;
    }
    h2 {
        font-family: "Roboto Slab", serif;
        margin: 0.2rem 0 0.6rem 0;
        font-size: 1.3rem;
    }
    .forwardBtn {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 4rem;
    }
    .forwardBtn h3 {
        margin: 0.3rem;
    }

</style>
