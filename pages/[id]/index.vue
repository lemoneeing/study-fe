<script setup lang="ts">
import CardComponent from "../components/Card.vue";
import { useStore } from "~/stores/apis";
import { VueSpinnerFacebook } from "vue3-spinners";

// pinia 사용하여 API 호출
const route = useRoute();
const store = useStore();
const { status } = await useAsyncData("getNews", () => store.getNews());

onMounted(() => {
    store.changeSearchValue(String(route.params.id));
})
</script>

<template>
    <ClientOnly>
        <div v-if="status === 'pending'" class="loading">
            <VueSpinnerFacebook size="48" />
        </div>
        <div class="page">
            <!-- pinia 사용 후 -->
            <CardComponent v-for="article in store.articleList" :key="article.url" :data="article" />
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/mixin.scss";

.page{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;

    width: calc(100% - 96px);

    padding: 48px;
    gap: 24px;
}

.loading{
    @include mixin.flex-center;
    width: calc(100% - 96px);

    padding: 48px;
    gap: 24px;
}
</style>