import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// var App = {
//   template: '<div>app</div>'
// }

new Vue({
  render: (h) => h(App),
  // components: {
  //   'app': App
  // }
}).$mount("#app");

/* 학습했던 기존 방법*/
/*
new Vue({
  el: "#app",
  // render - tamplet이라는 속성을 정의했을 때 render함수가 실행 됨
  render: (h) => h(App),
  // import된 App이라는 컴포넌트를 불러와 렌더해라
});
*/
