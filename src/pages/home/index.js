import { mapStateToProps, mapDispatchToProps } from '@/models/Favorite';
import { connect } from 'umi';
const home = ({
  presaleList,
  grouponList,
  advertisementList,
  flashList,
  getAllPresale,
  getAllGroupon,
  getCurrentAdvertisement,
  getCurrentflash,
}) => {
  console.log('home');
  return <div>131313 这是首页的内容 放预售 团购 和 广告的内容</div>;
};
export default connect(mapStateToProps, mapDispatchToProps)(home);
