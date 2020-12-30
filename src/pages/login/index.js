import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import qq from '../../static/image/qq.png';
import pg from '../../static/image/pg.png';
import wx from '../../static/image/wx.png';

// import moduleName from 'module'
@connect(state => state.user, {
  login: user => ({ type: 'login', payload: user }),
})
class LoginPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      name: '',
    };
  }

  render() {
    const { login, isLogin, location, err } = this.props;
    const { name } = this.state;
    if (isLogin) {
      const { redirect = '/' } = location.state || {};
      return <Redirect to={redirect} />;
    }
    return (
      <div className="login">
        <div className="Form">
          <div className="FormItem">
            <input
              className="FormInput"
              placeholder="请输入用户名"
              value={name}
              onChange={event => this.setState({ name: event.target.value })}
            />
          </div>
          <div className="FormItem">
            <input
              className="FormInput"
              placeholder="请输入密码"
              type="password"
            />
          </div>
          <div className="FormItem">
            <button
              className="FormButton"
              onClick={() => {
                login({ name });
              }}
            >
              登录
            </button>
          </div>

          {err.msg && <div className="err">{err.msg}</div>}
        </div>

        <div className="loginTools">
          <span>账号密码登录</span>
          <span>手机快速注册</span>
        </div>

        <div className="loginOthers">
          <div className="title">
            <span className="line"></span>
            <span className="content">其他登录方式</span>
          </div>
          <div className="list">
            <div className="item">
              {/* <div className='icon'></div> */}
              <img src={qq} alt="icon" />
              <span>qq</span>
            </div>
            <div className="item">
              {/* <div className='icon'></div> */}
              <img src={wx} alt="icon" />
              <span>wx</span>
            </div>
            <div className="item">
              {/* <div className='icon'></div> */}
              <img src={pg} alt="icon" />
              <span>pg</span>
            </div>
          </div>
          <div className="Introduction">xxx相关负责协议请确定后选择同意</div>
        </div>
      </div>
    );
  }
}
export default LoginPage;
