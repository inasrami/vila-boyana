<script setup>
import { onMounted } from 'vue';
import navbar from './components/navbar.vue';
import Footer from './components/Footer.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';


onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
});
</script>

<template>
  <navbar></navbar>
  <router-view></router-view>
  <Footer />
</template>