import React, { Component } from "react";
// 스타일 임포트
import "../Main/Side.css";
// 이미지 임포트
import UserPic from "../../img/my-pic.jpg";

class Side extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        {
          id: 0,
          userId: "piggys_favorite",
          userPic: UserPic,
          timer: "37분",
          text: "instagram 신규 가입",
        },
        {
          id: 1,
          userId: "things_csmf",
          userPic: UserPic,
          timer: "52분",
          text: "studiocarciofi님이 팔로우합니다.",
        },
        {
          id: 2,
          userId: "seenaeme",
          userPic: UserPic,
          timer: "1시간",
          text: "instagram 신규 가입",
        },
        {
          id: 3,
          userId: "bnv_dana",
          userPic: UserPic,
          timer: "5시간",
          text: "afrotang8님 외 6명이 팔로우합니다.",
        },
        {
          id: 4,
          userId: "jake.pack.j",
          userPic: UserPic,
          timer: "7시간",
          text: "afrotang8님 외 6명이 팔로우합니다.",
        },
        {
          id: 5,
          userId: "re_bible",
          userPic: UserPic,
          timer: "8시간",
          text: "afrotang8님 외 6명이 팔로우합니다.",
        },
        {
          id: 6,
          userId: "siri-bake",
          userPic: UserPic,
          timer: "9시간",
          text: "studiocarciofi님이 팔로우합니다.",
        },
      ],
    };
  }
  eventDefault = (e) => {
    console.log(e);
    debugger;
    e.peventDefault();
  };
  render() {
    return (
      <div className="main-right">
        <div className="my-profile-wrap">
          <div className="my-pic-wrap">
            <img src={UserPic} alt="" />
          </div>
          <div className="my-pic-text">
            <div>zuzu</div>
            <div>.... 🕳</div>
          </div>
        </div>
        <div className="side-box">
          <div className="side-title">
            <div>스토리</div>
            <div>모두 보기</div>
          </div>
          <div className="side-list-wrap">
            <div className="side-list">
              <ul>
                {this.state.members.map((user) => {
                  return (
                    <li key={user.id}>
                      <a href="/" onClick={this.eventDefault}>
                        <div className="user-profile-wrap padding18">
                          <div className="user-pic-wrap">
                            <div className="img-border">
                              <img src={user.userPic} alt="" />
                            </div>
                          </div>
                          <div className="user-profile-text">
                            <div>{user.userId}</div>
                            <div>{user.timer}</div>
                          </div>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="side-box2">
          <div className="side-title">
            <div>회원님을 위한 추천</div>
            <div>모두 보기</div>
          </div>
          <div className="side-list-wrap2">
            <div className="side-list">
              <ul>
                {this.state.members.map((user) => {
                  return (
                    <li key={user.id}>
                      <div className="user-profile-wrap padding10">
                        <div className="user-pic-wrap2">
                          <img className="user-pic" src={user.userPic} alt="" />
                        </div>
                        <div className="user-profile-text">
                          <div>{user.userId}</div>
                          <div className="user-text">{user.text}</div>
                        </div>
                        <form className="follow-wrap">
                          <div className="follow-btn">
                            <button type="submit">팔로우</button>
                          </div>
                        </form>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="side-foot">
          <nav>
            <ul>
              <li>
                <a href="/">Instagram 정보</a>
              </li>
              <li>
                <a href="/">도움말</a>
              </li>
              <li>
                <a href="/">홍보 센터</a>
              </li>
              <li>
                <a href="/">API</a>
              </li>
              <li>
                <a href="/">채용 정보</a>
              </li>
              <li>
                <a href="/">개인정보처리방침</a>
              </li>
              <li>
                <a href="/">약관</a>
              </li>
              <li>
                <a href="/">디렉터리</a>
              </li>
              <li>
                <a href="/">프로필</a>
              </li>
              <li>
                <a href="/">해시태그</a>
              </li>
              <li>
                <a href="/">언어</a>
              </li>
            </ul>
          </nav>
          <span>© 2020 INSTAGRAM</span>
        </div>
      </div>
    );
  }
}

export default Side;
