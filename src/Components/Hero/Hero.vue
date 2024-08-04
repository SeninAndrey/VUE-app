<script setup>
    import Swiper from './Slider.vue';
</script>

<template>
    <section class="container hero__container">
        <Swiper />
    </section>
</template>

<style scoped> 
    .hero__container {
        min-height: 560px;
        background-image: url(../../images/hero.jpg);
    }
</style>

