<script setup>
import { RouterLink} from 'vue-router'
import BookIcon from '../components/icons/BookIcon.vue'
</script>

<template>
    <header>
        <nav>
            <div class="containerFluid">
                <!-- Brand name as link to home page -->
                <RouterLink class="brandName" to="/"><h1>DefineMe</h1></RouterLink>
                <!-- Brand icon -->
                <BookIcon />
            </div>
        </nav>
    </header>


</template>



<style scoped>
.containerFluid {
    margin-bottom: 5vh ;
    margin-top: 5vh ;
}
.brandName {
    text-decoration: none;
    font-size: 32px;
    height: 120px;
}
</style>
