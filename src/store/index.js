import { createStore, applyMiddleware } from "redux"
// 会在dispatch改变仓库状态的时候打印出旧的仓库状态、
// 当前触发的action以及新的仓库状态
import reduxLogger from 'redux-logger' 
// redux的dispatch默认只能传一个对象参数：
// dispatch({ type: 'CHANGE_COLOR', themeColor: color })
// redux-thunk的作用就是使dispatch支持传函数参数：
// dispatch(changeColorAsyn(color))
import reduxThunk from 'redux-thunk'

import reducers from "./reducers"

// 根据环境使用中间件
const mid = [reduxThunk]
const env = process.env.NODE_ENV
if (env === 'development') {
    mid.push(reduxLogger)
}

const store = createStore(reducers, applyMiddleware(...mid))

export default store