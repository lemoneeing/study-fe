<template>
    <h3>Child Page Title</h3>
    <h2>{{title}}</h2>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Default Page Title"
        }
    }
}
</script>

<style lang="scss" scoped>

</style>