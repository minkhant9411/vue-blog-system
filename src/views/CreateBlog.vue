<template>
  <div class="container">
    <div class="create card">
      <div class="card-body">
        <h1>Create</h1>
        <form class="create-form text-uppercase" @submit.prevent="clg">
          <lable for="title">title</lable>
          <input
            type="text"
            id="title"
            class="form-control mb-2"
            v-model="title"
          />
          <lable for="body">body</lable>
          <textarea
            id="body"
            class="form-control mb-2"
            v-model="body"
          ></textarea>
          <lable for="tags">tags</lable>
          <input
            id="tags"
            type="text"
            class="form-control mb-2"
            v-model="tag"
          />
          <button class="btn btn-primary float-end" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props) {
    let title = ref("");
    let body = ref("");
    let tag = ref("");
    let clg = () => {
      console.log(title.value, body.value, tag.value);
    };
    return { title, body, tag, clg };
  },
};
</script>

<style>
.create {
  max-width: 600px;
  margin: 30px auto;
}
</style>