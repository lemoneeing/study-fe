import {reactive, computed, toRefs} from 'vue';

const multiplyCalculator = () => {
    
    let state = reactive({
        n1: 1,
        n2: 1,
        res: computed(()=>parseInt(state.n1) * parseInt(state.n2))
    });

    // return toRefus(state)// toRefs는 반응형 객체(state)의 각 속성(n1, n2, res)을 개별적인 ref 객체로 변환한 새로운 객체를 반환
    return state; 
    /*
    컴포넌트 setup 함수에서 toRefs 를 사용하는 것이
    Composable 함수(=외부에 선언된 함수) 의 역할을 순수하게 '반응형 상태 로직 제공'에 집중시키고, 
    컴포넌트가 해당 상태를 어떻게 사용할지(어떻게 ref로 분해하여 템플릿에 노출할지) 결정하도록 하는 더 일반적인 패턴임.
    */
};

export {
    multiplyCalculator
};