<template>
    <PageTitleSlot>
        <template v-slot:header>Slot 페이지 제목</template> <!--slot으로 전달할 데이터는 반드시 'template' 으로만 지정되어야 함.-->
        <template #input_text><input type="text" placeholder="입력 최대 10자" /></template> <!--'#slot명'은 'v-slot:slot명' 의 축약형 -->
        <template v-slot:default>Slot 버튼</template> <!--slot name 이 정의되지 않은 slot-->
        <!-- <tamplate #default>축약형Slot</tamplate> --> <!--default 는 2개 이상사용할 수 없음.-->
    </PageTitleSlot>
</template>

<script>
import PageTitleSlot from '@/views/PageTitleSlot.vue';
export default {
    components: {PageTitleSlot}
}
</script>