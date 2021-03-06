import React, { Component } from "react";

class Repl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delBtnHover: false,
    };
    // const { id, username, text } = this.props;
    this.styleTrue = "repl-hover-three-dot visible";
    this.styleFalse = "repl-hover-three-dot hidden";
    // console.log(this.props);
  }

  handleMouseOver = (e) => {
    if (this.state.delBtnHover === false) {
      this.setState({ delBtnHover: true });
    }
  };

  handleMouseOut = (e) => {
    if (this.state.delBtnHover === true) {
      this.setState({ delBtnHover: false });
    }
  };

  render() {
    console.log(this.props.replUser);
    return (
      <span
        id={this.props.id}
        className="others-repl"
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <a href="/" className="user-id">
          {this.props.replUser}
        </a>
        {this.props.replText}
        <button
          type="button"
          onClick={this.props.handleDelRepl}
          className={this.state.delBtnHover ? this.styleTrue : this.styleFalse}
        >
          <img id={this.props.id} src={this.props.threeDotPic} alt="" />
        </button>
        <button type="button" className="heart-btn">
          <img src={this.props.heartPic} alt="" />
        </button>
      </span>
    );
  }
}

export default Repl;
