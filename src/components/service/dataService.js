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
export const addToWhishList = (id) =>{
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`,
    id, bookconfig)
    return response
}
export const addNoOfCart = (id) =>{
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id.cartItem_id}`,
    id, bookconfig)
    return response
}
export const getCartbook = () =>{
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items', bookconfig)
    return response
}

export const removeFromCartList = (obj) =>{
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${obj.cartItem_id}`,
    bookconfig)
    return response
}
export const getUserAddress = (obj) =>{
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`, obj, bookconfig)
    return response
}

export const getWishList = () =>{
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items', bookconfig)
    return response
}
export const addOrder = (order) =>{
    let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order', order, bookconfig)
    return response
}
export const removewhishList = (obj) =>{
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${obj.product_id}`,
    bookconfig)
    return response
}
