import { ref } from 'vue'

let getBlog = (id) => {
    let blog = ref([])
    let error = ref('')
    let load = async () => {
        try {
            let response = await fetch('http://192.168.1.15:3000/blogs/'+id)

            if (response.status === "404") { throw new Error("wrong url") }
            let datas = await response.json()
            blog.value = datas;
            

        } catch (err) {
            error.value=err.message;
        }
        // console.log(blog.value.title);
    }
    return{blog,error,load}
}
export default getBlog;