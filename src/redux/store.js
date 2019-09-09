/*
* 创建store
* 集中管理状态数据.方法的对象
*
* */

//     创建store     异步中间件
import {createStore,applyMiddleware} from "redux";

import reducers from './reducers';
//引入异步操作库
import thunk from 'redux-thunk';
//chrome 插件
import {composeWithDevTools} from  'redux-devtools-extension';

let store;
//如果 是开发环境 加载chrome插件 不是则不加载
if (process.env.BABEL_ENV === 'development') {
    store=createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
}else {
    store=createStore(reducers,applyMiddleware(thunk));
}
export default store;

