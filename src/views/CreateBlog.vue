<template>
  <div class="container">
    <div class="create card">
      <div class="card-header">
        <h1>Create</h1>
      </div>
      <div class="card-body">
        <div v-if="postData">
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
              <span
                class="badge rounded-pill text-bg-primary"
                @click="remove(tag)"
                >{{ tag }}</span
              >
            </div>
            <button class="btn btn-primary float-end">Create</button>
          </form>
        </div>
        <div v-else>
          <Spinner></Spinner>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  Timestamp,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebase/config";
export default {
  components: { Spinner },
  setup(props) {
    let title = ref("");
    let body = ref("");
    let tags = ref([]);
    let tag = ref("");
    let router = useRouter();
    let postData = ref(true);
    let addtag = () => {
      if (!tags.value.includes(tag.value.trim().toLowerCase()) && tag.value) {
        tags.value.push(tag.value.trim().toLowerCase());
      }
      tag.value = "";
    };
    let remove = (e) => {
      tags.value = tags.value.filter((tag) => {
        return tag != e;
      });
    };
    let create = async () => {
      let newPost = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        created_at: serverTimestamp(),
      };
      postData.value = false;
      let res = collection(db, "blogs");
      // console.log(res);
      // return;
      await addDoc(res, newPost);
      postData.value = true;
      router.push("/");
    };
    return { title, body, tag, tags, create, addtag, postData, remove };
  },
};
</script>

<style>
.create {
  max-width: 600px;
  margin: 30px auto;
}
.rounded-pill {
  cursor: pointer;
}
</style>
