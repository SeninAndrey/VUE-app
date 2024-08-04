<script setup>
    import Filter from './Filter.vue';
    import Sorting from './Sorting.vue';
    import Card from './Card.vue';

    defineProps({
        itemsList: Array,
        toggleItemInCart: Function,
        onChangeSelect: Function,
        onChangeFilters: Function
    });

</script>

<template>
    <section class="container catalog__container">
        <Filter :onChangeFilters="onChangeFilters"/>
        <div class="catalog__content">
            <div class="catalog__header">
                <div class="catalog__count">{{ itemsList ? itemsList.length : 0 }} ТОВАРОВ</div>
                <Sorting :onChangeSelect="onChangeSelect"/>
            </div>
            <div class="catalog__cardlist">
                <Card 
                    v-for="item in itemsList"
                    :key="item.id"
                    :name="item.name"
                    :code="item.code"
                    :imageUrl="item.imageUrl"
                    :price="item.price"
                    :isAdded="item.isAdded"
                    :onClickAdd="() => toggleItemInCart(item)"
                />        
            </div>   
        </div>
    </section>
</template>

<style scoped>
    .catalog__container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 72px;
        margin-bottom: 141px;
    }

    .catalog__content {
        width: 85%;
    }

    .catalog__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 44px;
    }

    .catalog__cardlist {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        column-gap: 24px;
        row-gap: 16px;
    }

    @media (max-width: 1440px) {
        .catalog__cardlist {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }

    @media (max-width: 1200px) {
        .catalog__cardlist {
            grid-template-columns: 1fr 1fr 1fr;
        }
    } 

    @media (max-width: 768px) {
        .catalog__cardlist {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 576px) {
        .catalog__cardlist {
            display: flex;
            /* grid-template-columns: 1fr; */
        }
    }
</style>