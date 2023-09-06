import { db } from '../firebase/config';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { ref } from 'vue';

let getBlog = (id) => {
  let blog = ref([]);
  let error = ref('');
  let load = async () => {
    let res = doc(db, 'blogs', id);
    let data = await getDoc(res);
    // console.log(data.data());
    blog.value = { id: data.id, ...data.data() };
  };
  return { blog, error, load };
};
export default getBlog;
