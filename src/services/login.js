import request from '@/utils/request';
// export async function fakeAccountLogin(params) {
//   return request('http://huangzore.gz01.bdysite.com/sanguo_mall/php/login.php', {
//     method: 'GET',
//     data: params,
//   });
// }
export async function loginIn(params) {
  return request('/sanguo_mall/php/login.php',{
    body:params,
    method:'GET',
  });
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
export async function zidian(param) { 
  return request('http://192.168.3.111:8081/power/dictType/save');
 }
