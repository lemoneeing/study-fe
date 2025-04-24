<template>
    <div><span>Double-Curly braces: </span>{{ htmlString }}</div>
    <br />
    <div><label>Raw Html: </label><span v-html="htmlString"></span></div>
</template>

<script>
export default {
    data () {
        

        return {
            htmlString: '<span style="color:red;">This is a red string.</span>'
        };
    }
}
</script>

<style lang="scss" scoped>

</style>