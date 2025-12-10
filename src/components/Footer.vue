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
            <a href="https://www.facebook.com/hotelvillaboyana/" target="_blank"
              class="w-8 h-8 rounded-full border border-stone-600 flex items-center justify-center text-stone-300 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 cursor-pointer">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            <a href="https://www.instagram.com/hotel_villa_boyana/" target="_blank"
              class="w-8 h-8 rounded-full border border-stone-600 flex items-center justify-center text-stone-300 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 cursor-pointer">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
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

      <div
        class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
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