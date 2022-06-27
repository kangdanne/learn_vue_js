<!--
싱글파일 컴포넌트 
HTML, JS, CSS를 한 파일 안에서 관리하겠다.
-->
<!--
var appHeader = { 
  template: '<div>header</div>',
  methods: {
    addNum: function(){

    }
  }
}
위 와같은 내용을 아래와 같으 표현할수 있다.
-->

<template>
  <!--HTML-->
  <div>{header}</div>
</template>

<script>
// ES6의 modules에 관한 문법
export default {
  //Javscript - 인스턴스 옵션
  methods: {
    addNum: function () {},
  },
};
</script>

<style>
/* CSS */
</style>
