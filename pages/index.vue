<script setup lang="ts">
import type { ApiStructure } from "~/types/api";
import CardComponent from "./components/Card.vue";

const API_KEY="190727eebc064fad996cb098a492dfcf";
const API_URL=`https://newsapi.org/v2/everything?q=Apple&from=2025-04-21&sortBy=popularity&apiKey=${API_KEY}`;
const {data, status, error, refresh} = await useAsyncData<ApiStructure>("getNews", ()=> $fetch(API_URL)) //현재 컴포넌트 내에서만 사용할 수 있음. 전역 사용하려면 pinia 필요
console.log(data.value);
</script>

<template>
    <div class="page">
        <CardComponent v-for="article in data?.articles" :key="article.url" :data="article"/>
    </div>
</template>

<style lang="scss" scoped>
.page{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;

    width: calc(100% - 96px);

    padding: 48px;
    gap: 24px;
}
</style>