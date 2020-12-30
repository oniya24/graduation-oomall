import { Fragment } from 'react';
import BasicLayout from './BasicLayout';

const layout = props => {
  const Container = BasicLayout;
  return (
    <Fragment>
      <Container>{props.children}</Container>
    </Fragment>
  );
};

export default layout;
