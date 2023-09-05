<template>
  <h1>Search by tags</h1>
  <div class="input-group">
    <input
      type="text"
      placeholder="search..."
      class="form-control mb-2 input"
      v-model="search"
      :search="$emit('search', search)"
    />
    <div class="input-group-append">
      <input type="button" class="btn btn-primary" value="search" />
    </div>
  </div>
  <router-link
    class="badge rounded-pill text-bg-primary border-0"
    :to="{ name: 'home' }"
  >
    All
  </router-link>
  <div v-for="tag in uniqueTags" :key="tag" class="d-inline m-1">
    <router-link
      class="badge rounded-pill text-bg-primary border-0"
      :to="{ name: 'Tag', params: { tag } }"
    >
      {{ tag }}
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["blogs"],
  emits: ["search"],
  setup(props) {
    let tags = ref([]);
    let search = ref("");
    props.blogs.forEach((blog) => {
      blog.tags.forEach((tag) => {
        tags.value.push(tag);
      });
    });

    let uniqueTags = tags.value.filter((value, index, array) => {
      return array.indexOf(value) === index;
    });
    return { uniqueTags, search };
  },
};
</script>

<style>
</style>