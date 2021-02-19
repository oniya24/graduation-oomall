import { mapStateToProps, mapDispatchToProps } from '@/models/Goods';
import { connect } from 'umi';
import { useEffect } from 'react';
import { Card, Button } from 'antd-mobile';
const goods = ({
  brandList,
  subcategories,
  getSubCategoryById,
  getAllBrand,
}) => {
  useEffect(() => {
    getAllBrand();
  }, []);
  return (
    <Card style={{ height: '100%', width: '100%', position: 'relative' }}>
      1313131
      <Card>这里是brandList</Card>
      <Card>
        <Button onClick={getSubCategoryById}>点击根据id获取下层信息</Button>
      </Card>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(goods);
