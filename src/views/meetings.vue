<template>
  <div class="pt-24 min-h-screen bg-warm-cream">
    
    <div class="bg-primary text-white py-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-20 bg-cover bg-center" :style="{ backgroundImage: `url(${base}images/hero-image.jpg)` }"></div>
      <div class="container-custom px-6 relative z-10 text-center" data-aos="fade-up">
        <span class="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 block">За вашия повод</span>
        <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Събития и Семинари</h1>
      </div>
    </div>

    <section class="container-custom px-6 py-20 space-y-24">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div class="relative h-[500px] group overflow-hidden rounded-sm shadow-xl" data-aos="fade-left">
           <img :src="base + 'images/celebration.jpg'" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Тържества" />
           <div class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
        </div>
      </div>

      <div class="w-full h-px bg-gray-200"></div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div class="relative h-[500px] order-2 lg:order-1 group overflow-hidden rounded-sm shadow-xl" data-aos="fade-right">
           <img :src="base + 'images/suite2.jpg'" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Семинари" />
           <div class="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
        </div>
        </div>
    </section>
  </div>
</template>

<script setup>
// BASE URL ADDED HERE
const base = import.meta.env.BASE_URL

function goToContacts() {
  document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' })
}
</script>