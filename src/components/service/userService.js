import axios from 'axios';

export const logIn = (loginObj) => {
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login", loginObj)
    return response    
}

export const register = (registerObj) => {
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration", registerObj)
    return response
}