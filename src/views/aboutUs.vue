<template>
  <div class="pt-24 min-h-screen bg-warm-cream">
    <section class="container-custom px-6 py-12 md:py-20">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <div data-aos="fade-right" data-aos-duration="1000">
          <div class="mb-6 flex items-center gap-4">
            <span class="h-px w-12 bg-accent"></span>
            <span class="text-accent text-xs font-bold uppercase tracking-[0.2em]">За Нас</span>
          </div>

          <h1 class="font-serif text-4xl md:text-5xl text-primary mb-8 leading-tight">
            Добре дошли във <br />
            <span class="italic text-wood-brown">Вила Бояна</span>
          </h1>

          <div class="text-gray-600 font-light text-base md:text-lg leading-relaxed space-y-6 text-justify">
            <p>„Вила Бояна” е един от най-добрите четиризвездни хотели в София...</p>
            </div>
        </div>

        <div class="relative h-[600px] w-full" data-aos="fade-left" data-aos-duration="1000">
          <div class="absolute inset-0 border-2 border-wood-brown/20 translate-x-4 translate-y-4 rounded-sm z-0"></div>
          
          <div class="absolute inset-0 bg-white p-2 shadow-2xl z-10 rounded-sm overflow-hidden group">
            <div class="w-full h-full bg-gray-200 relative overflow-hidden">
              
              <img 
                :src="base + 'images/hotel6.jpg'" 
                alt="За Хотел Вила Бояна" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div class="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
// BASE URL ADDED HERE
const base = import.meta.env.BASE_URL
</script>