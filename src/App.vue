<script setup>
import navbar from './components/navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <navbar></navbar>
  <router-view></router-view>
  <Footer />
</template>