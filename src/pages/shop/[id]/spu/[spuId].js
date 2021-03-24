import { mapStateToProps, mapDispatchToProps } from '@/models/Shop';
import { List, Drawer, Button, Card, Stepper, Toast } from 'antd-mobile';
import { connect, useParams } from 'umi';
import { useEffect, useState } from 'react';
import styles from './index.scss';
const spu = ({
  spuDetail,
  getGoodSpuById,
  postGoods2Favorite,
  postUserCarts
}) => {
  const { spuId } = useParams()
  const [ open, setOpen ] = useState(false)
  const [ curSkuId, setCurSkuId ] = useState(null)
  const [ curQuantity, setQuantity ] = useState(1)
  const { brand, category, imageUrl, name, skuList, detail } = spuDetail
  const { name: brandName } = brand || {}
  const { name: categoryName } = category || {}
  const handleQuantityChange = (val) => {
    setQuantity(val)
  }
  const handleAdd2Favorite = async () => {
    if(curSkuId === null){
      return Toast.fail("请选择商品规格")
    }
    await  postGoods2Favorite(spuId)
  }
  const handleAdd2Cart = async () => {
    if(curSkuId === null){
      return Toast.fail("请选择商品规格")
    }
    await  postUserCarts({
      goodsSkuId: curSkuId,
      quantity: curQuantity
    })
  }
  useEffect(() => {
    getGoodSpuById(spuId)
  }, [])
  return(
    <div style={{height: '100%', width: '100%'}}>
      <div className={styles.img_contain}>
        <img style={{ height: 240, width: 240 }} src={imageUrl}></img>
        <p className={styles.good_title}>{name}</p>
      </div>
      <div>
        <List>
          <List.Item extra={brandName}>{"品牌名"}</List.Item>
          <List.Item extra={categoryName}>{"分类"}</List.Item>
        </List>
        <Card>
          <Card.Header title="规格列表"></Card.Header>
            {
              !!skuList && skuList.map((item) => {
                const { inventory } = item
                return(
                  <Button
                    type={ item.id === curSkuId ? "primary" : "default"} 
                    onClick={() => setCurSkuId(item.id)} style={{ height: 40 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 40 }}>
                      <img src={item.imageUrl} style={{ width: 30, height: 30 }}></img>
                      <span className={styles.sku_span}>品名:{item.name}</span>
                      <span className={styles.sku_span}>库存:{item.inventory}件</span>
                      <span className={styles.sku_span}>价格:{item.price}￥</span>
                      <Stepper min={1} showNumber max={inventory} defaultValue={1} 
                        onChange={handleQuantityChange}></Stepper>
                    </div>
                  </Button>
                )
              })
            }
        </Card>
      </div>
      <div className={styles.operator_contain}>
        <Button size="small" type="ghost" onClick={handleAdd2Favorite}
          className={styles.operator_contain_item}>收藏</Button>
        <Button size="small" type="primary" onClick={handleAdd2Cart}
          className={styles.operator_contain_item}>加入购物车</Button>
        <Button size="small" type="warning" 
          className={styles.operator_contain_item}>立即购买</Button>
      </div>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(spu);
