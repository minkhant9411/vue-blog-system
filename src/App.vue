<template>
  <NavBar></NavBar>
  <router-view />
  <footer class="p-3 bg-light text-center">@echo</footer>
</template>
<script>
import Spinner from "./components/Spinner";
import NavBar from "./components/NavBar";
export default {
  components: {
    Spinner,
    NavBar,
  },
  setup() {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
