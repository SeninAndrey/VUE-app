<script setup>
    import Drawer from './Drawer.vue';
    import Card from './Catalog/Card.vue'

    defineProps({
        cartItems: Array,
        closeCart: Function,
        clearCartItems: Function,
        toggleItemInCart: Function,
        increment: Function,
        decrement: Function,
        totalPrice: Number,
        onClickOrder: Function
    }); 
</script>

<template>
    <Drawer />
    <div class="cart__container">
        <h2 class="cart__title">Корзина</h2>
        <button class="cart__close" @click="closeCart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#1F2020" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 6L18 18" stroke="#1F2020" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <div class="cart__header">
            <p class="cart__counter">{{ cartItems ? cartItems.length : 0 }} товара</p>
            <button class="cart__clear" @click="clearCartItems(cartItems)">очистить список</button>
        </div>
        <div class="cart__list">            
            <Card 
                v-for="item in cartItems"
                :key="item.id"
                :name="item.name"
                :code="item.code"
                :imageUrl="item.imageUrl"
                :isAdded="item.isAdded"
                :price="item.price"
                :quantity="item.quantity"
                :onClickDelete="() => toggleItemInCart(item)"
                :onClickMore="() => increment(item)"
                :onClickLess="() => decrement(item)"
            />        
        </div>  
        
        <div class="cart__footer">
            <div class="cart__total total">
                <p class="total__label">Итого</p>
                <p class="total__value">{{ totalPrice }} &#8381</p>
            </div>
            <button class="cart__order" @click="onClickOrder()">ОФОРМИТЬ ЗАКАЗ</button>
        </div>
    </div>
</template>

<style scoped>
    .cart__container {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        width: 600px;
        padding: 40px;
        background-color: #fff;
        overflow: scroll;
        z-index: 4;
    }

    .cart__close {
        position: absolute;
        right: 40px;
        top: 32px;
        width: 48px;
        height: 48px;
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 24px;
        font-size: 0;
        background-color: inherit;
    }

    .cart__close:hover svg{
        transform: rotate(90deg) scale(1.3);
    }

    .cart__title {
        margin-bottom: 94px;
        font-size: 30px;
        font-weight: 500;
    }

    .cart__clear {
        background-color: inherit;
        opacity: .4;
    }

    .cart__clear:hover {
        opacity: 1;
    }

    .cart__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 400;
    }

    .cart__footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: auto;
        margin-bottom: 0;
    }

    .cart__order {
        height: 56px;
        width: 49%;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
        background-color: #7bb899;
    }

    .cart__order:hover {
        opacity: .8;
    }

    .total__label {
        font-size: 16px;
        font-weight: 400;
    }

    .total__value {
        font-size: 30px;
        font-weight: 500;
    }
</style>