<script setup>

</script>

<template>
  <div class="container">
    <!-- Form get the word to define -->
    <form id="searchForm" >
      <input
        type="text"
        id="searchInput"


        placeholder="Search for a word"
      />
      <button
      id="searchBtn"
      aria-label="Search"
      @click="searchWord()"
      ><i class="bi bi-search"></i>
    </button>
    </form>


  </div>
</template>




<style scoped>
#searchForm {
  width: 100%;
  margin: 1.1rem;
}
#searchInput {
  border: none; /* Removing border for a cleaner look */
  outline: none;
  width: 85%;
  height: 5vh;
  padding-left: 1rem;
  border-radius: 0.5rem 0 0 0.5rem;
}
#searchBtn {
  border: none; /* Removing border for a cleaner look */
  border-radius: 0 0.5rem 0.5rem 0;
  outline: none;
  height: 5vh;
}
#searchBtn .bi {
  opacity: 70%;
}

</style>
