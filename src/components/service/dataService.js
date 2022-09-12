import axios from "axios";

const bookconfig = {
    headers: {'x-access-token': localStorage.getItem('token')}
}

export const getbook = () =>{
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book', bookconfig)
    return response
}
export const addToCart = (id) =>{
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`,
    id, bookconfig)
    return response
}
export const addNoOfCart = (id) =>{
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`,
    id, bookconfig)
    return response
}
export const addToWhishList = (id) =>{
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`,
    id, bookconfig)
    return response
}