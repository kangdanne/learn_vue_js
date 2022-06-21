<template>
  <div>
    <app-header></app-header>
    <!--template의 html 내부 구조는 최상위 레벨에 하나의 태그 존재해야함-->
    {{ str }}
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
// import시 .vue 까지 작성해야 파일을 깨지지않고 사용 할 수 있다.

/* 아래와 같은 내용.

var AppHeader = {
  template: "<hㅞㅡeader><h1>Header</h1></header>",
};
*/

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
  components: {
    "app-header": AppHeader,
  },
};
</script>

<style scoped></style>
