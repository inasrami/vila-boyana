<template>
  <section class="section-padding bg-white overflow-hidden py-10">
    <div class="container-custom px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Info -->
        <div data-aos="fade-right">
          <span class="text-accent text-sm font-bold uppercase tracking-widest mb-2 block"
            >Локация </span
          >
          <h2 class="font-serif text-4xl md:text-5xl text-primary mb-8">Елегантност и Комфорт</h2>
          <p class="text-gray-600 mb-8 font-light text-lg leading-relaxed">
            Разположен в спокойния и престижен квартал Бояна, хотелът предлага изискана атмосфера и безупречно обслужване. Насладете се на модерен уют и тишина, съчетани с всички удобства за работа и почивка.
          </p>

          <div class="space-y-6 mb-10">
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-accent mt-1">king_bed</span>
              <div>
                <h4 class="font-serif text-lg text-primary">Градска панорамаs</h4>
                <p class="text-sm text-gray-500">Собствени балкони с откриваща се красива гледка към София</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-accent mt-1">deck</span>
              <div>
                <h4 class="font-serif text-lg text-primary">Градска панорама</h4>
                <p class="text-sm text-gray-500">Собствени балкони с откриваща се красива гледка към София</p>
              </div>
            </div>
          </div>

          <div class="p-6 border border-gray-200 rounded-sm bg-cream">
            <h4 class="font-serif text-lg mb-4">Контакт</h4>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-lg">location_on</span>
                <span>Бояна, София, България</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-lg">call</span>
                <span>02 / 959 05 29,  02 / 859 44 33</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-lg">mail</span>
                <span>villa.boyana@mail.bg</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="relative h-[600px]" data-aos="fade-left">
          <div class="absolute inset-0 bg-gray-200 w-full h-full">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.2345678901234!2d23.2640211!3d42.6466466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa84a0c11ede7b%3A0x3337c3d77d0afeca!2sHotel%20Villa%20Boyana!5e0!3m2!1sen!2sbg!4v1234567890123"
  width="100%"
  height="100%"
  style="border: 0; filter: contrast(90%)"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
          </div>
          <!-- Decorative Border -->
          <div
            class="absolute -top-4 -right-4 w-full h-full border border-accent pointer-events-none hidden md:block"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
