<template>
  <footer class="bg-[#1c1917] text-stone-300 pt-20 pb-10 font-sans border-t-4 border-accent">
    <div class="container mx-auto px-6">
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
        
        <div>
          <h3 class="text-3xl font-serif text-white mb-6">Villa Boyana</h3>
          <p class="mb-8 text-sm leading-7 opacity-80 max-w-sm">
            Уют и елегантност в подножието на Витоша. Вашето място за бягство от града, без да напускате София.
          </p>
          <div class="flex gap-4">
             <div class="w-8 h-8 rounded-full border border-stone-600 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all cursor-pointer">
                <span class="text-xs">FB</span>
             </div>
             <div class="w-8 h-8 rounded-full border border-stone-600 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all cursor-pointer">
                <span class="text-xs">IG</span>
             </div>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-bold uppercase tracking-widest text-white mb-6">Бързи връзки</h4>
          <ul class="space-y-3 text-sm">
            <li v-for="link in navLinks" :key="link.name">
              <a :href="link.href" class="hover:text-accent transition-colors flex items-center gap-2">
                <span class="w-1 h-1 bg-accent rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <div>
           <h4 class="text-sm font-bold uppercase tracking-widest text-white mb-6">Контакти</h4>
           <ul class="space-y-4 text-sm">
            <li class="flex items-start gap-4">
              <span class="material-symbols-outlined text-accent">location_on</span>
              <span class="opacity-80">Sofia 1616, Boyana,<br>Square "Sborishte" No 5</span>
            </li>
            <li class="flex items-center gap-4">
              <span class="material-symbols-outlined text-accent">call</span>
              <a href="tel:+35929590529" class="hover:text-white transition-colors">02 / 959 05 29</a>
            </li>
            <li class="flex items-center gap-4">
              <span class="material-symbols-outlined text-accent">mail</span>
              <a href="mailto:villa.boyana@mail.bg" class="hover:text-white transition-colors">villa.boyana@mail.bg</a>
            </li>
          </ul>
        </div>

      </div>

      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
        <p>© 2025 Hotel Villa Boyana. All rights reserved.</p>
        <div class="flex space-x-8 mt-4 md:mt-0">
          <a href="#" class="hover:text-white transition-colors">Privacy</a>
          <a href="#" class="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navLinks = [
  { name: 'Стаи', href: '/' },
  { name: 'За хотела', href: '#' },
  { name: 'Галерия', href: '#' },
  { name: 'Резервации', href: 'https://www.booking.com/hotel/bg/hotel-villa-boyana.en-gb.html' },
];
</script>