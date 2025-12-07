<template>
    <section id="rooms" class="section-padding bg-warm-cream">
        <div class="container-custom px-6">
            <div class="flex flex-col md:flex-row justify-between items-center pb-16 pt-10">
                <div class="max-w-[90%]" data-aos="fade-right">
                    <h2 class="text-4xl md:text-5xl font-serif text-primary pb-6">Стаите</h2>
                    <p class="text-gray-600 font-light leading-relaxed">
                        Хотел „Вила Бояна” ви предлага настаняване в уютни, елегантно обзаведени стаи, съвсем различни
                        от традиционно студената хотелска обстановка.
                        Архитектурното решение е индивидуално за всяка стая и всеки кът от хотела.
                        За интериора на стаите, както и на общите части, са използвани естествени материали и материи, а
                        цветовите съчетания са нежни, пастелни. Всяко кътче на хотела предразполага към почивка и
                        релакс.

                        Гостите ни могат да избират между настаняване в единични стаи, двойни стаи, двойни стаи с
                        единични легла, суит.

                        Помещенията са просторни, светли и подходящи за семейства, романтични двойки или приятелска
                        компания.
                       
                    </p>
                </div>
                
            </div>

            <div class="grid lg:grid-cols-3 gap-8 py-10">
                <div v-for="(room, index) in rooms" :key="room.title" class="group" data-aos="fade-up"
                    :data-aos-delay="index * 100">
                    <div class="relative overflow-hidden mb-6">
                        <img :src="room.image" :alt="room.title"
                            class="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500">
                        </div>
                    </div>

                    <div class="pr-4">
                        <div class="flex justify-between items-baseline mb-3">
                            <h3 class="text-2xl font-serif text-primary">{{ room.title }}</h3>
                            
                        </div>

                        <p class="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-2">
                            {{ room.description }}
                        </p>

                        <div class="flex gap-4 mb-6 text-gray-500">
                            <div v-for="amenity in room.amenities" :key="amenity.name" class="flex items-center gap-2"
                                :title="amenity.name">
                                <span class="material-symbols-outlined text-xl">{{ amenity.icon }}</span>
                            </div>
                        </div>

                        <button @click="goToBooking"
                            class="text-sm uppercase tracking-widest font-medium text-primary border-b border-gray-300 hover:border-primary pb-1 transition-all">
                            Резервирай Сега
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToBooking() {
    router.push('/bookingpage')
}

const rooms = ref([
    {
        title: 'Единична стая',
        description: 'Единичните стаи в четиризвездния хотел „Вила Бояна“ съчетават стилен уют, модерни удобства за работа и почивка и балкон с гледка към Витоша, осигурявайки пълно спокойствие и възможност за настаняване в двойна стая за допълнителен комфорт.',
        image: './src/assets/edinichna.jpg',
        amenities: [
            { name: 'View', icon: 'hotel' },
            { name: 'King Bed', icon: 'king_bed' },
            { name: 'Wifi', icon: 'wifi' },
        ],
    },
    {
        title: 'Двойна стая',
        price: 380,
        description:
            'Двойните стаи със спални в хотел „Вила Бояна“ са перфектният избор както за романтично уединение, така и за бизнес престой, предлагайки елегантен зониран интериор, модерни удобства и гарантирано спокойствие чрез отлична шумоизолация.',
        image: './src/assets/dvoyna.jpg',
        amenities: [
            { name: 'Rose', icon: 'candle' },
            { name: 'Garden', icon: 'yard' },
            { name: 'view', icon: 'hotel' },
        ],
    },
    {
        title: 'Суит с отделни легла',
        price: 750,
        description:
            'Просторните двойни стаи с единични легла в хотел „Вила Бояна” са идеални за дълъг престой, предлагайки стилен комфорт, пълно техническо оборудване и голям балкон с панорамна гледка към града и Витоша.',
        image: './src/assets/suite1.jpg',
        amenities: [
            { name: 'Service', icon: 'room_service' },
            { name: 'Bar', icon: 'wine_bar' },
            { name: 'Bath', icon: 'bathtub' },
        ],
    },
])
</script>
