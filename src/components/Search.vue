<template>
  <form class="input-group w-25 my-2 my-lg-0">
    <input
      class="form-control mr-sm-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
      Search
    </button>
  </form>
</template>

<script>
export default {
  props: ["blogs"],
};
</script>

<style>
</style>