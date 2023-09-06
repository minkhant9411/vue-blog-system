<template>
  <div class="row mx-auto container">
    <div class="col-md-8">
      <PostList :blogs="search"></PostList>
      <h3
        class="text-center text-danger mt-3 text-uppercase"
        v-if="!search.length && blogs.length"
      >
        not found!
      </h3>
    </div>
    <div v-if="blogs.length" class="col-md-4 order-first order-md-last">
      <TagCloud :blogs="blogs" @search="filterBlog"></TagCloud>
      <!-- <button @click="filterBlog">hit</button> -->
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import TagCloud from "../components/tagCloud";
import PostList from "../components/PostList";
import Spinner from "../components/Spinner";
import SinglePost from "../components/SinglePost";
// @ is an alias to /src
import getBlogs from "../composiables/getBlogs";
import { ref } from "vue";
export default {
  name: "HomeView",
  components: {
    TagCloud,
    PostList,
    Spinner,
    SinglePost,
  },
  setup(props) {
    let search = ref([]);
    let { blogs, error, load } = getBlogs();
    load();
    function filterBlog(e) {
      if (e.length) {
        search.value = blogs.value.filter((blog) => {
          return blog.title.includes(e.toLowerCase());
        });
      } else {
        search.value = blogs.value;
      }
    }
    return { blogs, error, filterBlog, search };
  },
};
</script>
<style scope>
</style>