<script setup>
import { RouterLink} from 'vue-router'
import BookIcon from '../components/icons/BookIcon.vue'
</script>

<template>
    <header>
        <nav>
            <div class="containerFluid">
                <!-- Brand name as link to home page -->
                <RouterLink class="brandName" to="/search"><h1>DefineMe</h1></RouterLink>

                <!-- Brand icon -->
                <BookIcon />
            </div>
        </nav>
    </header>

    
</template>



<style scoped>
    .brandName {
        text-decoration: none;
        font-size: 32px;
    }
</style>
