<script setup>
import { watch, ref } from 'vue';

    defineProps({
        onChangeFilters: Function
    });

    const checkedValues = ref([]);
</script>

<template>
    <ul class="filter__list" >
        <li class="filter__item">
            <label class="filter__checkbox checkbox">
                <input class="checkbox__initial" type="checkbox" name="new" value="new" v-model="checkedValues" @change="onChangeFilters(checkedValues)">
                <span class="checkbox__custom"></span>
                <span class="checkbox__text">НОВИНКА</span>
            </label>
        </li>
        <li class="filter__item">
            <label class="filter__checkbox checkbox">
                <input class="checkbox__initial" type="checkbox" name="available" value="available" v-model="checkedValues" @change="onChangeFilters(checkedValues)">
                <span class="checkbox__custom"></span>
                <span class="checkbox__text">ЕСТЬ В НАЛИЧИИ</span>
            </label>
        </li>
        <li class="filter__item">
            <label class="filter__checkbox checkbox">
                <input class="checkbox__initial" type="checkbox" name="contract" value="contract">
                <span class="checkbox__custom"></span>
                <span class="checkbox__text">КОНТРАКТНЫЕ</span>
            </label>
        </li>
        <li class="filter__item">
            <label class="filter__checkbox checkbox">
                <input class="checkbox__initial" type="checkbox" name="exlusive" value="exclusive">
                <span class="checkbox__custom"></span>
                <span class="checkbox__text">ЭКСКЛЮЗИВНЫЕ</span>
            </label>
        </li>
        <li class="filter__item">
            <label class="filter__checkbox checkbox">
                <input class="checkbox__initial" type="checkbox" name="sale" value="sale" v-model="checkedValues" @change="onChangeFilters(checkedValues)">
                <span class="checkbox__custom"></span>
                <span class="checkbox__text">РАСПРОДАЖА</span>
            </label>
        </li>
    </ul>
</template>

<style scoped>
    .filter__list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .checkbox {
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: 400;
        cursor: pointer;
    }

    .checkbox__initial {
        display: none;
    }

    .checkbox__custom {
        position: relative;
        display: inline-block;
        width: 36px;
        height: 22px;
        margin-right: 12px;
        background-color: #f2f2f2;
        border-radius: 11px;
        transition: all 0.3s ease-in-out;
    }

    .checkbox__custom::before {
        content: "";
        position: absolute;
        left: 7px;
        top: 7px;
        bottom: 7px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #1f2020;
    }

    .checkbox__initial:checked + .checkbox__custom {
        background-color: #7bb899;
    }

    .checkbox__initial:checked + .checkbox__custom::before {
        left: 21px;
    }
</style>