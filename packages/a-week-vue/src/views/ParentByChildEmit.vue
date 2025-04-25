<template>
    <div>
        <ChildEmit @send-message="sendMsg" ref="child_cmp"/> <!--send-message 는 커스텀 이벤트가 불린다.-->
        <button type="button" @click="checkChildMsg">Check Child</button>
    </div>
</template>

<script>
import ChildEmit from './ChildEmit.vue';
export default {
    components: {ChildEmit},
    computed: {
        msg(){
            return this.$refs.child_cmp.msg;
        }
    },
    methods: {
        sendMsg(data){
            console.log(data);
        },

        checkChildMsg(){
            alert(this.msg);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>