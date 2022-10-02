import { SET_BOOK_LIST } from "./constant"

export const bookData = (data = [], action) => {
    switch (action.type) {
        case SET_BOOK_LIST:
            console.log("Action Called", action.data.result.length)
            return [...action.data.result]

        default:
            return [...data]
    }
}