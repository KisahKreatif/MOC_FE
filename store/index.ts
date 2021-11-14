import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createWrapper, Context } from 'next-redux-wrapper'
import productReducer from './reducers/product'
import newsReducers from './reducers/news'
import bannerReducer from './reducers/banner'
import courseReducer from './reducers/course'
import cartReducer from './reducers/cart'
import transactionReducer from './reducers/transaction'
import userReducer from './reducers/user'
import paketReducer from './reducers/paket'

const reducers = combineReducers({
    products: productReducer,
    news: newsReducers,
    banners: bannerReducer,
    courses: courseReducer,
    carts: cartReducer,
    transaction: transactionReducer,
    user: userReducer,
    paket: paketReducer
})

const store = (context: Context) => createStore(reducers, applyMiddleware(thunk))

const wrapper = createWrapper(store, { debug: true })

export default wrapper
