<script setup lang="ts">
import CardComponent from "./components/Card.vue";
import { useStore } from "~/stores/apis";

// pinia 사용 전
// import type { ApiStructure } from "~/types/api";

// const API_KEY="190727eebc064fad996cb098a492dfcf";
// const API_URL=`https://newsapi.org/v2/everything?q=Apple&from=2025-04-21&sortBy=popularity&apiKey=${API_KEY}`;
// const {data, status, error, refresh} = await useAsyncData<ApiStructure>("getNews", ()=> $fetch(API_URL)) //현재 컴포넌트 내에서만 사용할 수 있음. 전역 사용하려면 pinia 필요
// console.log(data.value);

// pinia 샘플코드
// const store = useStore();
// const {count, name, doubleCount, doublePlusOne} = storeToRefs(useStore()); //구조분해할당. 가독성 증가, 반응성이 필요 없는 값을 읽을 때. 구조분해할당한 데이터의 반응성을 유지하려면 storeToRefs 로 감싸면 됨.

// pinia 사용하여 API 호출
const store = useStore();
await useAsyncData("getNews", () => store.getNews());
</script>

<template>
    <div class="page">
        <!-- pinia 사용 전
        <CardComponent v-for="article in data?.articles" :key="article.url" :data="article"/> -->
        
        <!-- pinial 샘플코드 -->
        <!-- {{ name }}
        <br />
        {{ count }}
        <br />
        {{ doubleCount }}
        <br />
        {{ doublePlusOne }}
        <br />
        <button @click="store.increment()">증가</button> -->

        <!-- pinia 사용 후 -->
        <CardComponent v-for="article in store.articleList" :key="article.url" :data="article" />
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