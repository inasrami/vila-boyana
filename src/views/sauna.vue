<template>
  <div class="pt-24 min-h-screen bg-warm-cream">
    <section class="container-custom px-6 py-12 md:py-20">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <div data-aos="fade-right" data-aos-duration="1000">
          <div class="mb-6 flex items-center gap-4">
             <span class="h-px w-12 bg-accent"></span>
             <span class="text-accent text-xs font-bold uppercase tracking-[0.2em]">Wellness & SPA</span>
          </div>

          <h1 class="font-serif text-4xl md:text-5xl text-primary mb-8 leading-tight">
            Финландска <span class="italic text-wood-brown">Сауна</span>
          </h1>

          <div class="text-gray-600 font-light text-lg leading-relaxed space-y-6 text-justify">
            <p>
              Нашата финландска сауна е идеалното място за релакс в края на дългия работен ден.
            </p>
            <p>
              Меката уелнес светлина и звука на птички и морски вълни ще ви отведат в друг свят.
              Впоследствие ще бъдете напълно възстановени и във форма.
            </p>
            
            <div class="border-l-4 border-accent pl-6 py-4 my-8 bg-white/60 shadow-sm rounded-r-sm">
              <p class="font-serif text-xl text-primary italic mb-2">
                "Тялото и съзнанието ще бъдат в хармония..."
              </p>
            </div>

            <p class="font-medium text-primary">
              Ще се почувствате, като че ли сте били цял ден на открито!
            </p>
          </div>
          
          <div class="mt-10 flex gap-4">
            <button @click="goToBooking" class="bg-primary text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors shadow-lg cursor-pointer">
              Запазете час
            </button>
          </div>
        </div>

        <div class="relative h-[500px] w-full" data-aos="fade-left" data-aos-duration="1000">
           <div class="absolute -top-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
           <div class="absolute -bottom-6 -left-6 w-40 h-40 bg-wood-brown/10 rounded-full blur-3xl"></div>

           <div class="absolute inset-0 border-2 border-wood-brown/30 translate-x-3 translate-y-3 rounded-sm z-0"></div>
           
           <div class="relative h-full w-full overflow-hidden rounded-sm shadow-xl group z-10 bg-white p-2">
             <div class="w-full h-full overflow-hidden relative">
               <img 
                 src="/src/assets/sauna2.jpg" 
                 alt="Финландска сауна" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div class="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
             </div>
           </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
function goToBooking() {
  window.open('https://www.booking.com/hotel/bg/hotel-villa-boyana.en-gb.html', '_blank');
}
</script>