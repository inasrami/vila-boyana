<template>
  <section class="section-padding bg-warm-cream relative overflow-hidden py-20">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-wood-brown/30"></div>

    <div class="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

    <div class="container-custom px-6 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <div data-aos="fade-right" data-aos-duration="1000">
          <div class="mb-2 flex items-center gap-4">
            <span class="h-px w-8 bg-accent"></span>
            <span class="text-accent text-xs font-bold uppercase tracking-[0.2em]">Локация</span>
          </div>
          
          <h2 class="font-serif text-4xl md:text-5xl text-primary mb-8 leading-tight">
            Спокойствие в <br/>
            <span class="italic text-wood-brown">подножието на Витоша</span>
          </h2>
          
          <p class="text-gray-600 mb-10 font-light text-lg leading-relaxed border-l-2 border-accent/30 pl-6">
            Разположен в престижния квартал Бояна, хотелът съчетава тишината на планината с близостта до динамичния град. Перфектната отправна точка за вашите бизнес срещи или планински разходки.
          </p>

          <div class="grid sm:grid-cols-2 gap-8 mb-12">
            <div class="group">
              <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-4 group-hover:bg-wood-brown transition-colors duration-300">
                <span class="material-symbols-outlined text-wood-brown group-hover:text-white transition-colors">location_city</span>
              </div>
              <h4 class="font-serif text-lg text-primary mb-2">Градска панорама</h4>
              <p class="text-sm text-gray-500 leading-relaxed">Вдъхновяващи гледки към нощна София от вашия балкон.</p>
            </div>
            
            <div class="group">
              <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-4 group-hover:bg-wood-brown transition-colors duration-300">
                <span class="material-symbols-outlined text-wood-brown group-hover:text-white transition-colors">nature</span>
              </div>
              <h4 class="font-serif text-lg text-primary mb-2">Свеж въздух</h4>
              <p class="text-sm text-gray-500 leading-relaxed">Насладете се на зеленината и прохладата на национален парк Витоша.</p>
            </div>
          </div>

          <div class="bg-white p-8 shadow-sm border-t-4 border-wood-brown relative">
            <h4 class="font-serif text-xl mb-6 text-primary">За Контакти</h4>
            <div class="space-y-4">
              <a href="https://maps.google.com" target="_blank" class="flex items-start gap-4 text-gray-600 hover:text-wood-brown transition-colors group">
                <span class="material-symbols-outlined text-accent mt-0.5 group-hover:scale-110 transition-transform">location_on</span>
                <span class="text-sm">кв. Бояна, пл. Сборище 5,<br>София, България</span>
              </a>
              
              <div class="flex flex-col sm:flex-row gap-6 pt-2">
                <a href="tel:029590529" class="flex items-center gap-3 text-gray-600 hover:text-wood-brown transition-colors group">
                  <span class="material-symbols-outlined text-accent group-hover:scale-110 transition-transform">call</span>
                  <span class="text-sm font-medium">02 / 959 05 29</span>
                </a>
                <a href="mailto:villa.boyana@mail.bg" class="flex items-center gap-3 text-gray-600 hover:text-wood-brown transition-colors group">
                  <span class="material-symbols-outlined text-accent group-hover:scale-110 transition-transform">mail</span>
                  <span class="text-sm font-medium">villa.boyana@mail.bg</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="relative h-[500px] lg:h-[650px] w-full" data-aos="fade-left" data-aos-duration="1000">
          <div class="absolute inset-0 bg-white p-2 shadow-xl rotate-1 rounded-sm z-10">
            <div class="w-full h-full bg-gray-100 overflow-hidden relative group">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.2345678901234!2d23.2640211!3d42.6466466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa84a0c11ede7b%3A0x3337c3d77d0afeca!2sHotel%20Villa%20Boyana!5e0!3m2!1sen!2sbg!4v1234567890123"
                width="100%"
                height="100%"
                style="border: 0; filter: grayscale(20%) contrast(90%) sepia(10%);"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="transition-all duration-700 group-hover:filter-none group-hover:scale-105"
              ></iframe>
              
              <div class="absolute bottom-6 left-6 z-20">
                <a 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.2345678901234!2d23.2640211!3d42.6466466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa84a0c11ede7b%3A0x3337c3d77d0afeca!2sHotel%20Villa%20Boyana!5e0!3m2!1sen!2sbg!4v1234567890123"
                  class="bg-primary text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-wood-brown transition-colors shadow-lg flex items-center gap-2"
                >
                  <span>Навигирай</span>
                  <span class="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
          
          <div class="absolute inset-0 border-2 border-wood-brown/20 -rotate-2 scale-[0.98] translate-y-4 translate-x-4 z-0 rounded-sm"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>

</script>