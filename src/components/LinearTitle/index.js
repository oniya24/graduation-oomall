import React, { Component } from 'react';
import './index.scss';
export default class LinearTitle extends Component {
  // constructor(props) {
  //     super(props)
  // }
  render() {
    const { colors, title } = this.props;
    const color = colors.split(',');
    return (
      <div className="linear-title">
        <span
          style={{
            background: `linear-gradient(90deg,${color[0]},${color[1]})`,
          }}
        >
          {title}
        </span>
      </div>
    );
  }
}
