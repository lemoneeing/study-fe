<script setup lang="ts">
import type { Nav } from '../types/nav.ts';
const navItems = ref<Nav[]>([
    {
        idx: 0,
        label: "일반시사",
        value: "General",
    },
    {
        idx: 1,
        label: "비즈니스",
        value: "Business",
    },
    {
        idx: 2,
        label: "엔터테인먼트트",
        value: "Entertainment",
    },
    {
        idx: 3,
        label: "건강",
        value: "Health",
    },
    {
        idx: 4,
        label: "과학",
        value: "Science",
    },
    {
        idx: 5,
        label: "스포츠",
        value: "Sport",
    },
    {
        idx: 6,
        label: "테크놀로지",
        value: "Technology",
    }
])
</script>

<template>
    <nav class="nav">
        <ul class="nav_list">
            <li v-for="item in navItems" :key="item.idx" class="nav_list_item">{{item.label}}</li>
        </ul>
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
            color: color.$color-black-700;

            cursor: pointer;
        }
    }

}
</style>