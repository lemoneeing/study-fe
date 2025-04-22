<script setup lang="ts">
import type {Article} from "~/types/api.ts";
import dayjs from "dayjs";

interface Props {
    data: Article;
}

const props = defineProps<Props>();
const { data } = toRefs(props);

const url = data.value.url;
const website = computed(()=>{
    return url.split("https://").pop()?.split("/")[0];
})

const logo = computed(() => {
    return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${website.value}&size=16`;
})
</script>

<template>
    <div class="card">
        <div class="card_image-box">
            <img v-if="data.urlToImage" :src="data.urlToImage" alt="" class="card_image-box_image" />
            <div v-else class="card_image-box_noData">등록된 이미지가 없습니다.</div>
        </div>
        <div class="card_info-box">
            <div class="card_info-box_header">
                <div class="broadcast">
                    <img :src="logo" alt="" class="broadcast_logo" />
                    <span class="broadcast_complany">{{data.source.name}}</span>
                </div> 
                <span class="title">{{data.title}}</span>
            </div>
            <div class="card_info-box_body">
                <span class="contents">
                    <span v-html="data.content"></span>
                </span>
            </div>
        </div>
        <div class="card_profile-box">
            <div class="card_profile-box_image-box">
                <img src="@/assets/icons/user_icon.svg" alt="" class="image" />
            </div>
            <div class="card_profile-box_detail">
                <span class="name">{{data.author}}</span>
                <span class="date">{{dayjs(data.publishedAt).format("YYYY-MM-DD HH:mm:ss")}}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" coped>
@use "../../assets/scss/color";
@use "../../assets/scss/mixin";
.card {
    @include mixin.flexbox(flex-start, flex-start);
    flex-direction: column;

    width: calc(360px - 48px);
    height: 440px;

    padding: 24px !important;
    gap: 20px;

    // background-color: $color-black-700; // 다크모드
    background-color: color.$color-white-000;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    border: 0.5px solid color.$color-gray-000;
    border-radius: 16px;

    cursor: pointer;

    &_image-box {
        width: 100%;
        min-height: 192px;

        border-radius: 12px;

        &_image {
            width: 100%;
            height: 100%;

            border-radius: 12px;
        }
        &_noData {
            @include mixin.flex-center;

            width: 100%;
            height: 100%;

            border: 0.5px solid color.$color-gray-300;
            border-radius: 12px;
            color: color.$color-gray-350;
        }
    }
    &_info-box {
        @include mixin.flex-center;
        flex-direction: column;

        width: 100%;

        &_header {
            @include mixin.flexbox(center, flex-start);
            flex-direction: column;

            width: 100%;
            height: 88px;

            gap: 8px;

            .broadcast {
                @include mixin.flexbox(center, flex-start);
                width: 100%;

                gap: 8px;

                &_logo {
                    width: 20px;
                    height: 20px;

                    border-radius: 50%;
                    background-color: white;
                }
                &_company {
                    @include mixin.flex-center;
                    font-size: 12px;
                    color: color.$color-black-700;
                }
            }
            .title {
                @include mixin.flexbox(center, flex-start);
                width: 100%;
                height: 48px;

                color: color.$color-black-700;

                overflow: hidden;
                white-space: normal;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: keep-all; // 문단으로 끊어져서 줄바꿈 됨
            }
        }
        &_body {
            width: 100%;
            height: 84px;

            .contents {
                width: 100%;
                height: 100%;

                font-size: 14px;
                color: color.$color-gray-350;

                overflow: hidden;
                white-space: normal;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: keep-all; // 문단으로 끊어져서 줄바꿈 됨
            }
        }
    }
    &_profile-box {
        @include mixin.flexbox(center, flex-start);
        width: 100%;
        height: 40px;

        gap: 8px;

        &_image-box {
            @include mixin.flex-center;

            .image {
                width: 32px;
                height: 32px;

                border-radius: 50%;
            }
        }
        &_detail {
            @include mixin.flexbox(flex-start, center);
            flex-direction: column;

            .name {
                font-size: 12px;
                color: color.$color-black-700;
            }
            .date {
                font-size: 12px;
                color: color.$color-gray-350;
            }
        }
    }
}
</style>