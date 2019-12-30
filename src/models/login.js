import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { loginIn } from '@/services/login';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';
import { message } from 'antd/lib/index';

export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *loginInFetch({ payload }, { call, put }){
      const response = yield call(loginIn, payload);
      if(response&&response.loginStatus === 1){
        yield put(routerRedux.push('/home/analysis'))
      }else{
        message.error('用户名或者密码错误');
      }
    },
    // *login({ payload }, { call, put }) {
    //   const response = yield call(fakeAccountLogin, payload);
    //   yield put({
    //     type: 'changeLoginStatus',
    //     payload: response,
    //   });
    //   // Login successfully
    //   if (response.status === 'ok') {
    //     reloadAuthorized();
    //     const urlParams = new URL(window.location.href);
    //     const params = getPageQuery();
    //     let { redirect } = params;
    //     if (redirect) {
    //       const redirectUrlParams = new URL(redirect);
    //       if (redirectUrlParams.origin === urlParams.origin) {
    //         redirect = redirect.substr(urlParams.origin.length);
    //         if (redirect.startsWith('/#')) {
    //           redirect = redirect.substr(2);
    //         }
    //       } else {
    //         window.location.href = redirect;
    //         return;
    //       }
    //     }
    //     yield put(routerRedux.replace(redirect || '/'));
    //   }
    // },

    // *getCaptcha({ payload }, { call }) {
    //   yield call(getFakeCaptcha, payload);
    // },

    // *logout(_, { put }) {
    //   yield put({
    //     type: 'changeLoginStatus',
    //     payload: {
    //       status: false,
    //       currentAuthority: 'guest',
    //     },
    //   });
    //   reloadAuthorized();
    //   yield put(
    //     routerRedux.push({
    //       pathname: '/user/login',
    //       search: stringify({
    //         redirect: window.location.href,
    //       }),
    //     })
    //   );
    // },
  },

  reducers: {
    // changeLoginStatus(state, { payload }) {
    //   setAuthority(payload.currentAuthority);
    //   return {
    //     ...state,
    //     status: payload.status,
    //     type: payload.type,
    //   };
    // },
  },
};


// import { stringify } from 'querystring';
// import router from 'umi/router';
// import { fakeAccountLogin, getFakeCaptcha } from '@/services/login';
// import { setAuthority } from '@/utils/authority';
// import { getPageQuery } from '@/utils/utils';
// const Model = {
//   namespace: 'login',
//   state: {
//     status: undefined,
//   },
//   effects: {
//     *login({ payload }, { call, put }) {
//       const response = yield call(fakeAccountLogin, payload);
//       console.log(response);
//       yield put({
//         type: 'login',
//         payload: response
//       });
//       // yield put({
//       //   type: 'changeLoginStatus',
//       //   payload: response,
//       // }); // Login successfullyog
//       // if (response.status === '200') {
//         // const urlParams = new URL(window.location.href);
//         // const params = getPageQuery();
//         // let { redirect } = params;

//         // if (redirect) {
//         //   const redirectUrlParams = new URL(redirect);

//         //   if (redirectUrlParams.origin === urlParams.origin) {
//         //     redirect = redirect.substr(urlParams.origin.length);

//         //     if (redirect.match(/^\/.*#/)) {
//         //       redirect = redirect.substr(redirect.indexOf('#') + 1);
//         //     }
//         //   } else {
//         //     window.location.href = '/';
//         //     return;
//         //   }
//         // }

//         // router.replace(redirect || '/');
//       // }
//     },

//     *getCaptcha({ payload }, { call }) {
//       yield call(getFakeCaptcha, payload);
//     },

//     logout() {
//       const { redirect } = getPageQuery(); // Note: There may be security issues, please note

//       if (window.location.pathname !== '/user/login' && !redirect) {
//         router.replace({
//           pathname: '/user/login',
//           search: stringify({
//             redirect: window.location.href,
//           }),
//         });
//       }
//     },
//   },
//   reducers: {
//     login(state, action) {
//       return {
//         ...state,
//         user: action.payload,
//       };
//     },
//     changeLoginStatus(state, { payload }) {
//       setAuthority(payload.currentAuthority);
//       return { ...state, status: payload.status, type: payload.type };
//     },
//   },
// };
// export default Model;
