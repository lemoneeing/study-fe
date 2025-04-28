<template>
    <div>
        <button type="button" @click="changeMsg" ref="btn">Change Child Msg</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Emit Msg From Child'
        }
    },
    methods: {
        changeMsg(){
            this.msg = 'New Child Msg';
            console.log(this.msg);
        }
    },

    mounted() {
        this.$emit('send-message', this.msg); // $emit: 자식 컴포넌트에서 부모로 이벤트 발생 + 데이터 전달
    }
}
</script>

<style lang="scss" scoped>

</style>