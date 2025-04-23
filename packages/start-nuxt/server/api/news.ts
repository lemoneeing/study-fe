// server/api/news.ts
import { defineEventHandler, getQuery } from 'h3'; // Nuxt3에서 사용
import { useRuntimeConfig } from '#imports'; // 또는 '#app'
import type { Article } from "~/types/api";

export default defineEventHandler(async (event) => {
  // 1. Runtime Config에서 API 키 가져오기 (서버이므로 private 접근 가능)
    const config = useRuntimeConfig(event); // 이벤트 객체 전달 권장
    const apiKey = config.newsApiKey;

    if (!apiKey) {
        console.error('Server Error: NEWS_API_KEY is not configured.');
        // 에러 응답 반환
        throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error: API key configuration missing.',
        });
    }

    // 2. 클라이언트 요청에서 검색어(query) 가져오기 (예: /api/news?q=korea)
    const query = getQuery(event);
    const searchQuery = query.q || 'korea'; // 기본값 설정

    // 3. 외부 News API URL 생성
    const apiUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&from=2025-04-21&sortBy=popularity&apiKey=${apiKey}`;

    try {
        // 4. $fetch를 사용하여 외부 API 호출 (Nuxt3 내장)
        const response = await $fetch<{ articles?: Article[] }>(apiUrl); // 타입 지정
        return response.articles || []; // articles 배열 반환 또는 빈 배열
    } catch (error: any) {
        console.error('Error fetching from News API:', error);
        // 외부 API 호출 에러 처리
        throw createError({
        statusCode: error.statusCode || 500,
        statusMessage: `Failed to fetch news: ${error.message}`,
        });
    }
});
