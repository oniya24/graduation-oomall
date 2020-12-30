export default {
  'GET /presales': (req: any, res: any) => {
    const data = new Array(20)
      .join()
      .split('')
      .map(item => {
        return {
          id: 0,
          name: 'string',
          BeginTime: 'string',
          payTime: 'string',
          endTime: 'string',
          goodsSku: {
            id: 0,
            name: 'string',
            skuSn: 'string',
            imageUrl: 'string',
            inventory: 0,
            originalPrice: 0,
            price: 0,
            disable: false,
          },
          shop: {
            id: 0,
            name: 'string',
          },
          state: 'string',
          quantity: 0,
          advancePayPrice: 0,
          restPayPrice: 0,
          gmtCreate: 'string',
          gmtModified: 'string',
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
};
