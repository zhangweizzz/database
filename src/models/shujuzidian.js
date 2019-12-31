import {
    BaseList
} from '@/services/shujuzidian';

import {message} from 'antd';
import { routerRedux } from 'dva/router';

export default {
    namespace:'shujuzidian',
    state:{
        comLists:[]
    },
    effects:{
      *basicList({payload},{call,put}){
        console.log(payload);
        const response=yield call(BaseList,payload);
        console.log(response);
        if(response&&response.success){
          resolve({data:response.map})
          // resolve(response.map)
          }
          yield put({
            type:'comList',  
              payload:payload
          })
        }
          },

          reducers:{
            comList(state,{payload}){
                return{
                    ...state,
                    comLists:payload
                }
            }
          }
    
}
