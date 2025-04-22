<script setup lang="ts">
import type { Nav } from '../types/nav.ts';
const route = useRoute();
const navItems = ref<Nav[]>([
    {
        idx: 0,
        label: "일반시사",
        value: "General",
        path: "general",
        isClicked: false,
    },
    {
        idx: 1,
        label: "비즈니스",
        value: "Business",
        path: "business",
        isClicked: false,
    },
    {
        idx: 2,
        label: "엔터테인먼트",
        value: "Entertainment",
        path: "entertainment",
        isClicked: false,
    },
    {
        idx: 3,
        label: "건강",
        value: "Health",
        path: "health",
        isClicked: false,
    },
    {
        idx: 4,
        label: "과학",
        value: "Science",
        path: "science",
        isClicked: false,
    },
    {
        idx: 5,
        label: "스포츠",
        value: "Sport",
        path: "sport",
        isClicked: false,
    },
    {
        idx: 6,
        label: "테크놀로지",
        value: "Technology",
        path: "technology",
        isClicked: false,
    }
]);

// 변동된 페이지 라우터, 즉 URI 값을 감지해서 네비게이션 UI를 동적으로 변동되도록 하는 코드
watch( // watch: 특정 변수의 값을 감시하고 있다가 그 값이 변했을 때 로직을 실행
    () => route.params.id, //감시할 값
    () => { // 감시하던 값이 변했을 때 실행할 로직
        navItems.value.forEach((items: Nav) => {
            items.isClicked = false;

            if(route.params.id === items.path) items.isClicked = true;
        });
    }
);
</script>

<template>
    <nav class="nav">
        <div class="nav_list">
            <NuxtLink :to="item.path" v-for="item in navItems" :key="item.idx" class="nav_list_item" :class="{active: item.isClicked }">{{item.label}}</NuxtLink>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use "../assets/scss/color.scss";
@use "../assets/scss/mixin";

.nav{
    @include mixin.flex-center;

    width: 100%;

    margin-top: 88px;

    &_list{
        @include mixin.flex-center;
        list-style: none;

        width: 100%;

        gap: 24px;

        &_item{
            @include mixin.flex-center;

            padding: 6px 12px;

            background-color: color.$color-gray-200;
            border-radius: 8px;
            text-decoration: none;
            color: color.$color-black-700;

            cursor: pointer;

            &.active {
                background-color: #494949;
                color: color.$color-white-000;
            }
        }
    }

}
</style>