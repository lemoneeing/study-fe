<template>
    <div>
        <button type="button" @click="clickFunc" ref="btn">Click</button>
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: 'default'
        };
    },
    methods: {
        clickFunc(){
            console.log("Click event by Parent");
        },

        directCallByParent(){
            console.log("Call directly by Parent");
        }
    }
}
</script>

<style lang="scss" scoped>

</style>