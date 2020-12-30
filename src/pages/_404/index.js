import React, { Component } from 'react';
import icon_404 from '../../static/image/404.png';
import './index.scss';
export default class _404 extends Component {
  render() {
    return (
      <div className="lost404">
        <img src={icon_404} title="404" alt="404" />
        <p>抱歉您访问的页面不存在</p>
      </div>
    );
  }
}
