import React, { Component } from 'react';


// componentWillUnmount 사용중인 API를 제거하는데 사용되는 API
// componentDidCatch 에러코드를 잡는  API

const Promblematic = () => {
	throw (new Error('버그가 나타났다!'));
	return (
		<div>

		</div>
	);
};

class Counter extends Component {
	state = {
		number: 0,
		error : false
	}

	constructor(props) {
		super(props);
		console.log('constructor');
	}

	componentWillMount() {
		console.log('componentWillMount (deprecated)');
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		// 5 의 배수라면 리렌더링 하지 않음
		console.log('shouldComponentUpdate');
		if (nextState.number % 5 === 0) return false;
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate');
	}


	handleIncrease = () => {
		const { number } = this.state;
		this.setState({
			number: number + 1
		});
	}

	handleDecrease = () => {
		this.setState(
			({ number }) => ({
				number: number - 1
			})
		);
	};

	render() {
		// 에러코드작성방법
		// if (!this.props.object || !this.props.array || this.props.array.length ===0) return null;

		console.log('render');
		return (
			<div>
				<h1>카운터</h1>
				<div>값: {this.state.number}</div>
				<button onClick={this.handleIncrease}>+</button>
				<button onClick={this.handleDecrease}>-</button>
			</div>
		);
	}
}

export default Counter;