<template>
  <div id="home-hero" class="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-fixed"
    style="background-image: url('/src/assets/hero-image.jpg');">
    
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
      <div data-aos="fade-up" data-aos-duration="1200">
        <p class="text-accent text-gray-200 text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-6">
          Добре дошли в София
        </p>
        <h1 class="text-white text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-8 leading-tight drop-shadow-lg">
          Лукс и уют във <br/> <span class="italic text-warm-beige">Вила Бояна</span>
        </h1>
        <p class="text-gray-200 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Вашето място за спокойствие, далеч от градския шум.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button @click="goToBooking"
            class="px-10 py-4 bg-white text-primary min-w-[200px] uppercase tracking-widest text-xs font-bold hover:bg-accent hover:text-white transition-all duration-300 shadow-xl">
            Резервирай Сега
          </button>
          <button @click="scrollToRooms"
            class="px-10 py-4 bg-transparent border border-white text-white min-w-[200px] uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-primary transition-all duration-300">
            Разгледай Стаите
          </button>
        </div>
      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer opacity-80" @click="scrollToRooms">
      <span class="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
    </div>
  </div>
</template>

<script setup>
function scrollToRooms() {
  document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })
}
function goToBooking() {
  window.open('https://www.booking.com/hotel/bg/hotel-villa-boyana.en-gb.html', '_blank');
}
</script>