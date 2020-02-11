import React, { Component } from 'react';




class Login extends Component {
  render() {
    return (
      <>
        <main>
          <div className="center-wrap">
            <div className="login-wrap">
              <div></div>
              <div className="form-wrap">
                <form>
                  <div className="input-warp">
                    <input type="text" name="" id="" placeholder="전화번호, 사용자 이름 또는 이메일" />
                  </div>
                  <div className="input-warp">
                    <input type="password" placeholder="비밀번호" />

                  </div>
                  <button type="button" className="hide-show-pw-btn">비밀번호 표시</button>
                  <div className="input-warp">
                    <button type="button" className="submit-btn">
                      로그인</button></div>
                </form>
              </div>
              <div className="forget-pw">
                <p><a href="/">비밀번호를 잊으셨나요?</a></p>
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


export default Login;