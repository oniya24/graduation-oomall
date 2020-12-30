import { Fragment } from 'react';
import BasicLayout from './BasicLayout';
import BlankLayout from './BlankLayout';

const layout = props => {
  const Container = BasicLayout;
  return (
    <Fragment>
      <Container>{props.children}</Container>
    </Fragment>
  );
};

export default layout;
