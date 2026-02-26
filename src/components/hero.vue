<template>
  <div id="home-hero" class="relative h-screen w-full flex items-center overflow-hidden">
    <div class="absolute inset-0 w-full h-full">
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
           :style="{ backgroundImage: `url(${base}images/hero-image.jpg)` }">
      </div>
      <div class="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/60 to-transparent"></div>
    </div>
    </div>
</template>

<script setup>
// BASE URL ADDED HERE
const base = import.meta.env.BASE_URL

function scrollToRooms() {
  document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })
}
function goToBooking() {
  window.open('https://www.booking.com/hotel/bg/hotel-villa-boyana.en-gb.html', '_blank');
}
</script>