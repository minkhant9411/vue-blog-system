<template>
  <div class="container">
    <div class="create card">
      <div class="card-header">
        <h1>Create</h1>
      </div>
      <div class="card-body">
        <form class="create-form text-uppercase" @submit.prevent="create">
          <label for="title">title</label>
          <input
            type="text"
            id="title"
            class="form-control mb-2"
            v-model="title"
            required
          />
          <label for="body">body</label>
          <textarea
            id="body"
            class="form-control mb-2"
            v-model="body"
            required
          ></textarea>
          <label for="tags">tags</label>
          <small class="text-secondary text-lowercase">
            (add tag by press enter)
          </small>

          <div class="input-group mb-3">
            <input
              id="tags"
              type="text"
              class="form-control mb-2"
              v-model="tag"
              @keydown.enter.prevent="addtag"
            />
            <div class="input-group-append">
              <span
                class="input-group-text btn btn-primary"
                id="basic-addon2"
                @click="addtag"
                >add</span
              >
            </div>
          </div>
          <div v-for="tag in tags" :key="tag" class="d-inline">
            <span class="badge rounded-pill text-bg-primary">{{ tag }}</span>
          </div>
          <button class="btn btn-primary float-end">Create</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup(props) {
    let title = ref("");
    let body = ref("");
    let tags = ref([]);
    let tag = ref("");
    let router = useRouter();
    let addtag = () => {
      if (tag.value) {
        tags.value.push(tag.value);
        tag.value = "";
      }
    };
    let create = async () => {
      await fetch(" http://192.168.1.15:3000/blogs", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: title.value,
          body: body.value,
          tags: tags.value,
        }),
      });
      router.push("/");
    };
    return { title, body, tag, tags, create, addtag };
  },
};
</script>

<style>
.create {
  max-width: 600px;
  margin: 30px auto;
}
</style>
