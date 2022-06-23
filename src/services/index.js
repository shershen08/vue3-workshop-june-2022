import axios from 'axios'

console.log(process.env)
const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL
    //error
    //headers
})

export default instance