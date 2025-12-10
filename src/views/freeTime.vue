<template>
  <div class="pt-24 min-h-screen bg-warm-cream">
    <section class="container-custom px-6 py-12">
      
      <div class="text-center mb-12" data-aos="fade-up">
         <span class="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Забавления</span>
         <h1 class="font-serif text-4xl md:text-5xl text-primary mb-6">Свободно Време</h1>
         <p class="text-gray-600 max-w-2xl mx-auto font-light text-lg">
           Бояна е приказно място, където природата и градският ритъм се срещат. Изберете своя сезон:
         </p>
      </div>

      <div class="flex justify-center gap-4 mb-16" data-aos="fade-up">
        <button 
          @click="activeTab = 'summer'"
          :class="[
            'px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm flex items-center gap-2',
            activeTab === 'summer' ? 'bg-accent text-white shadow-md scale-105' : 'bg-white text-gray-500 hover:text-accent hover:bg-white/80'
          ]"
        >
          <span class="material-symbols-outlined text-lg">sunny</span> Лято
        </button>
        <button 
          @click="activeTab = 'winter'"
          :class="[
            'px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm flex items-center gap-2',
            activeTab === 'winter' ? 'bg-[#2E6F40] text-white shadow-md scale-105' : 'bg-white text-gray-500 hover:text-[#2E6F40] hover:bg-white/80'
          ]"
        >
          <span class="material-symbols-outlined text-lg">ac_unit</span> Зима
        </button>
      </div>

      <transition mode="out-in" enter-active-class="transition duration-500 ease-out" enter-from-class="opacity-0 translate-y-4" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-300 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
        
        <div v-if="activeTab === 'summer'" key="summer">
          
          <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div class="space-y-6 text-gray-600 leading-relaxed text-justify">
               <h2 class="font-serif text-3xl text-primary mb-4">Летни приключения</h2>
               <p>
                 Въздухът е чист, гледката невероятна, а София – с нейните многобройни забавления – е на няколко минути разстояние. 
                 Гостите на „Вила Бояна” могат да избират между множество забавления, подходящи както за природолюбителите, така и за парти маниаците.
               </p>
               <div class="bg-white p-6 border-l-4 border-accent shadow-sm">
                 <h4 class="font-serif text-lg text-primary mb-2">Природа и Спорт</h4>
                 <p class="text-sm">
                   Наблизо са невероятния <strong>Боянски водопад</strong> и Боянското езеро. Може да се насладите на планинско катерене, маунтийн байк или риболов сред тишината на природата.
                 </p>
               </div>
            </div>
            <div class="h-[400px] rounded-sm overflow-hidden shadow-xl relative group">
               <img src="/src/assets/ezero.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Лято на Витоша" />
               <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-sm shadow-md">
                 <span class="text-xs font-bold text-accent uppercase flex items-center gap-2"><span class="material-symbols-outlined">landscape</span> Витоша</span>
               </div>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-t-2 border-accent/20">
               <span class="material-symbols-outlined text-4xl text-accent mb-4">church</span>
               <h3 class="font-serif text-xl text-primary mb-3">Култура и История</h3>
               <p class="text-sm text-gray-500 mb-4">
                 Световно известната <strong>Боянска църква</strong> (ЮНЕСКО) със стенописи от 1259г. и <strong>Националния Исторически Музей</strong> са само на минути от хотела.
               </p>
            </div>
            <div class="bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-t-2 border-accent/20">
               <span class="material-symbols-outlined text-4xl text-accent mb-4">shopping_bag</span>
               <h3 class="font-serif text-xl text-primary mb-3">Шопинг</h3>
               <p class="text-sm text-gray-500 mb-4">
                 В непосредствена близост се намират най-големите молове на Балканите: <strong>Парадайз Център</strong> и <strong>България Мол</strong>.
               </p>
            </div>
            <div class="bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-t-2 border-accent/20">
               <span class="material-symbols-outlined text-4xl text-accent mb-4">nightlife</span>
               <h3 class="font-serif text-xl text-primary mb-3">Градски Живот</h3>
               <p class="text-sm text-gray-500 mb-4">
                 Поради доброто разположение, можете лесно да се насладите на културния календар, галериите и нощния живот на София.
               </p>
            </div>
          </div>
        </div>

        <div v-else key="winter">
          
          <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div class="order-2 lg:order-1 h-[400px] rounded-sm overflow-hidden shadow-xl relative group">
               <img src="/src/assets/ski.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[30%]" alt="Зима на Витоша" />
               <div class="absolute inset-0 bg-blue-900/10"></div> <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-sm shadow-md">
                 <span class="text-xs font-bold text-[#2E6F40] uppercase flex items-center gap-2"><span class="material-symbols-outlined">downhill_skiing</span> Ски зона</span>
               </div>
            </div>
            
            <div class="order-1 lg:order-2 space-y-6 text-gray-600 leading-relaxed text-justify">
               <h2 class="font-serif text-3xl text-primary mb-4">Зимна приказка</h2>
               <p>
                 Безспорно едни от най-добрите условия за практикуване на зимни спортове са тук.
                 Само на 16 км от хотел "Вила Бояна" се намират ски пистите на Витоша.
               </p>
               <div class="bg-white p-6 border-l-4 border-[#2E6F40] shadow-sm">
                 <h4 class="font-serif text-lg text-primary mb-2">Активен Отдих</h4>
                 <p class="text-sm">
                   Ски бягане, екстремно спускане с маунтийн байк или разходка до замръзналия <strong>Боянски водопад</strong>. Курортът Боровец е само на 1 час път.
                 </p>
               </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
             <div class="bg-white p-8 flex items-start gap-6 shadow-md border-b-4 border-[#2E6F40]">
                <span class="material-symbols-outlined text-5xl text-[#2E6F40]">museum</span>
                <div>
                  <h3 class="font-serif text-xl text-primary mb-2">Културен Туризъм</h3>
                  <p class="text-sm text-gray-500">
                    Историческите забележителности като Боянската църква и музеите добиват особено очарователно обаяние през зимата. Ще Ви помогнем да не пропуснете нищо.
                  </p>
                </div>
             </div>

             <div class="bg-white p-8 flex items-start gap-6 shadow-md border-b-4 border-accent">
                <span class="material-symbols-outlined text-5xl text-accent">hot_tub</span>
                <div>
                  <h3 class="font-serif text-xl text-primary mb-2">Релакс</h3>
                  <p class="text-sm text-gray-500">
                    В края на един изпълнен със зимни емоции ден, в хотела ви очаква <strong>гореща финландска сауна</strong> за пълно възстановяване.
                  </p>
                </div>
             </div>
          </div>
        </div>

      </transition>

    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('summer')
</script>