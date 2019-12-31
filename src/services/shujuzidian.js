import request from '../utils/request';
export async function BaseList(params) {
  return request('/power/dictType/getList',{
    body:params,
    method:'POST',
  });
}