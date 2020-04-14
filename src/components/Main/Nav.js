import React, { Component } from "react";
import "../Main/Nav.css";
// 이미지 임포트
import ImgSprite from "../../img/magnifying-glass.svg";
import TextLogo from "../../img/logo_text.png";

class Nav extends Component {
  render() {
    return (
      <nav className="header-nav">
        <div className="container">
          <div className="right">
            <div className="logo-icon">
              <a href="/">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
                  alt=""
                />
              </a>
            </div>
            <div className="border">{/* <!-- ? --> */}</div>
            <div className="logo-text">
              <a href="/">
                <img src={TextLogo} alt="" />
              </a>
            </div>
          </div>
          <div className="center">
            <form action="">
              <div className="search-wrap">
                <input type="text" />
              </div>
            </form>
            <div className="search-up">
              <div className="search-icon">
                <img src={ImgSprite} alt="" />
              </div>
              <span>검색</span>
            </div>
          </div>
          <div className="left">
            <div>
              <a href="/">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                  alt=""
                  className="img-explore"
                />
              </a>
            </div>
            <div>
              <a href="/">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="/">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
