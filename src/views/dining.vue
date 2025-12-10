<template>
  <div class="pt-24 min-h-screen bg-warm-cream">
    <section class="container-custom px-6 py-12">
      
      <div class="relative w-full h-auto mb-16 shadow-xl rounded-sm overflow-hidden group" data-aos="fade-down">
         <img 
           src="/src/assets/dining.jpg" 
           alt="Обяд и вечеря" 
           class="w-full h-auto object-cover md:min-h-[400px] lg:min-h-[500px] transition-transform duration-1000 group-hover:scale-105"
         />
         
         <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

         <div class="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
            <span class="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] mb-2 text-accent">
               <span class="h-px w-8 bg-accent"></span> Атмосфера
            </span>
            <h2 class="text-3xl md:text-4xl font-serif">Кулинарни Изживявания</h2>
         </div>
      </div>

      <div class="grid lg:grid-cols-12 gap-12 items-start">
        
        <div class="lg:col-span-7" data-aos="fade-right">
          <h1 class="font-serif text-4xl text-primary mb-8 leading-tight">
            Обяд и <span class="italic text-wood-brown">Вечеря</span>
          </h1>

          <div class="text-gray-600 font-light text-lg leading-relaxed space-y-6 text-justify">
            <p>
              Изборът за обяд и вечеря може да направите между заведенията, намиращи се в непосредствена близост до хотел „Вила Бояна”. Може да изберете традиционна българска кухня или интернационална.
            </p>
            <p>
              Всички заведения в района се славят с добрата си кухня и бохемска атмосфера. Посещавайки някои от ресторантите с любим човек или с бизнес партньори, няма да останете разочаровани от посрещането, менюто и резултата от Вашата среща!
            </p>
          </div>
          
          <div class="mt-10">
             <button @click="goToContacts" class="group flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
                <span class="w-10 h-10 border border-primary/30 rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <span class="material-symbols-outlined text-lg">arrow_forward</span>
                </span>
                Свържете се с нас
             </button>
          </div>
        </div>

        <div class="lg:col-span-5" data-aos="fade-left">
           <div class="bg-white p-8 md:p-10 shadow-lg border-t-4 border-accent relative overflow-hidden group">
              <span class="material-symbols-outlined absolute -right-6 -bottom-6 text-9xl text-gray-50 group-hover:text-accent/10 transition-colors">room_service</span>
              
              <div class="relative z-10">
                <div class="w-14 h-14 bg-warm-cream rounded-full flex items-center justify-center mb-6 text-wood-brown">
                   <span class="material-symbols-outlined text-3xl">restaurant_menu</span>
                </div>

                <h3 class="font-serif text-2xl text-primary mb-4">Комфорт във Вашата стая</h3>
                <p class="text-gray-500 text-sm leading-7 mb-6">
                  За да бъде комфорта Ви пълен, може да направите избора си от менюто, а ние да го сервираме директно в стаята Ви! Насладете се на дискретност и удобство.
                </p>

                <div class="h-px w-full bg-gray-100 my-6"></div>

                <div class="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider">
                   <span>Работно време</span>
                   <span class="text-accent">08:00 - 23:00</span>
                </div>
              </div>
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