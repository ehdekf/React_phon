import React from 'react';

export default class PhoneForm extends React.Component {
	state = {
		name: '',
		phone : ''
	};

	input_handleChange = (e) => {
		this.setState({
			// Computed property names 문법
			// event.target.name 으로 this.targeting 값을 받아올수있다.
			[e.target.name] : e.target.value
		})
	};

	handleSubmit = (e) => {
		// 페이지 리로딩 방지
		e.preventDefault();
		// 상태값을 초기화 onCreate
		this.props.onCreate(this.state);
		this.setState({
			name: '',
			phone: ''
		})
	};


	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					placeholder="이름"
					value={this.state.name}
					onChange={this.input_handleChange}
					name = "name"
				/>

				<input
					placeholder="전화번호"
					value={this.state.phone}
					onChange={this.input_handleChange}
					name = "phone"
				/>

				<button type="submit">등록</button>

				<div>{this.state.name} {this.state.phone}</div>
			</form>
		);
	}
}
