<template>
    <div>
        <label><input type="checkbox" v-model="checked" true-value="yes" false-value="no"> {{ checked }}</label>
    </div>
    <div>
        <label><input type="checkbox" value="서울" v-model="checked_city"> 서울 </label>
        <label><input type="checkbox" value="부산" v-model="checked_city"> 부산 </label>
        <label><input type="checkbox" value="제주" v-model="checked_city"> 제주 </label>
        <br />
        <span>선택한 지역: {{ checked_city }}</span>
    </div>
</template>

<script>
export default {
    data () {
        return {
            checked: "no",
            checked_city: []
        };
    }
}
</script>

<style lang="scss" scoped>

</style>