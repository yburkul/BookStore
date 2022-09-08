import axios from "axios";

const bookconfig = {
    headers: {Authorization: localStorage.getItem('accessToken')}
}

export const getbook = () =>{
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book', bookconfig)
    return response
}