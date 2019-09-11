/*
* 存放action对象 的工厂函数 模块
* */
import {USER_MSG} from './action-types'
//保存user信息

export const usermsg= (user)=>{
        return {type:USER_MSG,data:user}
    };