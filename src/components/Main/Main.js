import React, { Component } from "react";
import { API_URL, TOKEN } from "../../config";
import "./Main.css";
// 컴포넌트 임포트
import Nav from "../Main/Nav";
import Feed from "../Main/Feed";
import Side from "../Main/Side";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      //! 피드 정보 넣기.
      feedList: [],
      loginUser: "",
    };
  }

  componentDidMount = () => {
    console.log("페치 시작");
    console.log(typeof TOKEN);
    fetch(`${API_URL}/feed`, {
      method: "GET",
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((response) => {
        console.log("왜안오뇽");
        return response.json();
      })
      .then((result) => {
        console.log("해더에 정보가 없다?", result);
        this.setState({ feedList: result.data, loginUser: result.user_name });
      })
      .catch((error) => console.log("error는 말이죠?", error));
  };

  render() {
    const { feedList, loginUser } = this.state;
    return (
      <>
        <Nav />
        <main>
          <div className="feed-wrap">
            {feedList.map((li) => {
              return <Feed key={li.id} data={li} loginUser={loginUser} />;
            })}
          </div>
          <Side />
        </main>
        <script src="js/main.js"></script>
      </>
    );
  }
}

export default Main;
