import { getAllCommentsReq } from '@/services/Comment.tsx';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '@/utils/reduxUtil.tsx';
const namespace = 'comment';

const model = {
  namespace: namespace,
  state: {
    rawCommentList: [],
  },
  effects: {
    *getAllComments({ payload }, { call, put }) {
      const res = yield call(getAllCommentsReq, payload);
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export const mapStateToProps = defaultMapStateToProps(model);
export const mapDispatchToProps = defaultMapDispatchToProps(model);
export default model;
