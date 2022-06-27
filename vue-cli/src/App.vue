<template>
  <div>
    <!-- <app-header v:bind:props속성이름="상위 컴포넌트 데이터 이름"></app-header> -->
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
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
      str: "Header",
    };
  },
  components: {
    "app-header": AppHeader,
  },
  methods: {
    renewStr: function () {
      this.str = "hi";
    },
  },
};
</script>

<style scoped></style>
