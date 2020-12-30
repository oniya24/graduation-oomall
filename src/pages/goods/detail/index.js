import { mapStateToProps, mapDispatchToProps } from '@/models/Goods';
import { connect } from 'umi';
const goods_detail = ({
  brandList,
  subcategories,
  getSubCategoryById,
  getAllBrand,
}) => {
  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}></div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(goods_detail);
