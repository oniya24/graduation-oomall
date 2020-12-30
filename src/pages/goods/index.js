import { mapStateToProps, mapDispatchToProps } from '@/models/Goods';
import { connect } from 'umi';
const goods = ({
  brandList,
  subcategories,
  getSubCategoryById,
  getAllBrand,
}) => {
  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      1313131
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(goods);
