<template>
    <div class="plus">
        <div>
            <h3>더하기 Composition API</h3>
        </div>
        <div>
            <input type="text" v-model="state.num1" /> +
            <input type="text" v-model="state.num2" /> =
            <span>{{ state.result }}</span>
        </div>
    </div>
    <div class="multiply">
        <div>
            <h3>곱하기 Composition API(외부 function 사용)</h3>
        </div>
        <div>
            <input type="text" v-model="mp.n1" /> *
            <input type="text" v-model="mp.n2" /> =
            <span>{{ mp.res }}</span> <!--Vue 템플릿의 이중 중괄호 보간법 ({{ }})은 자동으로 ref 객체의 .value 속성에 접근하여 내부 값을 표시-->
        </div>
    </div>
</template>

<script>
import {reactive, computed, toRefs} from 'vue';
import { multiplyCalculator } from '@/common';

export default {
    name: 'Calculator',
    setup () {
        let state = reactive({
            num1: 0, 
            num2: 0, 
            result: computed(()=>parseInt(state.num1) + parseInt(state.num2))
        });
        let mp = multiplyCalculator();
        /*
        multiplyCalculator 에서는 반응형객체(reactive) 를 ref 객체로 변환(=toRefs로 감싸기)하여 반환하면 mp 의 구조는 다음과 같다.
        mp = {
            n1: RefImpl { value: 1, ... }, // n1은 숫자 1이 아니라 Ref 객체 -> 화면에서 [object Object] 로 표시되는 이유
            n2: RefImpl { value: 1, ... }, // n2도 숫자 1이 아니라 Ref 객체
            res: ComputedRefImpl { value: 1, ... } // res는 computed ref 객체
        }
        */
        return { 
            state ,
            mp
            // ...toRefs(mp) // 받는 쪽에서 toRefs 로 감싸려면 template 에서 mp 내부 변수들을 직접 사용해야 함. mp.n1(x) n1(O) <- 이게 더 일반적인 방법
            /*
            컴포넌트 setup 함수에서 toRefs 를 사용하는 것이
            Composable 함수(=외부에 선언된 함수) 의 역할을 순수하게 '반응형 상태 로직 제공'에 집중시키고, 
            컴포넌트가 해당 상태를 어떻게 사용할지(어떻게 ref로 분해하여 템플릿에 노출할지) 결정하도록 하는 더 일반적인 패턴임.
            */
        }
    }
}
</script>

<style lang="scss" scoped>
.plus{
    margin-bottom: 20px;
}
</style>