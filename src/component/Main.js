import React, { Component } from 'react';
// import './Main.css';


class Main extends Component {

  render() {
    return (
      <>
        <nav className='header-nav'>
          <div className="container">
            <div className="right">
              <div className="logo-icon">
                <a href="/">
                  <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" alt="" /></a>
              </div>
              <div className='border'>
                {/* <!-- ? --> */}
              </div>
              <div className="logo-text">
                <a href="/"><img src="../../src/img/logo_text.png" alt="" /></a></div>
            </div>
            <div className="center">
              <form action="">
                <div className="search-wrap">
                  <input type="text" />
                </div>
              </form>
              <div className='search-up'>
                <div className='search-icon'>
                  <img src="./img/magnifying-glass.svg" alt="" />
                </div>
                <span>검색</span>
              </div>
            </div>
            <div className="left">
              <div><a href="/"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt=""
                className='img-explore' /></a></div>
              <div><a href="/"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="" /></a>
              </div>
              <div><a href="/"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="" /></a></div>
            </div>
          </div>
        </nav>

        <main>
          <div className="feeds">
            <article>
              {/* <!-- 여기에 피드 하나씩 올라감. --> */}
              {/* <!-- 상단 유저 아이디 박스 --> */}
              <div className="feed-user-id-box">
                <div className="feed-user-pic-wrap">
                  <img src="./img/my-pic.jpg" alt="" />
                </div>
                <div className='feed-user-id'>zuzu</div>
                <div className='feed-three-dot-wrap'>
                  <div className='three-dot-menu'>
                    <a href="/">
                      <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="" /></a>
                  </div>
                </div>
              </div>
              {/* <!-- 피드 사진 --> */}
              <div className='feed-img-wrap'>
                <img src="/img/2.jpg" alt="" />
              </div>
              {/* <!-- 피드 아이콘 --> */}
              <div className='feed-icons-wrap'>
                <div className='feed-icons-left'>
                  <div className='icon-heart'>
                    <a href="/">
                      <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="" />
                    </a>
                  </div>
                  <div className='icon-balloon'>
                    <a href='/'><img src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png' alt="" /></a>
                  </div>
                  <div className='icon-share'>
                    <a href='/'><img src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png' alt="" /></a>
                  </div>
                </div>
                <div className="feed-icon-rignt">
                  <div className='icon-bookmark'>
                    <a href='/'> <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt="" /></a>
                  </div>
                </div>
              </div>
              {/* <!-- 피드 댓글 --> */}
              <div className='feed-repl-wrap'>
                <div className='feed-like-text-wrap'>
                  <button>좋아요 <span>151</span>개</button>
                </div>
                <div className='feed-repls'>
                  <span><a href="/" className='user-id'>USER_ID</a>안녕하세요 ! 간만에 파티이머지 입니다. 작업실은 이제 많이 준비가 되었답니다. 그래도 아직 손봐야하는 것들도
                    많고 들어와야하는 것들도
                    많아요 .. 흑흑흑
              <span role="img" aria-label='cying'>😭</span> ... 아무튼, 잠시 시간이 나서 카카오톡으로 연락 주신<span>...</span><button className='all-repl'>더보기</button></span>
                  <span className='mention'><a href="/">댓글 5개 모두보기</a></span>
                  {/* <!-- 댓글시작 --> */}

                </div>
                <span className="feed-time">2시간 전</span>

              </div>
              {/* <!-- 댓글쓰기 --> */}
              {/* </button> */}
              <div className="send-repl-wrap">
                <div className='form-div'>
                  <div className='input-wrap'>
                    <input className='repl-input' type="text" placeholder="댓글 달기..." /></div>
                  <div className='submit-wrap'>
                    <button className='repl-btn opacity-0-5' type="button">
                      게시
              </button>
                  </div>
                </div>

              </div>
            </article>

          </div>
          <div className="main-right">
            <div className='my-profile-wrap'>
              <div className='my-pic-wrap'>
                <img src="./img/my-pic.jpg" alt="" />
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
                          <img src="./img/my-pic.jpg" alt="" />
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
                          <img src="./img/my-pic.jpg" alt="" />
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
        </main>
        <script src="js/main.js"></script>
      </ >


    );
  }

}


export default Main;

