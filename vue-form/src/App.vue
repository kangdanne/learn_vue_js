<template>
  <form v-on:submit="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="usermane" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pasword: </label>
      <input id="password" type="password" v-model="password" />
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
export default {
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methode: {
    submitForm: function (event) {
      event.preventDefault(); //form의 이동, 새로고침을 막는 역할을 하게 됨.
      console.log(this.username, this.password);
    },
  },
};
</script>

<style scoped></style>
