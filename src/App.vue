<script setup>
    import { computed, onMounted, ref, watch } from "vue";
    import axios from 'axios';
    import Catalog from "./Components/Catalog/Catalog.vue";
    import Header from "./Components/Header.vue";
    import Hero from "./Components/Hero/Hero.vue";
    import Footer from "./Components/Footer.vue";
    import Cart from "./Components/Cart.vue";

    const items = ref([]);
    const cartItems = ref([]);
    const isCartOpen = ref(false);
    const sortBy = ref('id');
    const filterBy = ref([]);
    const body = document.querySelector('body');

    const totalPrice = computed(() => cartItems.value.reduce((acc, item) => acc + (item.price * item.quantity), 0));

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`https://66aa8ac8636a4840d7c7f4f1.mockapi.io/paints?sortby=${sortBy.value}${filtersString(filterBy.value)}`);    
            items.value = data.map((item) => ({
                ...item,
                isAdded: false,
            }));           
        } catch (error) {
            console.log(error);
        }  
        body.classList.remove('noScroll');   
    }
    
    onMounted(fetchData); 
    watch(sortBy, fetchData);
    watch(filterBy, fetchData);

    const filtersString = (params) => {
        const paramsString = params.map(item => '&' + item + '=true');
        return paramsString.join('');
    }
    
    const onChangeSelect = (selectedValue) => {
        sortBy.value = selectedValue;
    }  

    const onChangeFilters = (filtersValue) => {
        filterBy.value = filtersValue;
    }

    const toggleCart = () => {
        isCartOpen.value = !isCartOpen.value;        
        body.classList.toggle('noScroll');    
    }

    const toggleItemInCart = (item) => {
        if (!item.isAdded) {
            item.quantity = 1;
            cartItems.value.push(item);
        } else {
            cartItems.value.splice(cartItems.value.indexOf(item), 1);
        }
        item.isAdded = !item.isAdded;  
    }

    const clearList = (array) => {  
        array.map(item => {
            item.isAdded = false;
        })
        array.length = 0;
    } 

    const order = () => {
        alert("Заказ оформлен");
        clearList(cartItems.value);
        toggleCart();
    }

    const increment = (currentItem) => {
        currentItem.quantity++;     
    }

    const decrement = (currentItem) => {
        if (currentItem.quantity === 1) {
            if (confirm("Удалить позицию из корзины?")) {
                toggleItemInCart(currentItem)
            } else return            
        }
        currentItem.quantity--;     
    }    
</script>

<template>
    <Cart 
        v-if="isCartOpen" 
        :cartItems="cartItems" 
        :closeCart="toggleCart" 
        :clearCartItems="clearList" 
        :toggleItemInCart="toggleItemInCart" 
        :increment="increment"
        :decrement="decrement"
        :totalPrice="totalPrice"
        :onClickOrder="order"
    />
    <div class="center">
        <Header :openCart="toggleCart" :cartCounter="cartItems.length"/>
        <Hero />
        <Catalog :itemsList="items" :toggleItemInCart="toggleItemInCart" :onChangeSelect="onChangeSelect" :onChangeFilters="onChangeFilters"/>
        <Footer />
    </div>    
</template>

<style>
    @font-face {
        font-family: 'Inter';
        src: url('./fonts/Inter-Light.woff2') format('woff2'),
            url('./fonts/Inter-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: url('./fonts/Inter-Regular.woff2') format('woff2'),
            url('./fonts/Inter-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }   
    
    @font-face {
        font-family: 'Inter';
        src: url('./fonts/Inter-Medium.woff2') format('woff2'),
            url('./fonts/Inter-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: url('./fonts/Inter-SemiBold.woff2') format('woff2'),
            url('./fonts/Inter-SemiBold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
    } 
    
    body {
        max-width: 1920px;
        margin-right: auto;
        margin-left: auto; 
        font-family: 'Inter', sans-serif; 
        color: #1f2020;
    }

    .noScroll {
        overflow: hidden;
    }

    li {
        list-style-type: none;
        font-family: 'Inter', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;
    }

    *:focus {
        outline: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        border: none;
        cursor: pointer;        
    }

    .container {
        padding-left: 67px;
        padding-right: 67px;        
    }
</style>