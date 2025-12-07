<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-cover bg-center "
    style="background-image: url('/src/assets/hero-image.jpg');">
    <div class="bg-stone-500/40 backdrop-blur-[2px] w-screen h-screen flex items-center justify-center">
      <div class="relative z-10 text-center px-auto  mx-auto mt-18">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p class="text-white text-xl md:text-3xl lg:text-5xl uppercase tracking-widest font-bold mb-4 opacity-90">
            Добре дошли в София
          </p>
          <p class="text-sm md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Открийте лукса и уюта на Вила Бояна
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button @click="goToBooking"
              class="px-8 py-4 bg-white text-primary min-w-[200px] uppercase tracking-widest text-sm font-medium hover:bg-gray-100 transition-colors">
              Резервирай Сега
            </button>
            <button @click="scrollToRooms"
              class="px-8 py-4 bg-white/10 backdrop-blur-md border border-white text-white min-w-[200px] uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
              Разгледай Стаите
            </button>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script setup>
function scrollToRooms() {
  document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })
}
function goToBooking() {
  window.location.href = 'https://www.booking.com/hotel/bg/hotel-villa-boyana.en-gb.html?aid=311984&label=dy-d3-4ndud-dd-d-d-ddeg-dd3-4nd1-2ddeg-abN0XXNXm3uc7DvZFGFLvAS390342540437%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-329068441615%3Alp9219127%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YTQUGSsRwx9_3qo3uPTHyoo&sid=f55ae84bbef1833596d97570f568737f&dest_id=-838489&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1765118413&srpvid=c826672414600787&type=total&ucfs=1&';
}
</script>
<style scoped></style>