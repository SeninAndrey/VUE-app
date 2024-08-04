<script setup>
 

    // import styles bundle
    import 'swiper/css/bundle';

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
</script>

<template>
    <!-- Slider main container -->
    <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">    
            <div class="hero__container">
                <h1 class="hero__title">Краски</h1>
                <p class="hero__description">
                    Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!
                </p>
            </div>  
        </div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
    </div>
</template>  

<style scoped>
    .swiper {
        width: 80%;
        height: 560px;
        color: #fff;
    }

    .hero__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 472px;
        height: 100%;
        margin-right: auto;
        margin-left: auto;
    }  
    
    .hero__title {
        margin-bottom: 24px;
        font-size: 72px;
        font-weight: 400;
    }

    .hero__description {
        font-size: 16px;
        font-weight: 500;
        line-height: 130%;
    }
</style>