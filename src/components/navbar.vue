<template>
  <nav class="fixed top-0 left-0 right-0 z-500 transition-all duration-300 max-h-20" :class="navClasses">
    <div class="px-3 container-custom relative"> <div class="flex items-center justify-between py-3 lg:py-4">
        
        <div class="hidden lg:flex items-center justify-start"
     :class="{ 'opacity-0 pointer-events-none': !navVisible, 'opacity-100': navVisible }">
  
  <ul class="flex items-center space-x-7 ml-50">
    <li 
      v-for="link in leftLinks" 
      :key="link.path"
      class="relative h-full flex items-center" 
      @mouseenter="handleMouseEnter(link.name)"
      @mouseleave="handleMouseLeave"
    >
      <router-link
        :to="link.path"
        class="text-sm font-medium tracking-widest uppercase nav-link py-4   flex items-center gap-1"
        :class="{ active: route.path === link.path }"
      >
        {{ link.name }}
        <span v-if="link.children" class="text-[10px] opacity-70 transition-transform duration-300" :class="activeDropdown === link.name ? 'rotate-180' : ''">▼</span>
      </router-link>

      <transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-2"
      >
        <div 
          v-if="link.children && activeDropdown === link.name"
          class="absolute top-full left-1/2 -translate-x-1/2 min-w-[200px] pt-2"
        >
          <div class="bg-stone-500/70 border-t-2 border-stone-600 shadow-xl rounded-b-sm flex flex-col py-2">
            <router-link
              v-for="child in link.children"
              :key="child.path"
              :to="child.path"
              class="px-5 py-3 text-sm text-stone-300 hover:bg-stone-800 hover:text-white transition-colors uppercase tracking-wider text-center"
            >
              {{ child.name }}
            </router-link>
          </div>
        </div>
      </transition>

    </li>
  </ul>
</div>

        <router-link to="/" class="absolute left-1/2 top-0 transform -translate-x-1/2 z-50 hidden sm:block">
           <div class="pt-2"> <img
              src="/src/assets/logo.png"
              alt="Vila Boyana Logo"
              class="w-auto transition-all duration-300 max-w-none drop-shadow-md p"
              :class="[
                 scrolled ? 'h-24 md:h-28 opacity-100' : 'h-32 md:h-40 opacity-100' 

              ]"
            />
          </div>
        </router-link>

        <router-link to="/" class="sm:hidden relative z-50">
             <img src="/src/assets/logo.png" alt="Logo" class="h-12 w-auto" />
        </router-link>


        <div class="hidden lg:flex items-center justify-end flex-1 space-x-8"
             :class="{ 'opacity-0 pointer-events-none': !navVisible, 'opacity-100': navVisible }">
          
          <ul class="flex items-center space-x-7 mr-20">
            <li v-for="link in rightLinks" :key="link.path">
              <router-link
                :to="link.path"
                class="text-sm font-medium tracking-widest uppercase nav-link"
                :class="{ active: route.path === link.path }"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>

          
        </div>

        <button
          @click="toggleMobileMenu"
          class="relative z-50 flex items-center justify-center w-10 h-10 p-0 transition-colors duration-300 lg:hidden"
          :class="{
            'text-primary': scrolled && !mobileMenuOpen,
            'text-white': !scrolled || mobileMenuOpen,
          }"
        >
          <span class="text-3xl material-symbols-outlined">
            {{ mobileMenuOpen ? 'close' : 'menu' }}
          </span>
        </button>
      </div>

      <div
        class="fixed inset-0 z-40 flex flex-col items-center justify-center p-4 transition-all duration-500 ease-in-out bg-stone-900/95 backdrop-blur-xl lg:hidden"
        :class="mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'"
      >
        <nav class="flex flex-col space-y-6 text-center">
          <router-link
            v-for="link in [...leftLinks, ...rightLinks]"
            :key="link.path"
            :to="link.path"
            @click="closeMobileMenu"
            class="font-serif text-2xl text-white transition-colors hover:text-amber-500"
          >
            {{ link.name }}
          </router-link>
          
          <div class="w-12 h-0.5 bg-white/20 mx-auto my-4"></div>

          
        </nav>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const heroBottom = ref(0)
const navHeight = ref(80)


const activeDropdown = ref(null)


const handleMouseEnter = (name) => { activeDropdown.value = name }
const handleMouseLeave = () => { activeDropdown.value = null }


const leftLinks = [
  { name: 'стаи', path: '/' },
  { 
    name: 'Хотелът', 
    path: '/hotel',
    children: [
      { name: 'За Нас', path: '/about' },
      { name: 'Услуги', path: '/services' },
      { name: 'Транспорт', path: '/transport' }
    ]
  },
  { name: 'ГАЛЕРИЯ', 
    path: '/spa',
    children: [
      { name: 'СПА & Уелнес', path: '/spa' },
      { name: 'Ресторант', path: '/restaurant' }
    ]
},
]

const rightLinks = [
  { name: 'СВОБОДНО ВРЕМЕ', path: '/events' },
  { name: 'АКТУАЛНО', path: '/gallery' },
  { name: 'РЕЗЕРВАЦИИ', path: '/contact' },
]

const navClasses = computed(() => {
  return {

    'bg-stone-400/30 backdrop-blur-lg shadow-md h-20': scrolled.value, 
    'bg-transparent h-24': !scrolled.value,
    'text-white': !scrolled.value,
    'text-white': scrolled.value,
  }
})

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
}

const navVisible = computed(() => scrolled.value || mobileMenuOpen.value || route.path !== '/')

function updateHeroBounds() {
  const hero = document.getElementById('home-hero')
  const navEl = document.querySelector('nav')
  navHeight.value = navEl?.getBoundingClientRect().height || 80
  if (hero) {
    const rect = hero.getBoundingClientRect()
    heroBottom.value = rect.bottom + window.scrollY
  } else {
    heroBottom.value = 0
  }
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}



function handleScroll() {
  if (route.path === '/') {
    const threshold = heroBottom.value > 0 ? heroBottom.value - navHeight.value : 50
    scrolled.value = window.scrollY > threshold
  } else {
    scrolled.value = true
  }
}

onMounted(() => {
  updateHeroBounds()
  window.addEventListener('resize', updateHeroBounds)
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateHeroBounds)
})

watch(() => route.path, () => {
  updateHeroBounds()
  handleScroll()
})
</script>

<style scoped>

.nav-link {
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: relative;
  bottom: -4px;
  left: 0;
  width: 0;
  height:   px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
</style>