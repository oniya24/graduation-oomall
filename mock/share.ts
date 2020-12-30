export default {
  'GET /shares': (req: any, res: any) => {
    const data = new Array(10)
      .join()
      .split('')
      .map((item, index) => {
        return {
          id: 'string',
          sharerId: 'string',
          sku: {
            id: 0,
            name: '垃圾袋',
            skuSn: '13513515313',
            imageUrl:
              'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
            inventory: 0,
            originalPrice: 0,
            price: 0,
            disable: false,
          },
          quantity: 0,
          gmtCreate: 0,
        };
      });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send({
      errno: 0,
      errmsg: 'string',
      data: {
        page: 0,
        pageSize: 0,
        total: 0,
        pages: 0,
        list: data,
      },
    });
  },
  'GET /beshared': (req: any, res: any) => {
    const data = new Array(10)
      .join()
      .split('')
      .map((item, index) => {
        return {
          id: 'string',
          sharerId: 'string',
          sku: {
            id: 0,
            name: '垃圾袋',
            skuSn: '13513515313',
            imageUrl:
              'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
            inventory: 0,
            originalPrice: 0,
            price: 0,
            disable: false,
          },
          quantity: 0,
          gmtCreate: 0,
        };
      });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send({
      errno: 0,
      errmsg: 'string',
      data: {
        page: 0,
        pageSize: 0,
        total: 0,
        pages: 0,
        list: data,
      },
    });
  },
};
