import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import './index.scss';

export default class FooterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FooterBarRouters: [],
    };
  }
  componentDidMount() {
    const { routes } = this.props;
    // console.log(routes);
    // this.FooterBarRouters = routes
    this.isFooterNav(routes);
  }
  isFooterNav = routers => {
    const FooterBarRouters = routers.filter(item => item.isNav);
    // 判断底部导航按钮数量
    if (FooterBarRouters.length > 5) {
      new Error('底部导航栏按钮大于五个');
      return;
    }

    this.setState({
      FooterBarRouters,
    });
  };
  render() {
    const { FooterBarRouters } = this.state;
    // console.log(FooterBarRouters);
    return (
      <div className="footerNav">
        {FooterBarRouters.map(item => (
          <NavItem key={item.path} {...item}></NavItem>
        ))}
      </div>
    );
  }
}

function NavItem({ icon, path, title }) {
  return (
    <NavLink exact to={path} activeClassName="selected" className="navItem">
      <span className={`iconfont icon-${icon}`}></span>
      <div>{title}</div>
    </NavLink>
  );
}
