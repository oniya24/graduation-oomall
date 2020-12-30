import { mapStateToProps, mapDispatchToProps } from '@/models/Comment';
import { connect } from 'umi';
const comment = () => {
  return <div>这里放用户已经评论的内容</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(comment);
