<template>
  <div v-if="blogs.length">
    <PostList :blogs="blogs"></PostList>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import Spinner from "../components/Spinner";
import SinglePost from "../components/SinglePost";
// @ is an alias to /src
import getBlogs from "../composiables/getBlogs";
export default {
  name: "HomeView",
  components: {
    PostList,
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
