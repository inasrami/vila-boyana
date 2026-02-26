<template>
    <div class="pt-24 min-h-screen bg-warm-cream">
        <section class="container-custom px-6 py-12 md:py-20">

            <div class="text-center mb-12" data-aos="fade-up">
                <span class="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Разгледайте</span>
                <h1 class="font-serif text-4xl md:text-5xl text-primary mb-8">Галерия</h1>
            </div>

            <div class="flex justify-center gap-8 mb-12" data-aos="fade-up">
                <button @click="activeTab = 'rooms'" :class="[
                    'text-sm font-bold uppercase tracking-widest pb-2 transition-all duration-300 border-b-2',
                    activeTab === 'rooms' ? 'text-primary border-accent' : 'text-gray-400 border-transparent hover:text-primary'
                ]">
                    Стаи (11)
                </button>
                <button @click="activeTab = 'hotel'" :class="[
                    'text-sm font-bold uppercase tracking-widest pb-2 transition-all duration-300 border-b-2',
                    activeTab === 'hotel' ? 'text-primary border-accent' : 'text-gray-400 border-transparent hover:text-primary'
                ]">
                    Хотел (15)
                </button>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" key="gallery-grid">
                <div v-for="(image, index) in currentImages" :key="index"
                    class="aspect-square bg-gray-200 overflow-hidden cursor-pointer group rounded-sm shadow-sm relative"
                    data-aos="fade-up" :data-aos-delay="index * 50" @click="openLightbox(index)">
                    <img :src="image" alt="Gallery image"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.95] group-hover:brightness-100"
                        loading="lazy" />
                    <div
                        class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span class="material-symbols-outlined text-white text-3xl drop-shadow-lg">zoom_in</span>
                    </div>
                </div>
            </div>

        </section>

        <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="lightboxOpen"
                class="fixed inset-0 z-60 bg-black/95 backdrop-blur-sm flex items-center justify-center"
                @click.self="closeLightbox">

                <button @click="closeLightbox"
                    class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-50">
                    <span class="material-symbols-outlined text-4xl">close</span>
                </button>

                <button @click.stop="prevImage"
                    class="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-4 z-50 rounded-full hover:bg-white/10">
                    <span class="material-symbols-outlined text-4xl md:text-5xl">chevron_left</span>
                </button>

                <button @click.stop="nextImage"
                    class="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-4 z-50 rounded-full hover:bg-white/10">
                    <span class="material-symbols-outlined text-4xl md:text-5xl">chevron_right</span>
                </button>

                <div class="relative max-w-5xl w-full px-4 md:px-20 h-full flex items-center justify-center">
                    <img :src="currentImages[currentIndex]"
                        class="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm transition-opacity duration-300"
                        :key="currentIndex" />
                    <div
                        class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-widest font-mono">
                        {{ currentIndex + 1 }} / {{ currentImages.length }}
                    </div>
                </div>

            </div>
        </transition>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 1. Import all room images directly
import staq1 from '../assets/staq1.jpg'
import staq2 from '../assets/staq2.jpg'
import staq3 from '../assets/staq3.jpg'
import staq4 from '../assets/staq4.jpg'
import staq5 from '../assets/staq5.jpg'
import staq6 from '../assets/staq6.jpg'
import staq7 from '../assets/staq7.jpg'
import staq8 from '../assets/staq8.jpg'
import staq9 from '../assets/staq9.jpg'
import staq10 from '../assets/staq10.jpg'

// 2. Import all hotel images directly
import hotel1 from '../assets/hotel1.jpg'
import hotel2 from '../assets/hotel2.jpg'
import hotel3 from '../assets/hotel3.jpg'
import hotel4 from '../assets/hotel4.jpg'
import hotel5 from '../assets/hotel5.jpg'
import hotel6 from '../assets/hotel6.jpg'
import hotel7 from '../assets/hotel7.jpg'
import hotel8 from '../assets/hotel8.jpg'
import hotel9 from '../assets/hotel9.jpg'
import hotel10 from '../assets/hotel10.jpg'
import hotel11 from '../assets/hotel11.jpg'
import hotel12 from '../assets/hotel12.jpg'
import hotel13 from '../assets/hotel13.jpg'
import hotel14 from '../assets/hotel14.jpg'
import hotel15 from '../assets/hotel15.jpg'


const activeTab = ref('rooms')
const lightboxOpen = ref(false)
const currentIndex = ref(0)

// 3. Assign the imported variables to the arrays
const roomImages = [
    staq1, staq2, staq3, staq4, staq5, staq6, staq7, staq8, staq9, staq10
]

const hotelImages = [
    hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8, hotel9, hotel10, hotel11, hotel12, hotel13, hotel14, hotel15
]

const currentImages = computed(() => {
    return activeTab.value === 'rooms' ? roomImages : hotelImages
})

function openLightbox(index) {
    currentIndex.value = index
    lightboxOpen.value = true
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeydown)
}

function closeLightbox() {
    lightboxOpen.value = false
    document.body.style.overflow = ''
    window.removeEventListener('keydown', handleKeydown)
}

function nextImage() {
    if (currentIndex.value < currentImages.value.length - 1) {
        currentIndex.value++
    } else {
        currentIndex.value = 0
    }
}

function prevImage() {
    if (currentIndex.value > 0) {
        currentIndex.value--
    } else {
        currentIndex.value = currentImages.value.length - 1
    }
}

function handleKeydown(e) {
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
    if (e.key === 'Escape') closeLightbox()
}
</script>