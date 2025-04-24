<template>
    <div>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else="type=='C'">C</h1>
    </div>
</template>

<script>
export default {
    data () {
        return {
            type: 'C'
        };
    }
}
</script>

<style lang="scss" scoped>
</style>