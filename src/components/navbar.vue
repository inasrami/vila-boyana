<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="navClasses"
  >
    <div class="container-custom px-6">
      <div class="flex items-center justify-between h-20 md:h-24">

        <router-link to="/" class="shrink-0 relative z-50 group flex items-center gap-4">
          <img 
            src="/vila-boyana/images/logo.png" 
            alt="Villa Boyana" 
            class="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div class="hidden md:flex flex-col">
            <span class="text-white font-serif text-lg tracking-widest leading-none">VILLA</span>
            <span class="text-white text-[10px] uppercase tracking-[0.3em] font-medium">Boyana</span>
          </div>
        </router-link>

        <div class="hidden lg:flex items-center gap-8 xl:gap-10">
          
          <ul class="flex items-center gap-8">
            <li v-for="link in mainLinks" :key="link.path" class="relative group">
              <router-link 
                :to="link.path" 
                class="text-xs font-bold text-white/90 uppercase tracking-[0.15em] hover:text-accent transition-colors py-3 block"
                active-class="text-accent"
              >
                {{ link.name }}
                <span class="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </router-link>
            </li>

            <li class="relative group" @mouseenter="activeDropdown = 'hotel'" @mouseleave="activeDropdown = null">
              <button class="text-xs font-bold text-white/90 uppercase tracking-[0.15em] hover:text-accent transition-colors py-3 flex items-center gap-1">
                Хотелът <span class="material-symbols-outlined text-sm">expand_more</span>
              </button>
              
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-2"
              >
                <div v-if="activeDropdown === 'hotel'" class="absolute top-full -left-4 pt-4 min-w-60">
                  <div class="bg-white rounded-sm shadow-xl border-t-2 border-accent py-2 flex flex-col">
                    <router-link 
                      v-for="sub in hotelLinks" 
                      :key="sub.path" 
                      :to="sub.path"
                      class="px-6 py-3 text-xs text-gray-600 font-bold hover:bg-warm-cream hover:text-wood-brown transition-colors uppercase tracking-widest"
                    >
                      {{ sub.name }}
                    </router-link>
                  </div>
                </div>
              </transition>
            </li>
          </ul>

          <div class="h-4 w-px bg-white/20"></div>

          <a href="tel:029590529" class="hidden xl:flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-xs tracking-widest group">
            <span class="material-symbols-outlined text-base group-hover:rotate-12 transition-transform">call</span>
            02 / 959 05 29
          </a>

          <a 
            href="https://www.booking.com/hotel/bg/hotel-villa-boyana.en-gb.html" 
            target="_blank"
            class="bg-accent text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 rounded-sm"
          >
            Резервирай
          </a>
        </div>

        <button 
          @click="toggleMobileMenu" 
          class="lg:hidden relative z-50 p-2 text-white hover:text-accent transition-colors focus:outline-none"
        >
          <span class="material-symbols-outlined text-3xl">menu</span>
        </button>

      </div>
    </div>
  </nav>

  <transition
    enter-active-class="transition ease-out duration-500"
    enter-from-class="opacity-0 translate-x-full"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition ease-in duration-500"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 translate-x-full"
  >
    <div v-if="mobileMenuOpen" class="fixed inset-0 bg-primary/95 backdrop-blur-md z-40 flex flex-col justify-center items-center overflow-y-auto">
      <button @click="toggleMobileMenu" class="absolute top-6 right-6 text-white hover:text-accent transition-colors p-2">
        <span class="material-symbols-outlined text-4xl">close</span>
      </button>

      <div class="mb-8 text-center mt-10">
        <h2 class="text-3xl font-serif text-white mb-2">VILLA BOYANA</h2>
        <div class="h-0.5 w-12 bg-accent mx-auto"></div>
      </div>

      <nav class="flex flex-col space-y-5 text-center pb-10">
        <router-link to="/" @click="closeMobileMenu" class="text-white text-xl font-serif uppercase tracking-widest hover:text-accent transition-colors">
          Начало
        </router-link>
        <router-link to="/#rooms" @click="closeMobileMenu" class="text-white text-xl font-serif uppercase tracking-widest hover:text-accent transition-colors">
          Стаи
        </router-link>
        <router-link to="/gallery" @click="closeMobileMenu" class="text-white text-xl font-serif uppercase tracking-widest hover:text-accent transition-colors">
          Галерия
        </router-link>
        
        <div class="h-px w-10 bg-white/20 mx-auto my-2"></div>
        <p class="text-accent text-xs uppercase tracking-widest mb-2">Хотелът</p>
        
        <router-link v-for="link in hotelLinks" :key="link.path" :to="link.path" @click="closeMobileMenu" class="text-white/80 text-lg font-serif uppercase tracking-wider hover:text-white transition-colors">
          {{ link.name }}
        </router-link>

        <div class="h-px w-32 bg-white/10 mx-auto my-4"></div>
        
        <a href="https://www.booking.com/hotel/bg/hotel-villa-boyana.en-gb.html" target="_blank" class="text-accent text-xl font-serif uppercase tracking-widest font-bold">
          Резервирай
        </a>
      </nav>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const activeDropdown = ref(null)

const mainLinks = [
  { name: 'Начало', path: '/' },
  { name: 'Стаи', path: '/#rooms' }, 
  { name: 'Галерия', path: '/gallery' },
]

const hotelLinks = [
  { name: 'За Нас', path: '/about' },
  { name: 'Услуги', path: '/services' },
  { name: 'Събития', path: '/meetings' },
  { name: 'Финландска сауна', path: '/sauna' },
  { name: 'Обяд и Вечеря', path: '/dining' },
  { name: 'Свободно Време', path: '/events' },
]

const navClasses = computed(() => {
  if (scrolled.value || mobileMenuOpen.value) {
    return 'bg-[#1c1917]/95 shadow-lg border-b border-white/5 py-0'
  }
  return 'bg-gradient-to-b from-black/60 to-transparent py-4'
})

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.group:hover .group-hover\:block {
  display: block;
}
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #a89078;
  border-radius: 2px;
}
</style>