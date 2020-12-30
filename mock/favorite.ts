export default {
  'GET /favorites': (req: any, res: any) => {
    // "id": 0,
    // "goodSku": {
    //   "id": 0,
    //   "name": "string",
    //   "skuSn": "string",
    //   "imageUrl": "string",
    //   "inventory": 0,
    //   "originalPrice": 0,
    //   "price": 0,
    //   "disable": false
    // },
    // "gmtCreate": "string"
    const data = new Array(10)
      .join()
      .split('')
      .map((item, index) => {
        return {
          id: index,
          goodSku: {
            id: 0,
            name: '电脑',
            skuSn: 'mbp20',
            imageUrl:
              'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
            inventory: 10,
            originalPrice: 13990,
            price: 12999,
            disable: false,
          },
          gmtCreate: 'string',
        };
      });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send({
      errno: 0,
      errmsg: 'string',
      data: data,
    });
  },
};
