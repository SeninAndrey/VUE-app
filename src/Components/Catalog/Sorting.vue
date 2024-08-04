<script setup>
    import { onBeforeUnmount, onMounted, ref, computed } from 'vue';
    import Drawer from '../Drawer.vue'; 

    defineProps({
        onChangeSelect: Function
    });
    
    const selectedOption = ref('СНАЧАЛА ПОПУЛЯРНЫЕ');
    const isDropdownOpened = ref(false);
    const dropDown = ref(null);
    const sortingArr = computed(() =>  [
        {
            name: 'СНАЧАЛА ДОРОГИЕ',
            value: 'price&order=desc',
        }, 
        {
            name: 'СНАЧАЛА НЕДОРОГИЕ',
            value: 'price'
        }, 
        {
            name: 'СНАЧАЛА ПОПУЛЯРНЫЕ',
            value: 'id'
        }, 
        {
            name: 'СНАЧАЛА НОВЫЕ',
            value: 'code'
        }
    ]
    .filter(elem => elem.name !== selectedOption.value));
    
    const sortingOptions = ref(sortingArr);

    const toggleSelectedOption = (option) => {        
        selectedOption.value = option;
        isDropdownOpened.value = false;
    }

    const closeDropdown = (element) => {
        if (!dropDown.value.contains(element.target)) {
            isDropdownOpened.value = false;
        }
    }

    onMounted(() => {
        window.addEventListener('click', closeDropdown);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('click', closeDropdown);
    });     
</script>

<template>
    <Drawer v-if="isDropdownOpened"/>
    <div class="dropdown-wrapper" ref="dropDown">        
        <div class="dropdown-selected-option" @click="isDropdownOpened = !isDropdownOpened">
            {{ selectedOption }}
            <svg v-if="!isDropdownOpened" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L8.4641 3L1.5359 3L5 7.5Z" fill="#202020"/>
            </svg>
        </div>
        <div 
            class="options-wrapper"
            v-if="isDropdownOpened"
        >
            <div 
                class="option" 
                v-for="(option, index) in sortingOptions" 
                :key="index" 
                @click="toggleSelectedOption(option.name);onChangeSelect(option.value)"
            >               
                {{ option.name }}
            </div>
        </div>
    </div>
    
</template>

<style scoped>
    .dropdown-wrapper {
        position: absolute;
        right: 67px;
        top: 0;
        width: 286px;
        font-size: 12px;
        font-weight: 500;
        background-color: #fff;
        z-index: 3;
    }

    .dropdown-selected-option,
    .option {
        height: 48px;
        padding: 17px 24px;   
        cursor: pointer;     
    }

    .dropdown-selected-option:hover,
    .option:hover {
        background-color: #7bb899;
    }
</style>