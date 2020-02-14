import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userinfo: [
				{
					id: '0',
					userid: 'zuzu',
					password: '0000',
					img: '',
					intro: ''
				},
				{
					id: '1',
					userid: 'wecode',
					password: '1111',
					img: '',
					intro: ''
				},
				{
					id: '2',
					userid: 'wework',
					password: '2222',
					img: '',
					intro: ''
				}
			],
			userid: '',
			password: '',
			btnOpacityToggle: false,
			pointer: 'default'
		};
	}

	// ! 버튼 클릭 이벤트
	handleClick = (e) => {
		// e.preventDefault();
		console.log('버튼클릭 이벤트 시작');
		for (let i = 0; i < this.state.userinfo.length; i++) {
			// console.log('반복문 시작', i, this.state.userid, this.state.userinfo[i]);
			if (
				this.state.userid === this.state.userinfo[i].userid &&
				this.state.password === this.state.userinfo[i].password
			) {
				console.log('전부같앙');
				// todo 페이지 이동하기!
			} else {
				// 인풋창 리셋

				this.setState({ userid: '', password: '', btnOpacityToggle: false });
			}
		}
	};
	handleKeypress = (e) => {
		// console.dir(e);
		if (e.code === 'Enter' && this.state.btnOpacityToggle) {
			this.handleClick();
		}
	};
	// ! input Length check!
	checkIdPw = (id, pw) => {
		if (id && pw) {
			// console.log('이벤트실행');
			this.setState({ btnOpacityToggle: true });
			// * 만약 인풋창에 내용이 있을때 버튼 커서 포인터로 변경
			if (this.state.btnOpacityToggle) {
				this.setState({ pointer: 'pointer' });
			} else {
				this.setState({ pointer: 'default' });
			}
		} else {
			this.setState({ btnOpacityToggle: false });
		}
	};
	handleChangeId = async (e) => {
		await this.setState({ userid: e.target.value });
		// console.log('아이디', this.state.userid, '비번', this.state.password);
		this.checkIdPw(this.state.userid, this.state.password);
	};
	handleChangePw = async (e) => {
		await this.setState({ password: e.target.value });
		this.checkIdPw(this.state.userid, this.state.password);
	};

	// ! 첫 로딩 이후 엔터 이벤트걸기
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeypress);
	}
	// ! 로그인 된 이후 키다운 이벤트 리스너 제거
	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeypress);
	}
	render() {
		return (
			<>
				<main>
					<div className='center-wrap'>
						<div className='login-wrap'>
							<div className='logo-img'></div>
							<div className='form-wrap'>
								<form>
									<div className='input-warp'>
										<input
											onChange={this.handleChangeId}
											type='text'
											name=''
											id=''
											placeholder='전화번호, 사용자 이름 또는 이메일'
											value={this.state.userid}
										/>
									</div>
									<div className='input-warp'>
										<input
											onChange={this.handleChangePw}
											type='password'
											placeholder='비밀번호'
											value={this.state.password}
										/>
									</div>
									<button type='button' className='hide-show-pw-btn'>
										비밀번호 표시
									</button>
									<div className='input-wrap'>
										<button
											type='button'
											className='submit-btn'
											onClick={this.handleClick}
											style={{
												cursor: this.state.pointer,
												opacity: this.state.btnOpacityToggle ? 1 : 0.5
											}}>
											로그인
										</button>
									</div>
								</form>
							</div>
							<div className='forget-pw'>
								<p>
									<a href='/'>비밀번호를 잊으셨나요?</a>
								</p>
							</div>
						</div>
					</div>
				</main>
				<footer>
					<div className='footer-container'></div>
				</footer>
				<script src='js/login.js'></script>
			</>
		);
	}
}

export default Login;
