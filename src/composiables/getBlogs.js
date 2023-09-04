import { ref } from 'vue'

let getBlogs = () => {
    let blogs = ref([])
    let error = ref('')


    let load = async () => {
        try {
            let response = await fetch('http://192.168.1.15:3000/blogs')

            if (response.status === "404") { throw new Error("wrong url") }
            let datas = await response.json()
            blogs.value = datas
            

        } catch (err) {
            error.value=err.message;
        }
        
    }
    return{blogs,error,load}
}
export default getBlogs;