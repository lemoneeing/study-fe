import {defineStore} from "pinia";
import type { Article } from "~/types/api";

export const useStore = defineStore("store", () => {
    //State
    const searchValue = ref<string>("korea");
    const articleList = ref<Article[]>([]);

    //Actions
    //Mutations => State 변경 목적
    const changeSearchValue = (payload: string) => {
        searchValue.value = payload;
    };

    //New API 호출
    const getNews = async () => {
        const params = { q: searchValue.value }; // 검색어를 쿼리 파라미터로 전달
        try{
            // 내부 Nuxt API 엔드포인트 호출 (/api/news)
            // $fetch 사용 (Nuxt 3 권장). params 옵션으로 쿼리 전달
            const articles = await $fetch<Article[]>('/api/news', { params });

            // 필요하다면 스토어 상태 업데이트
            articleList.value = articles;
            return articles; // 가져온 데이터 반환 (useAsyncData 등에서 사용)

        } catch (error) {
            console.log(error);
            return [];
        }
    };

    return {searchValue, articleList, changeSearchValue, getNews};
});