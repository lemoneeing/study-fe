import {defineStore} from "pinia";
import axios from "axios";
import type { Article } from "~/types/api";

export const useStore = defineStore("store", () => {
    //State
    const searchValue = ref<string>("korea");
    const articleList = ref<Article[]>([]);
    const API_KEY = ref<string>("");

    //Actions
    //Mutations => State 변경 목적
    const changeSearchValue = (payload: string) => {
        searchValue.value = payload;
    };

    //New API 호출
    const getNews = async () => {
        const config = useRuntimeConfig();
        API_KEY.value = config.newsApiKey;
        // API 키가 설정되었는지 확인 (중요)
        if (!API_KEY) {
            console.error('Error: NEWS_API_KEY is not configured properly in runtimeConfig.');
            // 적절한 에러 처리 또는 기본값 반환
            return [];
        }
        const API_URL=`https://newsapi.org/v2/everything?q=${searchValue.value}&from=2025-04-21&sortBy=popularity&apiKey=${API_KEY}`;
        
        try{
            articleList.value = await axios.get(API_URL).then((res)=>{
                return res.data.articles;
            });
            return articleList;
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    return {searchValue, articleList, changeSearchValue, getNews};
});