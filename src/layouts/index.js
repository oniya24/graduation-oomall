import { Fragment } from 'react';
import { useLocation } from 'umi';
import { basicRoutes as routers } from '@/consts/routers';
import BasicLayout from './BasicLayout';
import SingleLayout from './SingleLayout';

const layout = props => {
  const { pathname } = useLocation();
  let isBasic = routers.some(item => item.path === pathname);
  const Container = isBasic ? BasicLayout : SingleLayout;

  return (
    <Fragment>
      <Container>{props.children}</Container>
    </Fragment>
  );
};

export default layout;
