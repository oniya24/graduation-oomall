// import mockjs from 'mockjs';
export default {
  // 使用 mockjs 等三方库
  'GET /carts': (req: any, res: any) => {
    // {
    //   "id": 0,
    //   "goodsSkuId": 0,
    //   "skuName": "string",
    //   "quantity": 0,
    //   "price": 0,
    //   "gmtCreate": "string",
    //   "gmtModified": "string",
    //   "couponActivity": [
    //     {
    //       "id": 0,
    //       "name": "string",
    //       "beginTime": "string",
    //       "endTime": "string"
    //     }
    //   ]
    // }
    let data = new Array(10)
      .join()
      .split('')
      .map(item => {
        return {
          id: 0, // id
          goodsSkuId: 0, // skuId
          skuName: '维他柠檬茶', // 规格名称
          quantity: 2, // 数量
          price: 100, // 价格
          gmtCreate: 'string', // 创建时间
          gmtModified: 'string', // 修改时间
          couponActivity: [
            // 适用的优惠活动
            {
              id: 0,
              name: 'string',
              beginTime: 'string',
              endTime: 'string',
            },
          ],
          img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
          // "goodsSkuId": 0,
          // "skuName": "商品名称",
          // "quantity": 50,
          // "price": 110,
          // title: "Meet hotel",
          // des: "不是所有的兼职汪都需要风吹日晒",
          // header: "不是所有的兼职汪都需要风吹日晒",
        };
      });
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send({
      errno: 0,
      errmsg: 'string',
      data: data,
    });
  },
};
