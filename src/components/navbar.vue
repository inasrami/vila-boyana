<template>
  <nav class="...">
    <div class="container-custom px-6">
      <div class="flex items-center justify-between h-20 md:h-24">

        <router-link to="/" class="shrink-0 relative z-50 group flex items-center gap-4">
          <img 
            :src="base + 'images/logo.png'" 
            alt="Villa Boyana" 
            class="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          </router-link>
        </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

// BASE URL ADDED HERE
const base = import.meta.env.BASE_URL

const route = useRoute()
const mobileMenuOpen = ref(false)
// ...
</script>