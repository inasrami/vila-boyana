<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container-custom px-6">
      
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
          Изживяване
        </span>
        <h2 class="text-4xl md:text-5xl font-serif text-primary mb-6">
          Повече от нощувка
        </h2>
        <div class="h-0.5 w-24 bg-accent/30 mx-auto"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-0 border border-gray-100 shadow-lg">
        
        <div class="relative group h-[400px] overflow-hidden" data-aos="fade-right">
          <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
               style="background-image: url('/src/assets/dining.jpg');"></div> 
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>

          <div class="absolute inset-0 p-10 flex flex-col justify-end text-white">
            <h3 class="font-serif text-3xl mb-3">Обяд и Вечеря</h3>
            <p class="text-white/80 font-light mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
              Насладете се на комфортен рум сървис в стаята си или посетете изисканите ресторанти в непосредствена близост.
            </p>
            <router-link to="/dining" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
              Научи повече <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </router-link>
          </div>
        </div>

        <div class="relative group h-[400px] overflow-hidden" data-aos="fade-left">
           <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
               style="background-image: url('/src/assets/sauna.jpg');"></div> 
          
          <div class="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>

          <div class="absolute inset-0 p-10 flex flex-col justify-end text-white">
            <h3 class="font-serif text-3xl mb-3">Финландска Сауна</h3>
            <p class="text-white/80 font-light mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
              Възстановете баланса и се отпуснете в нашата гореща финландска сауна след дълъг ден.
            </p>
            <router-link to="/sauna" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
              Разгледай <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </router-link>
          </div>
        </div>

      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-gray-100 pt-16">
        <div class="text-center group" v-for="service in services" :key="service.name" data-aos="fade-up" :data-aos-delay="service.delay">
          <div class="w-16 h-16 mx-auto bg-warm-cream rounded-full flex items-center justify-center mb-4 text-wood-brown group-hover:bg-wood-brown group-hover:text-white transition-all duration-300">
            <span class="material-symbols-outlined text-3xl">{{ service.icon }}</span>
          </div>
          <h4 class="font-bold text-primary text-sm uppercase tracking-wider">{{ service.name }}</h4>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const services = [
  { name: '24/7 Рецепция', icon: 'concierge', delay: 0 },
  { name: 'Паркинг', icon: 'local_parking', delay: 100 },
  { name: 'Високоскоростен Wi-Fi', icon: 'wifi', delay: 200 },
  { name: 'Рум Сървис', icon: 'room_service', delay: 300 },
]
</script>