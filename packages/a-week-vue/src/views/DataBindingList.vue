<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, idx) in productList" :key=idx>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.category}}</td>
                    <td>{{item.delivery_price}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productList: []
        };
    },
    created(){
        this.getList();
    },
    methods: {
        async getList() {
            this.productList = await this.$api("https://6c566cd5-e74a-4b97-abe4-61cfff8d1489.mock.pstmn.io/list", "get");
        }
    }
}
</script>

<style lang="scss" scoped>

.table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
</style>