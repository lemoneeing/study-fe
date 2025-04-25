<template>
    <p>
        <span>Val is '{{ val }}'.'</span><br />
        <span>The type of '{{ val }}':</span> <span class="type_result">{{ typeof(val) }}</span>
    </p>
</template>

<script>
export default {
    props: {
        val: {
            type: [Number, String, Boolean, Object], // 여러 타입을 허용할 때에는 배열 사용
            default: 0 // 옵션. 
            // 그 외 옵션들: 
            // required: true/false,
            // validator: function(value) { return ['success', 'warning', 'error'].indexOf(value) !== -1} // value 의 값이나 포맷을 지정할 수 있음.
        }
    }
}
</script>

<style lang="scss" scoped>
.type_result{
    font-size: 20px;
    color: red;
}
</style>