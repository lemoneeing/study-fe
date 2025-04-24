<template>
    <div class="container" :class="{'active': isActive, 'text-red': hasError}">Class Binding</div>
    <!--배열로 클래스 바인딩. true/false 조건부 바인딩 불가. 무조건 배열한의 클래스가 전부 바인딩 됨.-->
    <div class="container" :class="[activeClass, errorClass]">Class Binding2</div>
</template>

<script>
export default {
    data () {
        return {
            isActive: true,
            hasError: false,

            activeClass: 'active',
            errorClass: 'text-red'
        };
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 200px;
}

.active {
    background-color: yellow;
    font-weight: bold;
}

.text-red {
    color: red;
}
</style>