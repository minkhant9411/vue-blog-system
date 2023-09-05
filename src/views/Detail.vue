<template>
  <div>
    <div class="card mb-3">
      <div v-if="!blog.title && !blog.body">
        <Spinner></Spinner>
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-between" v-if="blog.title">
          <h1>{{ blog.title }}</h1>
          <router-link
            :to="{ name: 'edit-blog', params: { id: blog.id } }"
            class="col-2"
            >edit blog</router-link
          >
        </div>
        {{ blog.body }}
        <div v-if="blog.tags">
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
      <button class="btn btn-danger" @click="deleteBlog">delete blog</button>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import getBlog from "@/composiables/getBlog";
import { useRouter } from "vue-router";
export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    let router = useRouter();
    let { blog, error, load } = getBlog(props.id);
    load();
    let deleteBlog = async () => {
      if (confirm("are you sure?")) {
        await fetch("http://192.168.1.15:3000/blogs/" + props.id, {
          method: "DELETE",
        });
        router.push("/");
      }
    };
    return { blog, error, deleteBlog };
  },
};
</script>

<style>
</style>