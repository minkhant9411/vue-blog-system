<template>
  <!-- {{ blogs }} -->
  <div v-for="blog in blogs" :key="blog.id">
    <!-- {{ blog }} -->
    <SinglePost :blog="blog"></SinglePost>
  </div>
</template>

<script>
import SinglePost from "./SinglePost";
export default {
  components: {
    SinglePost,
  },
  props: ["blogs"],
};

SinglePost;
</script>

<style>
</style>