<template>
  <div class="pt-24 min-h-screen bg-warm-cream">
    
    <div class="bg-primary text-white py-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-20 bg-[url('/src/assets/hero-image.jpg')] bg-cover bg-center"></div>
      <div class="container-custom px-6 relative z-10 text-center" data-aos="fade-up">
        <span class="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 block">За вашия повод</span>
        <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Събития и Семинари</h1>
        <p class="text-white/80 max-w-2xl mx-auto font-light text-lg">
          Елегантност за вашите празници и професионализъм за вашите бизнес срещи.
        </p>
      </div>
    </div>

    <section class="container-custom px-6 py-20 space-y-24">
      
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <div data-aos="fade-right">
          <div class="flex items-center gap-4 mb-6">
             <div class="w-12 h-12 rounded-full bg-white border border-accent flex items-center justify-center text-accent shadow-sm">
                <span class="material-symbols-outlined text-2xl">celebration</span>
             </div>
             <span class="text-accent text-xs font-bold uppercase tracking-[0.2em]">Празненства</span>
          </div>

          <h2 class="font-serif text-3xl md:text-4xl text-primary mb-8 leading-tight">
            Семейни и фирмени <span class="italic text-wood-brown">Тържества</span>
          </h2>

          <div class="text-gray-600 font-light text-lg leading-relaxed space-y-6 text-justify">
            <p>
              Търсите най-подходящото място за вашето семейно празненство или фирмено парти? Хотел „Вила Бояна” ще се радва да Ви посрещне в ресторанта, бистрото или на открито.
            </p>
            <p>
              Заведенията са с елегантен интериор, както подходящ за тържествени случаи, така и за непринудени събития.
            </p>

            <div class="bg-white p-6 border-l-4 border-accent shadow-sm rounded-r-sm">
              <h4 class="font-serif text-primary text-lg mb-2">Домашен Кетъринг</h4>
              <p class="text-sm">
                Осигуряваме богато кетъринг меню. Всички торти, сладкиши и сандвичи са собствено производство, с изцяло натурални продукти.
              </p>
            </div>

            <p>
              За вас остава само да се наслаждавате на празника заедно със своите гости, колеги и партньори.
            </p>
          </div>
          
          <div class="mt-8">
             <button @click="goToContacts" class="text-primary border-b border-primary pb-1 text-xs font-bold uppercase tracking-widest hover:text-accent hover:border-accent transition-all">
                Свържете се с нас за оферта
             </button>
          </div>
        </div>

        <div class="relative h-[500px] group overflow-hidden rounded-sm shadow-xl" data-aos="fade-left">
           <img src="/src/assets/celebration.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Тържества" />
           <div class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
           <div class="absolute bottom-6 left-6 text-white">
              <p class="font-serif text-2xl">Незабравими мигове</p>
           </div>
        </div>

      </div>

      <div class="w-full h-px bg-gray-200"></div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <div class="relative h-[500px] order-2 lg:order-1 group overflow-hidden rounded-sm shadow-xl" data-aos="fade-right">
           <img src="/src/assets/suite2.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Семинари" />
           <div class="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
        </div>

        <div class="order-1 lg:order-2" data-aos="fade-left">
          <div class="flex items-center gap-4 mb-6">
             <div class="w-12 h-12 rounded-full bg-white border border-forest-green flex items-center justify-center text-forest-green shadow-sm">
                <span class="material-symbols-outlined text-2xl">groups</span>
             </div>
             <span class="text-forest-green text-xs font-bold uppercase tracking-[0.2em]">Бизнес</span>
          </div>

          <h2 class="font-serif text-3xl md:text-4xl text-primary mb-8 leading-tight">
            Семинари и <span class="italic text-wood-brown">Тийм-билдинг</span>
          </h2>

          <div class="text-gray-600 font-light text-lg leading-relaxed space-y-6 text-justify">
            <p>
              С удоволствие ще бъдем домакини на вашия семинар, презентация, фирмено обучение или тийм-билдинг.
            </p>
            <p>
              Местоположението ни и условията, които предлагаме ще Ви откъснат от напрегнатия градски ритъм и ще Ви позволят да се концентрирате изцяло върху планираните дейности.
            </p>

            <ul class="space-y-4 my-6">
               <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-accent">check_circle</span>
                  <span class="text-sm">Пълно техническо оборудване (мултимедия, екран, флипчарт)</span>
               </li>
               <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-accent">check_circle</span>
                  <span class="text-sm">Гъвкава подредба (заседателна, киносалон)</span>
               </li>
               <li class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-accent">check_circle</span>
                  <span class="text-sm">Кафе паузи и кетъринг</span>
               </li>
            </ul>

            <p>
              Елегантната обстановка и уют ще допринесат за успеха на провежданите срещи и разговори.
            </p>
          </div>
        </div>

      </div>

    </section>
  </div>
</template>

<script setup>
function goToContacts() {
  document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' })
}
</script>