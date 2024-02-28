<script setup>
import BookIcon from '../components/icons/BookIcon.vue'
import ForwardIcon from '../components/icons/ForwardIcon.vue'

// Function to check the media-queries for the H1 and change fontSize if screen size matches the condition
function fontSize() {
  const isMobileOrDesktop = window.matchMedia('(max-width: 991px)').matches
  if (isMobileOrDesktop) {
    return '48px'
  } else {
    return '52px'
  }
}
</script>

<template>
  <main>
    <div id="backgroundImage">
      <div class="containerFluid">
        <!-- Using the attribute interpolation to set the font size -->
        <h1 :style="{ fontSize: fontSize() }">DefineMe</h1>
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
  background-color: #2a3340;
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
  font-family: 'Roboto Slab', serif;
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
/* Media-queries desktop */
@media only screen and (min-width: 992px) {
}
</style>
