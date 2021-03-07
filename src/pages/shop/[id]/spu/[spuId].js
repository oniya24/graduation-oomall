import { mapStateToProps, mapDispatchToProps } from '@/models/Shop';
import { List, Drawer, Button, Card } from 'antd-mobile';
import { connect, useParams } from 'umi';
import { useEffect, useState } from 'react';
import styles from './index.scss';
const spu = ({
  spuDetail,
  getGoodSpuById,
  postGoods2Favorite
}) => {
  const { spuId } = useParams()
  const [ open, setOpen ] = useState(false)
  const { brand, category, imageUrl, name, skuList, detail } = spuDetail
  const { name: brandName } = brand || {}
  const { name: categoryName } = category || {}
  const handleAdd2Favorite = async () => {
    await  postGoods2Favorite(spuId)
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
          <List>
            {
              skuList.map((item) => {
                return(
                  <List.Item style={{ display: 'flex' }}>
                    <img src={item.imageUrl} style={{ width: 50, height: 50 }}></img>
                    <span className={styles.sku_span}>品名:{item.name}</span>
                    <span className={styles.sku_span}>库存:{item.inventory}件</span>
                    <span className={styles.sku_span}>价格:{item.price}￥</span>
                  </List.Item>
                )
              })
            }
          </List>
        </Card>
      </div>
      <div className={styles.operator_contain}>
        <Button size="small" type="ghost" 
          className={styles.operator_contain_item}>收藏</Button>
        <Button size="small" type="primary" onClick={handleAdd2Favorite}
          className={styles.operator_contain_item}>加入购物车</Button>
        <Button size="small" type="warning" 
          className={styles.operator_contain_item}>立即购买</Button>
      </div>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(spu);
