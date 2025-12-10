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
import { ref, computed, onMounted, onUnmounted } from 'vue'

const activeTab = ref('rooms')
const lightboxOpen = ref(false)
const currentIndex = ref(0)


const roomImages = [
    '/src/assets/staq1.jpg',
    '/src/assets/staq2.jpg',
    '/src/assets/staq3.jpg',
    '/src/assets/staq4.jpg',
    '/src/assets/staq5.jpg',
    '/src/assets/staq6.jpg',
    '/src/assets/staq7.jpg',
    '/src/assets/staq8.jpg',
    '/src/assets/staq9.jpg',
    '/src/assets/staq10.jpg',
]

const hotelImages = [
    '/src/assets/hotel1.jpg',
    '/src/assets/hotel2.jpg',
    '/src/assets/hotel3.jpg',
    '/src/assets/hotel4.jpg',
    '/src/assets/hotel5.jpg',
    '/src/assets/hotel6.jpg',
    '/src/assets/hotel7.jpg',
    '/src/assets/hotel8.jpg',
    '/src/assets/hotel9.jpg',
    '/src/assets/hotel10.jpg',
    '/src/assets/hotel11.jpg',
    '/src/assets/hotel12.jpg',
    '/src/assets/hotel13.jpg',
    '/src/assets/hotel14.jpg',
    '/src/assets/hotel15.jpg',

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