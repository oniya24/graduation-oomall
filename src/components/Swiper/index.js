import React, { Component } from 'react';
import './index.scss';
export default class Swiper extends Component {
  constructor(props) {
    super(props);
    this.slide = {
      endX: 0,
      startX: 0,
      minDistance: 50,
      slideWidth: 0,
      maxTranslate: 150,
    };

    this.state = {
      currentSlide: 0,
    };

    this.warp = '';
  }

  static Item = SwiperItem;

  // 手势开始
  touchStart = e => {
    // console.log('开始');
    // console.log(e.touches[0].clientX);
    let startX = e.touches[0].clientX;
    this.slide.startX = startX;
  };
  // 手势滑动
  touchMove = e => {
    const { startX } = this.slide;
    // console.log('滑动中');
    let endX = e.touches[0].clientX;
    let moveX = endX - startX;
    // 滑动动画
    this.slideTranslateAnimation(moveX);
    this.slide.endX = endX;
    // this.setState({
    //     endX
    // })
  };
  // 手势结束
  touchEnd = e => {
    // console.log('结束');
    const { startX, endX, minDistance } = this.slide;
    const { currentSlide } = this.state;
    const distance = Math.abs(startX - endX);
    const { children } = this.props;
    // 滑动距离大于默认距离页面翻页
    if (distance > minDistance) {
      if (startX > endX) {
        if (currentSlide < children.length - 1) {
          this.setState(
            {
              currentSlide: currentSlide + 1,
            },
            () => {
              this.animationSlide();
            },
          );
        } else {
          this.rebound();
        }
      } else {
        if (currentSlide > 0) {
          this.setState(
            {
              currentSlide: currentSlide - 1,
            },
            () => {
              this.animationSlide();
            },
          );
        } else {
          this.rebound();
        }
      }
    } else {
      this.rebound();
    }
  };

  // 拖动动画
  slideTranslateAnimation = moveX => {
    const warp = document.querySelector('.swiper-warp');
    const { slideWidth, maxTranslate } = this.slide;
    const { currentSlide } = this.state;
    //   const translate = - currentSlide * slideWidth + moveX;
    let translate = 0;
    // 极限值
    if (moveX > 0) {
      if (moveX > maxTranslate) {
        // const translate = - currentSlide * slideWidth + maxTranslate;
        translate = -currentSlide * slideWidth + maxTranslate;
      } else {
        translate = -currentSlide * slideWidth + moveX;
      }
    } else {
      if (moveX < -maxTranslate) {
        // console.log(moveX);
        translate = -currentSlide * slideWidth + -maxTranslate;
      } else {
        translate = -currentSlide * slideWidth + moveX;
      }
    }
    // if(maxTranslate)
    // if()
    warp.style.cssText = `transition-duration: 0ms; transform: translate3d(${translate}px, 0px, 0px)`;
  };
  // 回弹
  rebound = () => {
    const { slideWidth } = this.slide;
    const { currentSlide } = this.state;
    const warp = document.querySelector('.swiper-warp');
    warp.style.cssText = `transition-duration:100ms;transform:translate3d(${-(
      currentSlide * slideWidth
    )}px, 0px, 0px)`;
  };

  // 翻页动画
  animationSlide = type => {
    const { slideWidth } = this.slide;
    const { currentSlide } = this.state;
    let warp = document.querySelector('#warp');
    warp.style.cssText = `transition-duration: 5ms; transform: translate3d(${-(
      currentSlide * slideWidth
    )}px, 0px, 0px)`;
  };

  componentDidMount() {
    this.slide.slideWidth = document.querySelector('.swiper').offsetWidth;
  }

  render() {
    const { children } = this.props;
    const { currentSlide } = this.state;
    return (
      <div className="swiper margin-t">
        <div
          className="swiper-warp"
          id="warp"
          onTouchStart={this.touchStart}
          onTouchMove={this.touchMove}
          onTouchEnd={this.touchEnd}
        >
          {children}
        </div>
        <div className="indicator">
          {children.length &&
            children.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`indicator-item ${
                    index === currentSlide ? 'active' : ''
                  }`}
                ></div>
              );
            })}
        </div>
      </div>
    );
  }
}

function SwiperItem(props) {
  return <div className="swiper-item">{props.children}</div>;
}
