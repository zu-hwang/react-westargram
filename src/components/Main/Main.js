import React, { Component } from 'react';
import './Main.css';

// 컴포넌트 임포트
import Nav from '../Main/Nav';
import Feed from '../Main/Feed';
import Side from '../Main/Side';

class Main extends Component {
	render() {
		return (
			<>
				<Nav />
				<main>
					<Feed />
					<Side />
				</main>
				<script src='js/main.js'></script>
			</>
		);
	}
}

export default Main;
