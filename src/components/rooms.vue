<template>
    <section id="rooms" class="section-padding bg-warm-cream py-24">
        <div class="container-custom px-6">
            <div class="flex flex-col lg:flex-row justify-between items-end pb-16 gap-8">
                <div class="max-w-3xl" data-aos="fade-right">
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Настаняване</span>
                    <h2 class="text-4xl md:text-5xl font-serif text-primary mb-6">Нашите Стаи</h2>
                    <p class="text-gray-600 font-light leading-relaxed text-lg">
                        Елегантно обзаведени стаи, използващи естествени материали и пастелни цветове.
                        Всяко кътче предразполага към почивка и релакс.
                    </p>
                </div>
                <div data-aos="fade-left">
                     </div>
            </div>

            <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                <div v-for="(room, index) in rooms" :key="room.title" 
                     class="group bg-white shadow-sm hover:shadow-xl transition-all duration-500 ease-out flex flex-col h-full" 
                     data-aos="fade-up" :data-aos-delay="index * 100">
                    
                    <div class="relative overflow-hidden aspect-4/3 xl:aspect-3/4">
                        <img :src="room.image" :alt="room.title"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                        
                        <div v-if="room.price" class="absolute bottom-0 left-0 bg-white/95 backdrop-blur px-5 py-2 text-primary font-serif shadow-sm">
                             <span class="text-[10px] text-gray-500 uppercase block tracking-wider">От</span>
                             <span class="text-lg font-bold">{{ room.price }} лв.</span>
                        </div>
                    </div>

                    <div class="p-6 flex flex-col grow">
                        <h3 class="text-xl font-serif text-primary mb-3 group-hover:text-wood-brown transition-colors">{{ room.title }}</h3>
                        
                        <p class="text-gray-500 mb-6 text-sm leading-relaxed line-clamp-3 grow">
                            {{ room.description }}
                        </p>

                        <div class="border-t border-gray-100 pt-4 flex justify-between items-center mt-auto">
                            <div class="flex gap-3 text-accent/80">
                                <span v-for="amenity in room.amenities" :key="amenity.name" 
                                      class="material-symbols-outlined text-lg" :title="amenity.name">
                                    {{ amenity.icon }}
                                </span>
                            </div>

                            <button @click="goToBooking"
                                class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-wood-brown group-hover:text-white transition-all">
                                <span class="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

function goToBooking() {
    window.open('https://www.booking.com/hotel/bg/hotel-villa-boyana.en-gb.html', '_blank');
}

const rooms = ref([
    {
        title: 'Единична стая',
        description: 'Стилен уют и модерни удобства. Идеална за бизнес престой, с балкон разкриващ гледка към Витоша.',
        image: new URL('../assets/edinichna.jpg', import.meta.url).href,
        amenities: [
            { name: 'View', icon: 'landscape' },
            { name: 'Wifi', icon: 'wifi' },
            { name: 'AC', icon: 'ac_unit' },
        ],
    },
    {
        title: 'Двойна стая',
        description: 'Перфектният избор за романтично уединение. Елегантен интериор и отлична шумоизолация.',
        image: new URL('../assets/dvoyna.jpg', import.meta.url).href, 
        amenities: [
            { name: 'Bed', icon: 'king_bed' },
            { name: 'Garden', icon: 'deck' },
            { name: 'TV', icon: 'tv' },
        ],
    },
    {
        title: 'Стая с две легла', 
        description: 'Просторни стаи с отделни легла, подходящи за приятели или колеги. Разполагат с всички удобства и панорамна тераса.',
        image: new URL('../assets/suite2.jpg', import.meta.url).href, 
        amenities: [
            { name: 'Twin Beds', icon: 'single_bed' },
            { name: 'Balcony', icon: 'balcony' },
            { name: 'Desk', icon: 'desk' },
        ],
    },
    {
        title: 'Суит',
        description: 'Пространство и лукс. Суитът предлага отделни зони, мека мебел и всичко необходимо за дълъг и комфортен престой.',
        image: new URL('../assets/suite1.jpg', import.meta.url).href, 
        amenities: [
            { name: 'Living Area', icon: 'weekend' },
            { name: 'Minibar', icon: 'wine_bar' },
            { name: 'Bathtub', icon: 'bathtub' },
        ],
    },
])
</script>
