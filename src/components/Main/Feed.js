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
			replShow: true,
			btnRepl: false,
			replVal: '',
			delBtnHover: false,
			selectrepl: ''
		};
		this.styleTrue = 'repl-hover-three-dot visible';
		this.styleFalse = 'repl-hover-three-dot hidden';
		this.replId = 0;
		this.maxRepl = 3;
		this.ThreeDotPic =
			'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png';
		this.HeartPic =
			'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png';
	}

	handleMouseOver = (e) => {
		if (this.state.delBtnHover === false) {
			this.setState({ delBtnHover: true });
		}
	};
	handleMouseOut = () => {
		if (this.state.delBtnHover === true) {
			this.setState({ delBtnHover: false });
		}
	};
	// ! 인풋 내용이 있을때, 밸류 받아 state저장. 게시버튼 활성화
	handleInputVal = (e) => {
		//onChange
		console.log(e.target.value.length);
		if (e.target.value.length > -1) {
			console.log('인풋밸류 셋');
			this.setState({ btnRepl: true, replVal: e.target.value });
		} else {
			this.setState({ btnRepl: false });
		}
	};

	replPaint = (id, user, text) => {
		// 변수에 리플 객체 생성
		let repl = { id: id, username: user, text: text };
		this.replId++;
		// 배열에 리플객체 푸시
		let replArr = this.state.repl;
		replArr.push(repl);
		this.setState({ repl: replArr, replVal: '', btnRepl: false });
		console.log('페인트완료 & 인풋창 리셋');
		return true;
	};

	// ! 엔터누르면 게시글 등록
	handlePressEnter = (e) => {
		if (e.key === 'Enter' && this.state.replVal) {
			// 버튼 클릭하면 내용 등록 > 버튼에 onClic k  paint함수 실행
			this.replPaint(this.replId, this.state.userid, this.state.replVal);
			e.target.value = '';
		}
	};

	// ! 버튼 클릭하면 게시글 등록
	handleBtnClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (this.state.replVal) {
			this.replPaint(this.replId, this.state.userid, this.state.replVal);
			// ....replVal = '';
			// todo 버튼 클릭했을때 인풋창의 밸류 초기화 하려는데 버튼 클릭으로는 우케함..
			// e의 타겟은 버튼이라 잡히지 않음.
		}
	};
	handleDelRepl = (e) => {
		console.log(e.target.id);
		this.setState();
		if (e.target.id in this.state.repl[e.target.id]) {
		}
		console.log(e.target); // 이미지 태그
		// debugger;
	};

	// ! 리플이 3개 이상일때  {댓글더보기} 화면에 뿌리기
	// checkReplNum = () => {
	// 	if (this.replId < this.maxRepl) {
	// 		// ? 2개 이하일때 댓글 다 써지기
	// 		this.setState({ replShow: true });
	// 		this.setState({ replShowMax: false });
	// 	} else if (this.replId >= this.maxRepl) {
	// 		// ? 댓글 3개 이상일때, 안내문에 댓글 모두보기 오픈,
	// 		// ? 최신 댓글 2개 오픈
	// 		this.setState({ replShowMax: true }); // for 실행
	// 		this.setState({ replshow: false }); // map 실행
	// 	}
	// };

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
							{/* 여기부터 댓글 더보기*/}
							{this.checkReplNum ? (
								<span className='mention'>
									<span
										onClick={this.setState({ replShow: !this.state.replShow })}>
										댓글 {this.replId}개 모두보기
									</span>
								</span>
							) : null}

							{/* 여기부터 댓글 목록 출력 */}
							{/* todo 댓글의 갯수가 2개 이하일 경우 모두 출력, 3개 이상일 경우 최근 2개만 출력 */}
							{this.state.repl.map((repl) => {
								return (
									// 리턴 묶어주기 꼭하기. // 내용 많으니 컴포넌트 만들까...?
									<span
										id={repl.id}
										key={repl.id}
										className='others-repl'
										onMouseOver={this.handleMouseOver}
										onMouseOut={this.handleMouseOut}>
										<a key={repl.id + 'a'} href='/' className='user-id'>
											{repl.username}
										</a>
										{repl.text}
										<button
											type='button'
											onClick={this.handleDelRepl}
											className={
												this.state.delBtnHover
													? this.styleTrue
													: this.styleFalse
											}>
											<img
												// onClick={this.handleDelRepl}
												id={repl.id}
												src={this.ThreeDotPic}
												alt=''
											/>
										</button>
										<button type='button' className='heart-btn'>
											<img src={this.HeartPic} alt='' />
										</button>
									</span>
								);
							})}
						</div>

						<span className='feed-time'>2시간 전</span>
					</div>
					{/* <!-- 댓글쓰기 --> */}
					{/* </button> */}
					<div className='send-repl-wrap'>
						<div className='form-div'>
							<div className='input-wrap'>
								<input
									value={this.state.replVal} //! 여기서 이거 주면 나중에 인풋에서 1자리 안지워짐
									// ! 인풋창 오류 1. 인풋창의 밸류 다 지워도 state에는 마지막 자리가 남아있다. 다지워지지 않고, 빈문자열일때 엔터치면 state에 남아있더 한자리 수가 등록된당.
									// ! state의 인풋창 내용이 안지워저서, 인풋창도 안지워짐.. state가 고대로 반영되니. state를 지울수 있는 법을 찾자.
									// * 조건문을 변경했더니 잘됨 ! 조건문 문제였나봐욥! 해결!
									onChange={this.handleInputVal}
									onKeyUp={this.handlePressEnter} // ! 준식님 온첸지로 왜안될까요..?
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
										this.state.replVal
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
