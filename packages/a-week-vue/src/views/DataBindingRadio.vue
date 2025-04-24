<template>
    <div>
        <label><input type="radio" :value="radioValue1" v-model="picked"> 인천 </label>
        <label><input type="radio" :value="radioValue2" v-model="picked"> 서울 </label>
        <label><input type="radio" :value="radioValue3" v-model="picked"> 부산 </label>
        <label><input type="radio" :value="radioValue4" v-model="picked"> 제주 </label>
        <br />
        <span>선택한 지역: {{ picked }}</span>
    </div>
</template>

<script>
export default {
    data () {
        return {
            picked: "",
            radioValue1: "인천",
            radioValue2: "서울",
            radioValue3: "부산",
            radioValue4: "제주",
        };
    }
}
</script>

<style lang="scss" scoped>

</style>