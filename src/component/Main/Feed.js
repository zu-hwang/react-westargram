import React, { Component } from 'react';
// 스타일 임포트
import '../Main/Feed.css';
// 이미지 임포트
import UserPic from '../../img/my-pic.jpg';
import FeedPic from '../../img/2.jpg';

class Feed extends Component {
  render() {
    return (
      <div className="feeds">
        <article>
          {/* <!-- 여기에 피드 하나씩 올라감. --> */}
          {/* <!-- 상단 유저 아이디 박스 --> */}
          <div className="feed-user-id-box">
            <div className="feed-user-pic-wrap">
              <img src={UserPic} alt="" />
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
            <img src={FeedPic} alt="" />
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

    );
  }
}

export default Feed;