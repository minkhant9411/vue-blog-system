<template>
  <div class="card mb-3">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h1>{{ blog.title }}</h1>
        <router-link :to="{ name: 'blog', params: { id: blog.id } }"
          >view blog</router-link
        >
      </div>
      <div v-if="readAll">
        {{ blog.body }}
        <small v-if="blog.body.length > 100" @click="readAll = !readAll"
          >read less...</small
        >
      </div>
      <div v-else>
        <p>
          {{ cutBlogBody }}
          <small v-if="blog.body.length > 100" @click="readAll = !readAll"
            >read more...</small
          >
        </p>
      </div>
      <div v-for="tag in blog.tags" :key="tag" class="d-inline m-1">
        <router-link
          class="badge rounded-pill text-bg-primary border-0"
          :to="{ name: 'Tag', params: { tag } }"
        >
          {{ tag }}
        </router-link>
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
      // console.log(props.blog.body.length);
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