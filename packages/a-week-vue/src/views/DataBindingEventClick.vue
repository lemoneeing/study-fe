<template>
    <div>
        <button type="botton" @click="increaseCounter">Add 1</button>
        <p>The counter is: {{ counter }}</p>
        <button type="botton" @click="setCounter(0)">Set 0</button>
        <p>The counter is: {{ counter }}</p>
        <button type="botton" @click="one(), two()">Alert One, Two</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            counter: 0
        };
    },
    methods: {
        increaseCounter() {
            this.counter = this.counter + 1;
        },

        setCounter(counter){
            this.counter = counter;
        },

        one(){
            alert('One');
        },
        two(){
            alert('Two');
        }
    }
}
</script>

<style lang="scss" scoped>
</style>