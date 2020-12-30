import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import './index.scss';
export default class TopBar extends Component {
  constructor(props) {
    super(props);
    const { title, routers } = this.props;
    this.isBack = true;
    this.isTopBarBack(title, routers);
  }

  isTopBarBack = (title, routers) => {
    console.log(routers, title);
    const isBack = routers.filter(item => item.title === title);
    // console.log(isBack[0].isNav);

    if (isBack[0].isNav) {
      this.isBack = false;
    }
  };

  render() {
    const { title } = this.props;
    const isBack = this.isBack;
    const history = createBrowserHistory();
    return (
      <div className="topBar">
        {isBack && (
          <span
            className="iconfont icon-back"
            onClick={() => {
              history.go(-1);
            }}
          ></span>
        )}
        <div className="title">{title}</div>
      </div>
    );
  }
}
