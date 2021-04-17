const basicRoutes = [
  {
    path: '/home',
    title: '首页',
    showTopBar: false,
    showFootBar: true,
    isNav: true,
    props: { exact: true },
    icon:
      'url(http://oomall.finetoo.top/static/home_not_selected.svg) center center /  24px 24px no-repeat',
    selectedIcon:
      'url(http://oomall.finetoo.top/static/home_selected.svg) center center / 24px 24px no-repeat',
  },
  {
    path: '/category',
    title: '分类',
    showTopBar: true,
    showFootBar: true,
    isNav: true,
    icon:
      'url(http://oomall.finetoo.top/static/category_not_selected.svg) center center /  24px 24px no-repeat',
    selectedIcon:
      'url(http://oomall.finetoo.top/static/category_selected.svg) center center / 24px 24px no-repeat',
  },
  {
    path: '/shop',
    title: '店铺',
    showTopBar: true,
    showFootBar: true,
    isNav: true,
    icon:
      'url(http://oomall.finetoo.top/static/shop_not_selected.svg) center center /  24px 24px no-repeat',
    selectedIcon:
      'url(http://oomall.finetoo.top/static/shop_selected.svg) center center / 24px 24px no-repeat',
  },
  {
    path: '/cart',
    title: '购物车',
    showTopBar: true,
    showFootBar: true,
    isNav: true,
    icon:
      'url(http://oomall.finetoo.top/static/cart_not_selected.svg) center center /  24px 24px no-repeat',
    selectedIcon:
      'url(http://oomall.finetoo.top/static/cart_selected.svg) center center / 24px 24px no-repeat',
  },
  {
    path: '/my',
    title: '我的',
    showTopBar: true,
    showFootBar: true,
    isNav: true,
    icon:
      'url(http://oomall.finetoo.top/static/my_not_selected.svg) center center /  24px 24px no-repeat',
    selectedIcon:
      'url(http://oomall.finetoo.top/static/my_selected.svg) center center / 24px 24px no-repeat',
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
    ? 'http://localhost:8081/goods'
    : 'http://localhost:8081/';
export const orderPrefix: String =
  process.env.NODE_ENV == 'production'
    ? 'http://47.114.166.8:8082'
    : 'http://localhost:8082/';
export const paymentPrefix: String =
  process.env.NODE_ENV == 'production'
    ? 'http://localhost:8083/payment'
    : 'http://localhost:8083/payment';
