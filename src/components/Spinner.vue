<template>
  <div class="loading">
    <div class="loading-view"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loading {
  z-index: 99;
  padding: 50px;
  /* position: absolute; */
  /* width: 100vw;
  height: 100vh; */
  /* top: 0;
  left: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: aliceblue; */
  /* opacity: 50%; */
}
.loading-view {
  width: 50px;
  height: 50px;
  border: 2px solid transparent;
  border-top-color: crimson;
  border-radius: 50%;
  animation: spin infinite 1s;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>