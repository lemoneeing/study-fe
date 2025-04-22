<script setup lang="ts">
import CardUI from "./components/Card.vue"
</script>

<template>
    <div class="page">
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
    </div>
</template>

<style lang="scss" scoped>
.page{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;

    width: calc(100% - 96px);

    padding: 48px;
    gap: 24px;
}
</style>