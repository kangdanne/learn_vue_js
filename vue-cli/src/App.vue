<template>
  <div>
    <!--template의 html 내부 구조는 최상위 레벨에 하나의 태그 존재해야함-->
    {{ str }}
  </div>
</template>

<script>
// new Vue({
//   data: {
//     str: "hi",
//   },
// });

export default {
  data: function () {
    return {
      str: "hi",
    };
  },
};
</script>

<style scoped></style>
