import React, { Component } from 'react';
// 스타일 임포트
import '../Main/Side.css';
// 이미지 임포트
import UserPic from '../../img/my-pic.jpg';

class Side extends Component {
  render() {
    return (
      <div className="main-right">
        <div className='my-profile-wrap'>
          <div className='my-pic-wrap'>
            <img src={UserPic} alt="" />
          </div>
          <div className="my-pic-text">
            <div>zuzu</div>
            <div>.... 🕳</div>
          </div>
        </div>
        <div className='side-box'>
          <div className='side-title'>
            <div>스토리</div>
            <div>모두 보기</div>
          </div>
          <div className="side-list-wrap">
            <div className='side-list'>
              <ul>
                <li><a href="/">
                  <div className='user-profile-wrap'>
                    <div className='user-pic-wrap'>
                      <img src={UserPic} alt="" />
                    </div>
                    <div className="user-profile-text">
                      <div>zuzu</div>
                      <div>4시간 전</div>
                    </div>
                  </div>
                </a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='side-box'>
          <div className='side-title'>
            <div>회원님을 위한 추천</div>
            <div>모두 보기</div>
          </div>
          <div className="side-list-wrap">
            <div className='side-list'>
              <ul>
                <li><a href="/">
                  <div className='user-profile-wrap'>
                    <div className='user-pic-wrap'>
                      <img src={UserPic} alt="" />
                    </div>
                    <div className="user-profile-text">
                      <div>random_id</div>
                      <div>instagram 신규 가입</div>
                    </div>
                    <form action="">
                      <div className='follow-btn'>
                        <button type="submit">팔로우</button>
                      </div>
                    </form>
                  </div>
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='side-foot'>
          <nav>
            <ul>
              <li><a href="/">Instagram 정보</a></li>
              <li><a href="/">도움말</a></li>
              <li><a href="/">홍보 센터</a></li>
              <li><a href="/">API</a></li>
              <li><a href="/">채용 정보</a></li>
              <li><a href="/">개인정보처리방침</a></li>
              <li><a href="/">약관</a></li>
              <li><a href="/">디렉터리</a></li>
              <li><a href="/">프로필</a></li>
              <li><a href="/">해시태그</a></li>
              <li><a href="/">언어</a></li>
            </ul>
          </nav>
          <span>© 2020 INSTAGRAM</span>
        </div>
      </div>

    );
  }
}

export default Side;