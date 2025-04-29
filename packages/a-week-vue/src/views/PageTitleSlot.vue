<template> 
    <h2>
        <slot name="header"></slot>
    </h2>
    <slot name="input_text"></slot>
    <button type="button">
        <slot></slot>
    </button>
    <div>
        <slot></slot> <!--여기도 slot명 미지정으로 defualt 이므로 위 button 과 동일한 데이터를 사용할 수 밖에 없음.-->
    </div>
</template>

<style>
button{
    margin: 10px;
}
</style>