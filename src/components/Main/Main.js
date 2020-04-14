import React, { Component } from "react";
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
      feedList: [
        {
          id: 0,
          userId: "piggys_favorite",
          feedPic: Feed,
          text: "오늘은 뭘하지~",
        },
        { id: 1, userId: "things_csmf", feedPic: Feed, text: "오늘은 뭘하지~" },
        { id: 2, userId: "seenaeme", feedPic: Feed, text: "포포포포포포포" },
        { id: 3, userId: "bnv_dana", feedPic: Feed, text: "벌써토요일" },
      ],
    };
  }
  render() {
    return (
      <>
        <Nav />
        <main>
          <Feed />
          <Side />
        </main>
        <script src="js/main.js"></script>
      </>
    );
  }
}

export default Main;
