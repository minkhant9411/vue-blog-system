import { ref } from 'vue';
import { db } from '../firebase/config';
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
let getBlogs = () => {
  let blogs = ref([]);
  let error = ref('');
  let q = query(collection(db, 'blogs'), orderBy('created_at', 'desc'));
  onSnapshot(q, (e) => {
    console.log('hit');
    blogs.value = e.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  });
  let load = () => {};
  // let load = async () => {
  //   let res = collection(db, 'blogs');
  //   let datas = await getDocs(res, orderBy('created_at', 'desc'));
  //   blogs.value = datas.docs.map((doc) => {
  //     return { id: doc.id, ...doc.data() };
  //   });
  // };
  return { blogs, error, load };
};
export default getBlogs;
