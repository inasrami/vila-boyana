<template>
  <section class="relative flex flex-col lg:block lg:min-h-[750px] border-t-4 border-accent">
    
    <div class="relative w-full h-[400px] lg:absolute lg:inset-0 lg:h-full z-0 order-2 lg:order-0">
       <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.2345678901234!2d23.2640211!3d42.6466466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa84a0c11ede7b%3A0x3337c3d77d0afeca!2sHotel%20Villa%20Boyana!5e0!3m2!1sen!2sbg!4v1234567890123"
          width="100%"
          height="100%"
          style="border: 0; filter: grayscale(30%) contrast(85%) brightness(90%);"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="w-full h-full object-cover"
        ></iframe>
       
       <div class="hidden lg:block absolute inset-0 bg-linear-to-r from-primary/95 via-primary/70 to-transparent pointer-events-none"></div>
    </div>

    <div class="relative z-10 w-full lg:h-full lg:pointer-events-none order-1 lg:order-0 bg-primary lg:bg-transparent">
      <div class="container-custom px-0 lg:px-6 h-full flex items-center">
        
        <div class="bg-primary text-white p-8 md:p-14 shadow-none lg:shadow-2xl lg:border-l-4 border-accent w-full lg:max-w-xl pointer-events-auto" data-aos="fade-up">
           
           <div class="flex items-center gap-4 mb-8">
              <span class="h-px w-12 bg-accent"></span>
              <span class="text-accent text-xs font-bold uppercase tracking-[0.2em]">Локация</span>
           </div>

           <h2 class="font-serif text-3xl md:text-5xl mb-6 lg:mb-8 leading-tight text-white">
             В сърцето на <br/>
             <span class="italic text-accent">Квартал Бояна</span>
           </h2>

           <p class="text-stone-300 mb-8 lg:mb-10 leading-relaxed font-light text-sm md:text-base">
             Разположен в престижния квартал Бояна, хотелът съчетава тишината на планината с близостта до динамичния град. Перфектната отправна точка за вашите бизнес срещи или планински разходки.
           </p>

           <div class="grid grid-cols-2 gap-6 mb-10 border-t border-white/10 pt-8">
              <div class="flex flex-col gap-2">
                 <span class="material-symbols-outlined text-accent text-3xl">location_city</span>
                 <h4 class="font-serif text-lg text-white">Панорама</h4>
                 <p class="text-xs text-stone-400">Вдъхновяващи гледки към нощна София</p>
              </div>
              <div class="flex flex-col gap-2">
                 <span class="material-symbols-outlined text-accent text-3xl">forest</span>
                 <h4 class="font-serif text-lg text-white">Природа</h4>
                 <p class="text-xs text-stone-400">Чист въздух в подножието на Витоша</p>
              </div>
           </div>

           <div class="space-y-6">
              <div class="flex items-start gap-4 group">
                 <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <span class="material-symbols-outlined text-sm">location_on</span>
                 </div>
                 <div>
                    <span class="text-[10px] text-accent font-bold uppercase tracking-wider block mb-1">Адрес</span>
                    <a href="https://goo.gl/maps/1" target="_blank" class="text-sm text-stone-200 hover:text-white transition-colors">Sofia 1616, Boyana, Sq. "Sborishte" No 5</a>
                 </div>
              </div>

              <div class="flex items-center gap-4 group">
                 <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <span class="material-symbols-outlined text-sm">call</span>
                 </div>
                 <div>
                    <span class="text-[10px] text-accent font-bold uppercase tracking-wider block mb-1">Телефон</span>
                    <a href="tel:+35929590529" class="text-sm text-stone-200 hover:text-white transition-colors">02 / 959 05 29</a>
                 </div>
              </div>

              <div class="flex items-center gap-4 group">
                 <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <span class="material-symbols-outlined text-sm">mail</span>
                 </div>
                 <div>
                    <span class="text-[10px] text-accent font-bold uppercase tracking-wider block mb-1">Email</span>
                    <a href="mailto:villa.boyana@mail.bg" class="text-sm text-stone-200 hover:text-white transition-colors">villa.boyana@mail.bg</a>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>