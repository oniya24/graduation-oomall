let count = -1;
export default {
  'GET /aftersales': (req: any, res: any) => {
    const data = new Array(20)
      .join()
      .split('')
      .map(item => {
        return {
          id: 0,
          orderId: 0, // 订单id
          orderItemId: 0, // 物品id
          customerId: 0, //
          shopId: '123', // 店铺id
          serviceSn: 'string', //
          type: 0, // 类型
          reason: 'string', // 理由
          refund: 0, // 退课金额
          quantity: 0, // 数量
          regionId: 0, // 地址
          detail: 'string', // 详细地址
          consignee: 'string', // 收件人
          mobile: 'string', // 手机
          customerLogSn: 'string', //
          shopLogSn: 'string',
          state: 0, // 当前状态
        };
      });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send({
      errno: 0,
      errmsg: 'string',
      data: {
        page: '0',
        pageSize: '20',
        total: '10',
        pages: '1',
        list: data,
      },
    });
  },
  'GET /aftersales/0': (req: any, res: any) => {
    count++;
    const data = {
      errno: {},
      errmsg: 'string',
      data: {
        id: 0,
        orderId: 0,
        orderItemId: 0,
        skuId: 0,
        skuName: 'string',
        customerId: 0,
        shopId: 0,
        serviceSn: 'string',
        type: 0,
        reason: '七天无理由',
        refund: 330,
        quantity: 1,
        regionId: 0,
        detail: '厦大公寓',
        consignee: '刘旭',
        mobile: '18263464646',
        customerLogSn: 'string',
        shopLogSn: 'string',
        state: 1,
      },
    };
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data);
  },
};
