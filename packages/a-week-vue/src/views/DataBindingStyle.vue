<template>
    <div :style="styleObject">Inline Style Binding</div>
    <!--배열로 바인딩-->
    <div :style="[baseStyle, addStyle]">Inlne Style Bindine by Array</div>
</template>

<script>
export default {
    data () {
        return {
            styleObject: {
                color: 'red',
                fontSize: '13px'
            },
            baseStyle: "background-color: green;width100%, height:200px;",
            addStyle: "color:yellow;font-weight:bold;"
        };
    }
}
</script>

<style lang="scss" scoped>
</style>