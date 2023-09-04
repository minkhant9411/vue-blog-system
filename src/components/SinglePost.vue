<template>
  <div class="card mb-3">
    <div class="card-body">
      <h1>{{ blog.title }}</h1>
      <div v-if="readAll">
        {{ blog.body }}
        <small @click="readAll = !readAll">read less...</small>
      </div>
      <div v-else>
        <p>
          {{ cutBlogBody }}
          <small @click="readAll = !readAll">read more...</small>
        </p>
      </div>
      <div v-if="blog.tags">
        <div v-for="tag in blog.tags" :key="tag" class="d-inline m-1">
          <span class="badge rounded-pill text-bg-primary">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: ["blog"],
  setup(props) {
    let readAll = ref(false);
    let cutBlogBody = computed(() => {
      return props.blog.body.substring(0, 100);
    });
    return { cutBlogBody, readAll };
  },
};
</script>

<style scope>
.card {
  max-width: 650px;
  margin: 15px auto;
}
small {
  color: #aaa;
  cursor: pointer;
}
small:hover {
  color: #555;
}
</style>