<template>
    <div>
        <PageTitle title="Page Title From Parents Component"/>
        <PageTitle :title="title"/>
    </div>
    <div>
        <h2>Props val="0"</h2>
        <DataVariousType val="0"/>
        <!--number/boolean 타입 값을 props 으로 넘길 땐 v-bind 를 사용해야 함.-->
        <h2>Props :val="0" with v-bind</h2>
        <DataVariousType :val="0"/> 
        <h2>Props val="false"</h2>
        <DataVariousType val="false"/>
        <h2>Props :val="false" with v-bind</h2>
        <DataVariousType :val="false"/>
        <h2>Props val="[0, 0, 0, 0]"</h2>
        <DataVariousType val="[0, 0, 0, 0]"/>
        <h2>Props :val="[0, 0, 0, 0]" with v-bind</h2>
        <DataVariousType :val="[0, 0, 0, 0]"/>
        <h2>Props val="{'one':1, 'two':2}"</h2>
        <DataVariousType val="{'one':1, 'two':2}"/>
        <h2>Props :val="{'one':1, 'two':2}" with v-bind</h2>
        <DataVariousType :val="{'one':1, 'two':2}"/>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
import DataVariousType from '@/components/DataVariousType.vue';
export default {
    components: {PageTitle, DataVariousType},
    data(){
        return { 
            title: "Dynamic Page Title from Parents Component"
        }
    }
}
</script>

<style lang="scss" scoped>

</style>