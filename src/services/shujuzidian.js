import request from '../utils/request';
import { getAddress } from '@/pages/defaultConfig';
export async function BaseList(params) {
  return request(`${getAddress()}/power/dictType/getList`,{
    params:{data:JSON.stringify(params.data)},
    method:'POST',
  });
}
// export async function BaseList(params) {
//   return request('http://192.168.0.106:8081/power/dictType/getList',{
//     body:{data:JSON.parse(params.data)},
//     method:'POST',
//   });
// }

// "proxy": {
//   "/power": {
//     "target": "http://192.168.0.106:8081"
//   }
// }