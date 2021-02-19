const basicRoutes = [
  {
    path: '/home',
    title: '首页',
    showTopBar: false,
    showFootBar: true,
    isNav: true,
    props: { exact: true },
    icon:
      'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
    selectedIcon:
      'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
  },
  {
    path: '/type',
    title: '分类',
    showTopBar: true,
    showFootBar: true,
    isNav: true,
    icon:
      'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
    selectedIcon:
      'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
  },
  {
    path: '/cart',
    title: '购物车',
    showTopBar: true,
    showFootBar: true,
    isNav: true,
    icon:
      'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
    selectedIcon:
      'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
  },
  {
    path: '/my',
    title: '我的',
    showTopBar: true,
    showFootBar: true,
    isNav: true,
    icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
    selectedIcon:
      'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
  },
];

const blankRoutes = [
  {
    path: '/login',
    title: '登录注册',
    showTopBar: true,
    showFootBar: false,
  },
  {
    path: '',
    title: '404暂无此页面',
    showTopBar: true,
    showFootBar: true,
  },
];

export { basicRoutes, blankRoutes };
export default [
  {
    category: 'basic',
    routes: basicRoutes,
  },
  {
    category: 'blank',
    routes: blankRoutes,
  },
];

export const goodsPrefix: String =
  process.env.NODE_ENV == 'production'
    ? 'http://localhost:8081/goods/'
    : 'http://localhost:8081/goods/';
export const orderPrefix: String =
  process.env.NODE_ENV == 'production'
    ? 'http://localhost:8081/goods/'
    : 'http://localhost:8081/goods/';
export const otherPrefix: String =
  process.env.NODE_ENV == 'production'
    ? 'http://localhost:8081/goods/'
    : 'http://localhost:8081/goods/';
