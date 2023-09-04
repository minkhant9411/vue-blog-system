<template>
  <div v-if="blogs.length">
    <div v-for="blog in blogs" :key="blog.id">
      <SinglePost :blog="blog"></SinglePost>
    </div>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import SinglePost from "../components/SinglePost";
// @ is an alias to /src
import getBlogs from "../composiables/getBlogs";
export default {
  name: "HomeView",
  components: {
    Spinner,
    SinglePost,
  },
  setup(props) {
    let { blogs, error, load } = getBlogs();
    load();
    // console.log(blog, error, laod);
    return { blogs, error };
  },
};
</script>
<style>
</style>
