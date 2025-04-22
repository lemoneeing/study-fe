import {defineStore} from "pinia";
import axios from "axios";
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
        const API_KEY="190727eebc064fad996cb098a492dfcf";
        

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