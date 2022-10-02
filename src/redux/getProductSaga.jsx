import { put, takeEvery} from 'redux-saga/effects'
import { BOOK_LIST,SET_BOOK_LIST} from './constant';

const bookconfig = {
    headers: {'x-access-token': localStorage.getItem('token')}
}
function* getProducts() {
    console.warn("saga is called")
    let data = yield fetch(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items`,bookconfig);
    data = yield data.json();
    console.log("action is called", data)
    yield put({type: SET_BOOK_LIST, data})
}

function* productSaga() {
    yield takeEvery(BOOK_LIST, getProducts)
}

export default productSaga;