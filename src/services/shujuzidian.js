import request from '../utils/request';
export async function BaseList(params) {
  return request('/reac/power/dictItme/getList',{
    body:params,
    method:'POST',
  });
}