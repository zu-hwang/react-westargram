import React, { Component } from 'react';
// 스타일 임포트
import '../Main/Feed.css';
// 이미지 임포트
import UserPic from '../../img/my-pic.jpg';
import FeedPic from '../../img/2.jpg';

class Feed extends Component {
	constructor() {
		super();
		this.state = {
			userid: localStorage.getItem('userid'),
			repl: [],
			btnRepl: false,
			replVal: ''
		};
		this.replId = 0;
		this.maxRepl = 3;
		this.ThreeDotPic =
			'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png';
		this.HeartPic =
			'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png';
	}

	// ! 인풋 내용이 있을때, 밸류 받아 state저장. 게시버튼 활성화
	handleInputVal = (e) => {
		if (e.target.value) {
			console.log('인풋밸류 셋');
			this.setState({ btnRepl: true, replVal: e.target.value });
		} else {
			this.setState({ btnRepl: false });
		}
	};

	replPaint = (id, user, text) => {
		// 변수에 리플 객체 생성
		let repl = { id: id, username: user, text: text };
		// 배열에 리플객체 푸시
		let replArr = this.state.repl;
		replArr.push(repl);
		this.setState({ repl: replArr });
		console.log('페인트완료');
		return true;
	};

	// ! 엔터누르면 게시글 등록 > 버큰에 onChange
	handlePressEnter = (e) => {
		if (e.KeyCode === 13) {
			// todo 버튼 클릭하면 내용 등록 > 버튼에 onClick  paint함수 실행
			console.log(
				'엔터눌렀네',
				this.replId,
				this.state.userid,
				this.state.replVal
			);
			this.replPaint(this.replId, this.state.userid, this.state.replVal);
		}
	};
	// todo 버튼 클릭하면 내용 등록 > 버튼에 onClick
	handleBtnClick = (e) => {
		if (this.state.replVal) {
			console.log(
				'엔터눌렀네',
				this.replId,
				this.state.userid,
				this.state.replVal
			); //
			this.replPaint(this.replId, this.state.userid, this.state.replVal);
		}
	};

	// ! 리플이 3개 이상일때  {댓글더보기} 화면에 뿌리기
	checkReplNum = () => {
		if (this.replId >= this.maxRepl) {
			return true;
		} else {
			return false;
		}
	};
	render() {
		return (
			<div className='feeds'>
				<article>
					{/* <!-- 여기에 피드 하나씩 올라감. --> */}
					{/* <!-- 상단 유저 아이디 박스 --> */}
					<div className='feed-user-id-box'>
						<div className='feed-user-pic-wrap'>
							<img src={UserPic} alt='' />
						</div>
						<div className='feed-user-id'>{this.state.userid}</div>
						<div className='feed-three-dot-wrap'>
							<div className='three-dot-menu'>
								<a href='/'>
									<img src={this.ThreeDotPic} alt='' />
								</a>
							</div>
						</div>
					</div>
					{/* <!-- 피드 사진 --> */}
					<div className='feed-img-wrap'>
						<img src={FeedPic} alt='' />
					</div>
					{/* <!-- 피드 아이콘 --> */}
					<div className='feed-icons-wrap'>
						<div className='feed-icons-left'>
							<div className='icon-heart'>
								<a href='/'>
									<img src={this.HeartPic} alt='' />
								</a>
							</div>
							<div className='icon-balloon'>
								<a href='/'>
									<img
										src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png'
										alt=''
									/>
								</a>
							</div>
							<div className='icon-share'>
								<a href='/'>
									<img
										src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png'
										alt=''
									/>
								</a>
							</div>
						</div>
						<div className='feed-icon-rignt'>
							<div className='icon-bookmark'>
								<a href='/'>
									{' '}
									<img
										src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png'
										alt=''
									/>
								</a>
							</div>
						</div>
					</div>
					{/* <!-- 피드 댓글 --> */}
					<div className='feed-repl-wrap'>
						<div className='feed-like-text-wrap'>
							<button>
								좋아요 <span>151</span>개
							</button>
						</div>
						<div className='feed-repls'>
							<span>
								<a href='/' className='user-id'>
									{this.state.userid}
								</a>
								안녕하세요 ! 간만에 파티이머지 입니다. 작업실은 이제 많이 준비가
								되었답니다. 그래도 아직 손봐야하는 것들도 많고 들어와야하는
								<span role='img' aria-label='cying'>
									😭
								</span>{' '}
								잠시 시간이 나서 카카오톡으로 연락 주신
								<span>...</span>
								<button className='all-repl'>더보기</button>
							</span>
							{this.checkReplNum() ? (
								<span className='mention'>
									<a href='/'>댓글 {this.replId}개 모두보기</a>
								</span>
							) : null}

							{this.state.repl.map( repl => {
								<span className='others-repl'>
									<a href='/' className='user-id'>{repl.username}</a>{repl.text}
								<button type='button' className='repl-hover-three-dot hidden'>
									<img src={this.ThreeDotPic} alt='' />
								</button>
								<button type='button' className='heart-btn'>
									<img src={this.HeartPic} alt='' />
								</button>
							</span>}
						</div>

						<span className='feed-time'>2시간 전</span>
					</div>
					{/* <!-- 댓글쓰기 --> */}
					{/* </button> */}
					<div className='send-repl-wrap'>
						<div className='form-div'>
							<div className='input-wrap'>
								<input
									onChange={this.handleInputVal}
									onKeyUp={this.handlePressEnter} // ! 준식님 온첸지로 다 된다면서 왜 안돼요!!!!!! 왜안돼요!!!!
									className='repl-input'
									type='text'
									placeholder='댓글 달기...'
								/>
							</div>
							<div className='submit-wrap'>
								<button
									onClick={this.handleBtnClick}
									style={{ cursor: this.state.replVal ? 'pointer' : 'dafault' }}
									// 여기도 마우스 커서 안먹음..ㅠㅠ
									className={
										this.state.btnRepl
											? 'repl-input opacity-1-0 pointer'
											: 'repl-input opacity-0-5 default-mouse'
									}
									// 여기서 커서모양 적용 안됨.. 왜안됭.....
									type='button'>
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
