import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { API_URL } from "../../config";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      password: "",
      btnOpacityToggle: false,
      pointer: "default",
      visible: false,
      showPw: false,
    };
  }
  // 메인페이지로 이동
  goToMain = () => {
    this.props.history.push("/main");
  };
  // ! 버튼 클릭 이벤트
  handleClick = (e) => {
    // e.preventDefault();
    console.log("버튼클릭 이벤트 시작");
    fetch(API_URL + "/account/sign_in", {
      method: "POST",
      body: JSON.stringify({
        user_name: this.state.userid,
        password: this.state.password,
      }),
    })
      .then((res) => {
        console.log("응답", res);
        return res.json();
      })
      .then((res) => {
        console.log("제이슨응답", res);
        if (res.token) {
          console.log("제이슨토큰응답", res.token);
          localStorage.setItem("westa-token", res.token);
          this.goToMain();
        }
      });
  };
  handleKeypress = (e) => {
    // console.dir(e);
    if (e.code === "Enter" && this.state.btnOpacityToggle) {
      this.handleClick();
    }
  };
  handleShowPw = (e) => {
    this.setState({ showPw: !this.state.showPw });
  };
  // ! input Length check!
  checkIdPw = (id, pw) => {
    if (id && pw) {
      // console.log('이벤트실행');
      this.setState({ btnOpacityToggle: true });
      // 만약 인풋창에 내용이 있을때 버튼 커서 포인터로 변경
      if (this.state.btnOpacityToggle) {
        this.setState({ pointer: "pointer" });
      } else {
        this.setState({ pointer: "default" });
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
    if (this.state.password) {
      this.setState({ visible: true });
    }
    this.checkIdPw(this.state.userid, this.state.password);
    // async와 await는 처리작업을 할때 해당 정보를 받아 처리하기 전까지 기다리도록 하는것이 좋단다.
  };

  // ! 첫 로딩 이후 엔터 이벤트걸기
  componentDidMount() {
    // ! 여기에는 API/fatch 할때나 쓴단다 ㅋㅋ
    window.addEventListener("keydown", this.handleKeypress);
  }
  // ! 로그인 된 이후 키다운 이벤트 리스너 제거
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeypress);
  }

  render() {
    return (
      <>
        <main>
          <div className="center-wrap">
            <div className="login-wrap">
              <div className="logo-img"></div>
              <div className="form-wrap">
                <form>
                  <div className="input-warp">
                    <input
                      onChange={this.handleChangeId}
                      type="text"
                      name=""
                      id=""
                      placeholder="전화번호, 사용자 이름 또는 이메일"
                      value={this.state.userid}
                    />
                  </div>
                  <div className="input-warp">
                    <input
                      onChange={this.handleChangePw}
                      type={this.state.showPw ? "text" : "password"}
                      placeholder="비밀번호"
                      value={this.state.password}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={this.handleShowPw}
                    className={
                      this.state.visible
                        ? "hide-show-pw-btn visible"
                        : "hide-show-pw-btn hidden"
                    }
                  >
                    {/* 'hide-show-pw-btn'> */}
                    비밀번호 표시
                  </button>
                  <div className="input-wrap">
                    <button
                      type="button"
                      className="submit-btn"
                      onClick={this.handleClick}
                      style={{
                        cursor: this.state.pointer,
                        opacity: this.state.btnOpacityToggle ? 1 : 0.5,
                      }}
                    >
                      로그인
                    </button>
                  </div>
                </form>
              </div>
              <div className="forget-pw">
                <p>
                  <a href="/">비밀번호를 잊으셨나요?</a>
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="footer-container"></div>
        </footer>
        <script src="js/login.js"></script>
      </>
    );
  }
}

export default withRouter(Login);
