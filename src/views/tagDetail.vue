<template>
  <div v-if="filterBlogs.length" class="row mx-auto container">
    <div class="col-md-8">
      <PostList :blogs="filterBlogs"></PostList>
    </div>
    <div class="col-md-4 order-first order-md-last">
      <TagCloud :blogs="blogs"></TagCloud>
    </div>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import TagCloud from "../components/tagCloud";
import Spinner from "../components/Spinner";
import PostList from "../components/PostList";
import getBlogs from "@/composiables/getBlogs";
import { computed } from "vue";
export default {
  components: {
    TagCloud,
    Spinner,
    PostList,
  },
  props: ["tag"],
  setup(props) {
    let { blogs, error, load } = getBlogs();

    load();
    let filterBlogs = computed(() => {
      return blogs.value.filter((blog) => {
        return blog.tags.includes(props.tag);
      });
    });
    return { blogs, error, filterBlogs };
  },
};
</script>

<style>
</style>