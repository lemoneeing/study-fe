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
    data () {
        return {
            productList: [
                {
                    "name": "키보드",
                    "price": 25000,
                    "category": "PC 주변 기기",
                    "delivery_price": 5000
                },
                {
                    "name": "로보트",
                    "price": 50000,
                    "category": "장난감",
                    "delivery_price": 5000
                },
                {
                    "name": "도마",
                    "price": 30000,
                    "category": "주방용품",
                    "delivery_price": 5000
                },
                {
                    "name": "로션",
                    "price": 13000,
                    "category": "미용",
                    "delivery_price": 3000
                },
                {
                    "name": "운동화",
                    "price": 70000,
                    "category": "패션",
                    "delivery_price": 3000
                },
            ]
        };
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