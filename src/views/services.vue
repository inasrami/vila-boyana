<template>
  <div class="pt-24 min-h-screen bg-warm-cream">
    <section class="container-custom px-6 py-12 md:py-20">
      
      <div class="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
         <div class="flex items-center justify-center gap-4 mb-6">
            <span class="h-px w-8 bg-accent"></span>
            <span class="text-accent text-xs font-bold uppercase tracking-[0.2em]">Удобства</span>
            <span class="h-px w-8 bg-accent"></span>
         </div>
         
         <h1 class="font-serif text-4xl md:text-5xl text-primary mb-8">
           Хотелски Услуги
         </h1>

         <p class="text-gray-600 font-light text-lg leading-relaxed mb-6">
           „Вила Бояна” предлага повече от удобствата на един четиризвезден хотел. 
           Всичко това, в комбинация с невероятно грижлив, дискретен и усмихнат персонал, 
           превръща нашия хотел в примамливо място за отдих и отсядане при служебни пътувания.
           Уверете се сами.
         </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div v-for="(service, index) in serviceList" :key="index" 
             class="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-t-2 border-accent/20 group hover:border-accent"
             data-aos="fade-up" :data-aos-delay="index * 100">
          
          <div class="w-14 h-14 bg-warm-cream rounded-full flex items-center justify-center mb-6 text-wood-brown group-hover:bg-wood-brown group-hover:text-white transition-colors duration-300">
            <span class="material-symbols-outlined text-3xl">{{ service.icon }}</span>
          </div>
          
          <h3 class="font-serif text-xl text-primary mb-3">{{ service.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed">{{ service.desc }}</p>
        </div>
      </div>

      <div class="bg-white rounded-sm shadow-md overflow-hidden mb-20" data-aos="fade-up">
        <div class="grid lg:grid-cols-2">
          
          <div class="p-10 md:p-14 flex flex-col justify-center bg-white order-2 lg:order-1">
             <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                   <span class="material-symbols-outlined text-2xl">commute</span>
                </div>
                <h2 class="font-serif text-3xl text-primary">Транспортни услуги</h2>
             </div>
             
             <div class="text-gray-600 space-y-6 leading-relaxed text-justify">
               <p>
                 За максимално удобство на своите гости хотел „Вила Бояна” предлага трансфери от и до летището или друга желана дестинация.
               </p>
               <p>
                 Така ще бъдете независими и ще стигате още по-бързо и комфортно до всяка точка на София и околностите ѝ.
               </p>
               <div class="border-l-4 border-accent pl-6 py-2 bg-warm-cream/50">
                 <p class="italic text-primary font-medium">
                   Независимо дали сте избрали нашия хотел за почивка или за служебни ангажименти, ние можем да предложим и автомобили под наем.
                 </p>
               </div>
             </div>
          </div>

          <div class="relative h-[400px] lg:h-auto order-1 lg:order-2 overflow-hidden group">
             <img src="/vila-boyana/images/transport.jpg" alt="Транспортни услуги" 
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100" />
             
             <div class="absolute bottom-0 left-0 bg-white/90 backdrop-blur-sm px-6 py-3 m-6 rounded-sm shadow-lg">
                <span class="text-accent text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <span class="material-symbols-outlined text-base">key</span> Rent-a-Car
                </span>
             </div>
          </div>

        </div>
      </div>

      <div class="bg-primary text-warm-cream p-10 md:p-16 text-center shadow-xl relative overflow-hidden rounded-sm" data-aos="fade-up">
         <div class="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
         <div class="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>

         <div class="relative z-10">
           <h2 class="font-serif text-3xl text-white mb-6">Готови ли сте за почивка?</h2>
           <p class="text-stone-400 mb-10 max-w-xl mx-auto">
             Насладете се на комфорт и спокойствие в полите на Витоша.
           </p>
           
           <button @click="goToBooking" class="bg-accent text-white px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 shadow-lg cursor-pointer transform hover:-translate-y-1">
             Резервирайте стая сега
           </button>
         </div>
      </div>

    </section>
  </div>
</template>

<script setup>
function goToBooking() {
  window.open('https://www.booking.com/hotel/bg/hotel-villa-boyana.en-gb.html', '_blank');
}

const serviceList = [
  {
    title: 'Рум Сървис',
    icon: 'room_service',
    desc: 'Насладете се на вкусна храна и напитки в уюта на вашата стая. Дискретно обслужване за пълно спокойствие.'
  },
  {
    title: 'Мини Бар',
    icon: 'kitchen',
    desc: 'Богат асортимент от освежаващи напитки и снаксове, налични във вашата стая за максимално удобство.'
  },
  {
    title: 'Пране и Гладене',
    icon: 'dry_cleaning',
    desc: 'Професионална грижа за вашите дрехи, за да изглеждате безупречно по време на вашия престой или бизнес среща.'
  },
  {
    title: 'Транспорт',
    icon: 'airport_shuttle',
    desc: 'Организиран транспорт от и до летището, както и таксиметрови услуги по заявка за бързо придвижване в града.'
  },
  {
    title: 'Безплатен Паркинг',
    icon: 'local_parking',
    desc: 'Сигурен и удобен паркинг за вашия автомобил, напълно безплатен за всички гости на хотела.'
  },
  {
    title: 'Високоскоростен Интернет',
    icon: 'wifi',
    desc: 'Бърза и надеждна оптична връзка във всички стаи и общи части, идеална за работа или развлечение.'
  }
]
</script>