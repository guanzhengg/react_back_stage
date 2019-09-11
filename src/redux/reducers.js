/*
* 根据 provState  和action
* 生成newState
* */
import {combineReducers} from "redux";
import {USER_MSG} from './action-types'
import {setItem,getItem} from '../utils/storage';

//初始化数据,,
const initUser = {
    user: getItem('user') || {},
    token:  getItem('token') || ''
};

function user(provState=initUser,action) {
    switch (action.type) {
        case USER_MSG:
            //吧数据存入 localstorage
            setItem('user',action.data.user);
            setItem('token',action.data.token);
            return action.data;
        default : return provState
    }
}

export default combineReducers({
    user
})
