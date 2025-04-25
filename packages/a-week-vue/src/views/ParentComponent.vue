<template>
    <div>
        <ChildComponent ref="child_cmp"/>
        <button type="button" @click="changeChildData">Change Child's Data</button>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
export default{
    components: {ChildComponent},
    methods: {
        changeChildData(){
            this.$refs.child_cmp.msg = 'New Msg by Parent'
        }
    },
    mounted() {
        this.$refs.child_cmp.$refs.btn.click();
        this.$refs.child_cmp.directCallByParent();
    }
}
</script>

<style lang="scss" scoped>

</style>