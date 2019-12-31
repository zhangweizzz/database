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
          // const {resolve} = payload
            const response=yield call(BaseList,payload);
            if(response&&response.success){
              resolve({data:response.map})
              // resolve(response.map)
              }
              yield put({
                type:'comList',       
              })
            }
          },

          reducers:{
            comList(state,{payload}){
                return{
                    ...state,
                    comLists:payload,

                }
            }
          }
    
}
