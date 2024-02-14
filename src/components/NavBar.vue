<script setup>
import { RouterLink, RouterView} from 'vue-router'
import BookIcon from '../components/icons/BookIcon.vue'
</script>

<template>
    <header>
        <nav>
            <div class="containerFluid">
                <!-- Brand name as link to home page -->
                <RouterLink class="brandName">DefineMe</RouterLink>

                <!-- Brand icon -->
                <BookIcon />
            </div>
        </nav>
    </header>
    
    <!-- RouterView to render the component -->
    <RouterView />
</template>

<style>

</style>
