<script setup lang="ts">
</script>

<template>
    <div class="card">
        <div class="card_image-box">
            <img src="" alt="" />
        </div>
        <div class="card_info-box">
            <div class="card_info-box_header">
                <div class="broadcast">
                    <img src="" alt="" class="broadcast_logo" />
                    <span class="broadcast_complany">KBS/SBS/MBC</span>
                </div> 
                <span class="title">뉴스제목</span>
            </div>
            <div class="card_info-box_body">
                <span class="contents">
                    뉴스 기사내용 뉴스 기사내용 뉴스 기사내용뉴스 기사내용 뉴스 기사내용 뉴스 기사내용뉴스 기사내용뉴스 기사내용뉴스 기사내용뉴스 기사내용뉴스 기사내용뉴스 기사내용뉴스 기사내용
                </span>
            </div>
        </div>
        <div class="card_profile-box">
            <div class="card_profile-box_image-box">
                <img src="@/assets/icons/user_icon.svg" alt="" class="image" />
            </div>
            <div class="card_profile-box_detail">
                <span class="name">Name</span>
                <span class="date">2025.04.22</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/color";
@use "../../assets/scss/mixin";

.card{
    @include mixin.flex-box(flex-start, center);
    flex-direction: column;

    width: calc(360px - 48px);
    height: 400px;

    padding: 24px;
    gap: 24px;

    background-color: color.$color-white-000;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    border: 0.5px solid color.$color-gray-000;
    border-radius: 16px;

    cursor: pointer;

    &_image-box{
        width: 100%;
        height: 192px;

        background-color: beige;
        border-radius: 12px;
    }

    &_info-box{
        @include mixin.flex-center;
        flex-direction: column;
        flex: 1;
        
        width:100%;
        gap: 12px;

        &_header{
            @include mixin.flex-box(center, flex-start);
            flex-direction: column;

            width: 100%;

            gap: 8px;

            &_logo{
                width: 20px;
                height: 20px;

                border-radius: 50%;
                background-color: white;
            }

            &_company{
                @include mixin.flex-center;
                font-size: 12px;
                color: color.$color-black-700;
            }

            .broadcast {
                @include mixin.flex-box(center, flex-start);
                width: 100%;

                gap: 8px;
            }

            .title {
                @include mixin.flex-box(center, flex-start);
                width: 100%;
                height: 48px;

                color: color.$color-black-700;
            }
        }
        
        &_body {
            .contents {
                width: 100%;
                height: 100%;

                font-size: 14px;
                color: color.$color-gray-350;
            }
        }
    }
    &_profile-box {
        @include mixin.flex-box(center, flex-start);
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
        &__detail {
            @include mixin.flex-box(flex-start, center);
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