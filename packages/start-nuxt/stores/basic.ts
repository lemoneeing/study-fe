// import {defineStore} from "pinia";

// export const useStore = defineStore('storeId', () => {
//     // Setup Stores
//     // State
//     const count = ref<number>(10);
//     const name = ref<string>("lemoneeing");

//     // Getters
//     const doubleCount = computed(()=>{
//         return count.value * 2;
//     })

//     const doublePlusOne = computed(()=>{
//         return count.value * 3;
//     })

//     // Actions
//     function increment(){
//         count.value++;
//     }

//     function randomizeCounter(){
//         count.value = Math.round(100 * Math.random());
//     }

//     return {count, name, doubleCount, doublePlusOne, increment, randomizeCounter};

    // Option Stores
    // state:() => ({
    //     count: 10,
    //     name: "leomoneeing"
    // }),
    // getters:{ // store 값을 사용하여 미리 계산한 결과 값 반환. store 값 자체를 변경 X
    //     doubleCount: (state) => state.count * 2, // 화살표 함수에서는 this 키워드 사용 불가
    //     doublePlusOne(): number {
    //         return this.count * 3; // this 키워드를 사용하려면 funciton 함수만 사용 가능
    //     }
    // },
    // actions:{ // store 에 대한 로직 처리. store 값 자체 변경을 위한 것.
    //     increment(){
    //         this.count++;
    //     },
    // }
// });