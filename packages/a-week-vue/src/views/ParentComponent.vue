<template>
    <div>
        <ChildComponent ref="child_cmp"/> <!--ref: 부모 컴포넌트에서 자식 컴포넌트의 데이터에 직접 접근할 수 있게 해줌.-->
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