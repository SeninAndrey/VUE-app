<script setup>
    defineProps({
        name: String,
        code: String,
        imageUrl: String,
        price: Number,
        quantity: Number,
        onClickAdd: Function,
        onClickDelete: Function,
        isAdded: Boolean,
        onClickMore: Function,
        onClickLess: Function
    });  
</script>

<template>
    <div class="card">
        <img :src="imageUrl" :alt="name" class="card__image" srcset="" >
        <div class="card__content">
            <p class="card__name">{{ name }} {{ code }}</p>
            <div class="card__price">{{ price }} &#8381</div>
        </div>
        <button class="card__add" @click="onClickAdd">
            <svg v-if="isAdded" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1211 10.8705L10.881 19.1295" stroke="#1F2020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.8711 10.88L19.1302 19.1201" stroke="#1F2020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4.16663V15.8333" stroke="#1F2020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.16699 10H15.8337" stroke="#1F2020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="card__controls controls">
            <button class="controls__decrease" @click="onClickLess"></button>
            <span class="controls__quantity">{{ quantity }}</span>
            <button class="controls__increase" @click="onClickMore"></button>            
        </div>
        <button class="card__delete" @click="onClickDelete">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#1F2020" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 6L18 18" stroke="#1F2020" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
</template>

<style scoped>
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 392px;
        padding-bottom: 16px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    } 
    
    .card__controls {
        justify-content: space-between;
        width: 128px;
    }

    .card__add {
        position: absolute;
        right: 0;
        bottom: 14px;
        width: 80px;
        height: 32px;
        background-color: #f2f2f2;
        border-radius: 8px;
        background-repeat: no-repeat;
        background-position: center;
    }

    .controls__decrease, 
    .controls__increase {
        width: 40px;
        height: 24px;
        background-color: #f2f2f2;
        border-radius: 4px;
        background-repeat: no-repeat;
        background-position: center;
    }

    .controls__decrease {
        background-image: url(../../images/minus.png);
    }

    .controls__increase {
        background-image: url(../../images/plus.png);
    }

    .controls__decrease:hover, 
    .controls__increase:hover,
    .card__add:hover {      
        background-color: #7bb899; 
    }

    .card__delete {
        width: 24px;
        height: 24px;
        margin-left: auto;
        margin-right: 0;
        background-color: inherit;
        opacity: .2;
    }

    .card__delete:hover {
        transform: rotate(90deg) scale(1.3) ;
        opacity: 1;
    }

    .card__controls,
    .card__delete {
        display: none;
    }

    .card:nth-last-child(-n + 5) {
        border: none;
    }
/* 
    .card:not(:first-child) {        
        padding-top: 39px;
    } */

    .cart__list .card{
        flex-direction: row;
        align-items: center;
        min-height: 120px;
        padding: 0;
        border-bottom: none;
        border-top: 1px solid rgba(0, 0, 0, .1);;
    }

    .cart__list .card__add {
        display: none;
    }

    .card__image {
        align-self: center;
    }

    .cart__list .card__image {
        align-self: flex-start;
        width: 96px;
        height: 96px;
        margin-right: 8px;
    }

    .card__content {
        display: flex;
        flex-direction: column;
        min-height: 76px;
        margin-top: auto;
        margin-bottom: 0;
    }

    .cart__list .card__content {
        width: 200px;
        margin: 0;
        height: 68px;
        justify-content: space-between;
    }

    .cart__list .card__controls,
    .cart__list .card__delete{
        display: flex;
    }

    .card__name,
    .card__code {
        font-size: 16px;
        font-weight: 300;
    }

    .card__price {
        font-size: 16px;
        font-weight: 600;
        margin-top: auto;
        margin-bottom: 0;
    }

    .cart__list .card__price {
        margin: 0;
    }
</style>