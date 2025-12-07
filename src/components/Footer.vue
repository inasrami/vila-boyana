<script setup>
const navLinks = [
  { name: 'Стаи', href: '#' },
  { name: 'Хотелът', href: '#' },
  { name: 'Галерия', href: '#' },

];
</script>

<template>
  <footer class="bg-charcoal-text text-warm-cream pt-16 pb-8 border-t-8 border-wood-brown font-sans">
    <div class="container mx-auto px-6">
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        <div>
          <h3 class="text-2xl font-serif text-warm-beige mb-6 font-bold uppercase tracking-widest">
            Villa Boyana
          </h3>
          <p class="mb-6 opacity-80 leading-relaxed text-sm">
            Уют и елегантност в подножието на Витоша. Вила Бояна е вашето място за спокойствие, далеч от градския шум, но близо до сърцето на София.          </p>
          
          <ul class="space-y-4 text-sm">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-warm-beige mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Sofia 1616, Boyana,<br>Square "Sborishte" No 5</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-warm-beige mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <a href="tel:+35929590529" class="hover:text-forest-green transition-colors duration-300">
                02 / 959 05 29
              </a>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-warm-beige mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <a href="mailto:villa.boyana@mail.bg" class="hover:text-forest-green transition-colors duration-300">
                villa.boyana@mail.bg
              </a>
            </li>
          </ul>
        </div>

        <div class="md:pl-10">
          <h4 class="text-lg font-serif text-warm-beige mb-6 font-bold uppercase">Разгледай </h4>
          <ul class="space-y-3 font-medium">
            <li v-for="link in navLinks" :key="link.name">
              <a 
                :href="link.href" 
                class="hover:text-forest-green hover:translate-x-1 inline-block transition-all duration-200"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        

      </div>

      <div class="border-t border-wood-brown/30 my-8"></div>

      <div class="flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
        <p>© 2025 Hotel Villa Boyana. All rights reserved.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-warm-beige transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-warm-beige transition-colors">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
</template>