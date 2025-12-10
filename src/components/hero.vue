<template>
  <div id="home-hero" class="relative h-screen w-full flex items-center overflow-hidden">
    
    <div class="absolute inset-0 w-full h-full">
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
           style="background-image: url('/src/assets/hero-image.jpg');">
      </div>
      <div class="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/60 to-transparent"></div>
    </div>

    <div class="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col justify-center">
      <div data-aos="fade-right" data-aos-duration="1200" class="max-w-3xl">
        
        <div class="flex items-center gap-4 mb-6">
           <span class="h-0.5 w-12 bg-accent"></span>
           <p class="text-accent text-sm md:text-base font-bold uppercase tracking-[0.25em]">
             Добре дошли в София
           </p>
        </div>

        <h1 class="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-8 leading-[1.1] drop-shadow-lg">
          Лукс и уют във <br/>
          <span class="text-warm-beige italic pr-4">
            Вила Бояна
          </span>
        </h1>

        <p class="text-gray-300 text-lg md:text-xl font-light mb-12 max-w-xl leading-relaxed border-l-2 border-white/10 pl-6">
          Вашето място за спокойствие, далеч от градския шум.
        </p>

        <div class="flex flex-col sm:flex-row gap-5">
          <button @click="goToBooking"
            class="group relative px-10 py-4 bg-accent text-white min-w-[200px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
            <span class="relative z-10 text-xs font-bold uppercase tracking-widest">Резервирай Сега</span>
            <div class="absolute inset-0 h-full w-full bg-accent-dark translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
          </button>
          
          <button @click="scrollToRooms"
            class="group px-10 py-4 border border-white/30 text-white min-w-[200px] hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm">
             <span class="text-xs font-bold uppercase tracking-widest">Разгледай Стаите</span>
          </button>
        </div>

      </div>
    </div>

    <div class="absolute bottom-0 left-0 p-8 md:p-12 hidden md:block">
       <div class="flex flex-col items-center gap-4 text-white/40 cursor-pointer hover:text-accent transition-colors duration-300" @click="scrollToRooms">
          <span class="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl] rotate-180">Скрол</span>
          <span class="h-16 w-px bg-current"></span>
       </div>
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