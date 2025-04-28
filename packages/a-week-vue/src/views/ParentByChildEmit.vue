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
        parentMsg(){
            return this.$refs.child_cmp.msg; // computed 를 이용한 자식 컴포넌트의 데이터와 동기화
        }
    },
    methods: {
        sendMsg(data){ // 자식 컴포넌트에서 $emit 으로 호출+data 까지 전달받음.
            console.log(data);
        },

        checkChildMsg(){
            alert(this.parentMsg);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>