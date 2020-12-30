export default {
  'GET /orders': (req: any, res: any) => {
    const data = new Array(10)
      .join()
      .split('')
      .map((item, index) => {
        return {
          id: 0,
          customerId: 0,
          shopId: 0,
          pid: 0,
          orderType: 0, // 订单类型
          state: 0, // 订单状态
          subState: 0,
          gmtCreate: 0,
          originPrice: 0,
          discountPrice: 0,
          freightPrice: 0,
          grouponId: 0,
          presaleId: 0,
          shipmentSn: 'string',
        };
      });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send({
      errno: 0,
      errmsg: 'string',
      data: {
        list: data,
      },
    });
  },
  'GET /orders/0': (req: any, res: any) => {
    const data = {
      errno: '0',
      errmsg: '成功',
      data: {
        id: 0,
        orderSn: 'string',
        customer: {
          id: 0,
          userName: 'string',
          name: 'string',
        },
        shop: {
          id: 0,
          name: 'string',
          state: 0,
          gmtCreate: 'string',
          gmtModified: 'string',
        },
        pid: 0,
        orderType: 0,
        state: 0,
        subState: 0,
        gmtCreate: 'string',
        gmtModified: 'string',
        confirmTime: 'string',
        originPrice: 0,
        discountPrice: 0,
        freightPrice: 0,
        rebateNum: 0,
        message: 'string',
        regionId: 0,
        address: 'string',
        mobile: 'string',
        consignee: 'string',
        couponId: 0,
        grouponId: 0,
        presaleId: 0,
        shipmentSn: 'string',
        orderItems: [
          {
            skuId: 0,
            orderId: 0,
            name: 'string',
            quantity: 0,
            price: 0,
            discount: 0,
            couponActId: 0,
            beSharedId: 0,
          },
        ],
      },
    };
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data);
  },
};
