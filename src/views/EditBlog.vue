<template>
  <div class="container">
    <div class="create card">
      <div class="card-header">
        <h1>Edit</h1>
      </div>
      <div class="card-body">
        <div v-if="!title">
          <Spinner></Spinner>
        </div>
        <div v-else-if="postData">
          <form class="create-form text-uppercase" @submit.prevent="edit">
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
                @click="removeTag(tag)"
                >{{ tag }}</span
              >
            </div>
            <button class="btn btn-primary float-end">Update</button>
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
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    let blog = ref([]);
    // let error = ref("");
    let title = ref("");
    let body = ref("");
    let tags = ref([]);
    let tag = ref("");
    let router = useRouter();

    let postData = ref(true);
    let load = async () => {
      let res = doc(db, "blogs", props.id);
      let data = await getDoc(res);
      // console.log(data.data());
      blog.value = { id: data.id, ...data.data() };
      title.value = blog.value.title;
      body.value = blog.value.body;
      tags.value = blog.value.tags;
    };
    load();

    let addtag = () => {
      if (!tags.value.includes(tag.value.trim().toLowerCase()) && tag.value) {
        tags.value.push(tag.value.trim());
      }
      tag.value = "";
    };
    let removeTag = (e) => {
      tags.value = tags.value.filter((tag) => {
        return tag != e;
      });
    };
    let edit = async () => {
      let pass = prompt("are you sure? enter password");
      if (pass === "mink1242022") {
        let newPost = {
          title: title.value,
          body: body.value,
          tags: tags.value,
        };
        postData.value = false;
        let res = doc(db, "blogs", props.id);
        await updateDoc(res, newPost);
        postData.value = true;
        router.push("/");
      } else {
        alert("wrong password!");
        router.push("/");
      }
    };
    return { title, body, tag, tags, edit, addtag, postData, blog, removeTag };
  },
};
</script>
  
  <style>
.create {
  max-width: 600px;
  margin: 30px auto;
}
</style>
  