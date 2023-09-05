<template>
  <PostList :blogs="filterBlogs"></PostList>
</template>

<script>
import PostList from "../components/PostList";
import getBlogs from "@/composiables/getBlogs";
import { computed } from "vue";
export default {
  components: { PostList },
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