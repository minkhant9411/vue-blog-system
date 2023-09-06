import { ref } from 'vue';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
let getBlogs = () => {
  let blogs = ref([]);
  let error = ref('');

  let load = async () => {
    let res = collection(db, 'blogs');
    let datas = await getDocs(res);
    blogs.value = datas.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  };
  return { blogs, error, load };
};
export default getBlogs;
