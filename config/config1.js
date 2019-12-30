import defaultSettings from './defaultSettings'; // https://umijs.org/config/

import slash from 'slash2';
import themePluginConfig from './themePluginConfig';
const { pwa } = defaultSettings; // preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;
const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site';
const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: 'zh-CN',
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 3,
      },
      pwa: pwa
        ? {
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
              importWorkboxFrom: 'local',
            },
          }
        : false, // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
];

if (isAntDesignProPreview) {
  // 针对 preview.pro.ant.design 的 GA 统计代码
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
  plugins.push(['umi-plugin-antd-theme', themePluginConfig]);
}

export default {
  plugins,
  hash: true,
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/welcome',
            },
            {
              path: '/welcome',
              name: 'home',
              icon: 'smile',
              component: './Welcome',
            },
            {
              path: '/admin',
              name: 'admin',
              icon: 'crown',
              component: './Admin',
              authority: ['admin'],
            },
            {
              path: '/dashboard',
              name: 'dashboard',

              icon: 'crown',
              routes: [
                {
                  path: '/dashboard/quota',
                  name: 'quota',
                  component: './dashboard/quota',
                },
                {
                  path: '/dashboard/index',
                  name: 'index',
                  component: './dashboard/index',
                },
                {
                  path: '/dashboard/add',
                  component: './dashboard/add',
                },
                {
                  path: '/dashboard/amend',
                  component: './dashboard/amend',
                },
                {
                  path: '/dashboard/indexadd',
                  component: './dashboard/indexadd',
                },
                {
                  path:'/dashboard/detail',
                  component: './dashboard/detail'
                }
                ,{
                  path:'/dashboard/detaila',
                  component: './dashboard/detaila'
                }
              ],
            },
            {
              path: '/pricing',
              // component: '../pages/pricing/index',
              name: 'pricing',
              icon: 'crown',
              routes: [
                {
                  path: '/pricing/index',
                  name: 'prigcin1',
                  component: '../pages/pricing/index',
                },
                {
                  path: '/pricing/index2',
                  name: 'prigcin2',
                  component: '../pages/pricing/index2',
                },
                {
                  path: '/pricing/index2modify',
                  component: '../pages/pricing/index2modify',
                },
                {
                  path: '/pricing/index2add',
                  component: '../pages/pricing/index2add',
                },
              ],
            },
            {
              path: '/rules',
              name: 'rules',
              icon: 'crown',
              routes: [
                {
                  path: '/rules/index',
                  name: 'rules1',
                  component: '../pages/rules/index',
                },
                {
                  path: '/rules/indexadd',//工程量新增
                  component: '../pages/rules/indexadd',
                },
                {
                  path: '/rules/indexmodify',//工程量修改
                  component: '../pages/rules/indexmodify',
                },
                ,
                {
                  path: '/rules/indexaddGC',//工程规则新增
                  component: '../pages/rules/indexaddGC',
                },
                {
                  path: '/rules/indexmodifyGC',//工程规则修改
                  component: '../pages/rules/indexmodifyGC',
                },
                {
                  path: '/rules/index2',
                  name: 'rules2',
                  component: '../pages/rules/index2',
                },
                {
                  path: '/rules/index2detail', //index2项目详情页
                  component: '../pages/rules/index2detail',
                },
                {
                  path: '/rules/index2add', //新建页
                  component: '../pages/rules/index2add',
                },
                {
                  path: '/rules/modify', //修改页
                  component: '../pages/rules/modify',
                },
                {
                  path: '/rules/index3',
                  name: 'rules3',
                  component: '../pages/rules/index3',
                },
                {
                  path: '/rules/index3add', //新增页
                  component: '../pages/rules/index3add',
                },
                {
                  path: '/rules/index3detail', //项目详情页
                  component: '../pages/rules/index3detail',
                },
                {
                  path: '/rules/index3modify', //修改页
                  component: '../pages/rules/index3modify',
                }
              ],
            },
            {
              path: '/engineering',
              name: 'engineering',
              icon: 'crown',
              routes:[
                {
                  path: '/engineering/index',
                  name: 'engineering1',
                  component: './engineering/index',
                },
                {
                  path:'/engineering/detail',
                  component: './engineering/detail'
                },
                {
                  path:'/engineering/indexa',
                  component: './engineering/indexa'
                }
              ]
            },

            {
              path: '/examination',
              name: 'examination',
              icon: 'crown',
              routes: [
                {
                  path: '/examination/index',
                  name: 'examination1',
                  component: './examination/index',
                },
                {
                  path: '/examination/detail',
                  name: 'examinationdetail',
                  component: './examination/detail',
                },
              ],
            },
            {
              path: '/mine',
              name: 'mine',
              icon: 'crown',
              routes: [
                {
                  path: '/mine/index1',
                  name: 'mine1',
                  component: '../pages/mine/index1',
                },
                {
                  path: '/mine/systemLog',//系统日志管理
                  component: '../pages/mine/systemLog',
                },
                {
                  path: '/mine/index2',
                  name: 'mine2',
                  component: '../pages/mine/index2',
                },
                {
                  path: '/mine/index3',
                  name: 'mine3',
                  component: '../pages/mine/index3',
                },
                {
                  path: '/mine/index4',
                  name: 'mine4',
                  component: '../pages/mine/index4',
                },
                {
                  path: '/mine/index5',
                  name: 'mine5',
                  component: '../pages/mine/index5',
                },
              ],
            },

            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },

    {},
    {
      component: './404',
    },
  ],

  theme: {
    // ...darkTheme,
    'font-size-base': '14px',
    'badge-font-size': '12px',
    'btn-font-size-lg': '@font-size-base',
    'menu-dark-bg': '#2F9290',
    'menu-dark-submenu-bg': '#2F9290',
    'layout-sider-background': '#2F9290',
  },
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, _, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  }, // chainWebpack: webpackPlugin,
  // proxy: {
  //   '/server/api/': {
  //     target: 'https://preview.pro.ant.design/',
  //     changeOrigin: true,
  //     pathRewrite: { '^/server': '' },
  //   },
  // },
};
