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
    mothods: {
        changeMsg(){
            this.msg = 'New Child Msg';
            console.log(this.msg);
        }
    }
    // mounted() {
    //     this.$emit('send-message', this.msg);
    // }
}
</script>

<style lang="scss" scoped>

</style>