import React, { Component } from 'react';

export default class PhoneInfo extends Component {
	static defaultProps = {
		info: {
			name: '�̸�',
			phone: '010-0000-0000',
			id: 0
		},
	}

	state = {
		// �츮�� ���� ��ư�� ������ ? editing ���� true �� �������ٰ��Դϴ�.
		// �� ���� true �� ������, ������ �ؽ�Ʈ ���·� �����ִ� ������
		// input ���·� �����ְ� �˴ϴ�.
		editing: false,
		// input �� ���� �������̰�����? input ���� ��� ���ؼ� �� �ʵ带 ���� ����
		// �����մϴ�
		name: '',
		phone: '',
	}

	handleRemove = () => {
		// ���� ��ư�� Ŭ���Ǹ� onRemove �� id �־ ȣ��
		const { info, onRemove } = this.props;
		onRemove(info.id);
	}

	// editing ���� ������Ű�� �Լ��Դϴ�
	// true -> false, false -> true
	handleToggleEdit = () => {
		const { editing } = this.state;
		this.setState({ editing: !editing });
	}

	// input ���� onChange �̺�Ʈ�� �߻� �� ��
	// ȣ��Ǵ� �Լ��Դϴ�
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	}


	componentDidUpdate(prevProps, prevState) {
		// ���⼭��, editing ���� �ٲ� �� ó�� �� ������ �����ֽ��ϴ�.
		// ������ ��������, ������ ���� input�� ��Ÿ����,
		// ������ �����Ҷ�, input �� ������ �θ����� �������ݴϴ�.

		const { info, onUpdate } = this.props;
		if(!prevState.editing && this.state.editing) {
			// editing ���� false -> true �� ��ȯ �� ��
			// info �� ���� state �� �־��ش�
			this.setState({
				name: info.name,
				phone: info.phone
			})
		}

		if (prevState.editing && !this.state.editing) {
			// editing ���� true -> false �� ��ȯ �� ��
			onUpdate(info.id, {
				name: this.state.name,
				phone: this.state.phone
			});
		}
	}

	// VirtualDom ����ȭ
	shouldComponentUpdate(nextProps, nextState) {
		// ���� ���°� �ƴϰ�, info ���� ���ٸ� �������� ����
		if (!this.state.editing
			&& !nextState.editing
			&& nextProps.info === this.props.info) {
			return false;
		}
		// ������ ��쿣 ����������
		return true;
	}

	render() {
		console.log('render PhoneInfo ' + this.props.info.id);
		const style = {
			border: '1px solid black',
			padding: '8px',
			margin: '8px'
		};

		const { editing } = this.state;


		if (editing) { // �������
			return (
				<div style={style}>
					<div>
						<input
							value={this.state.name}
							name="name"
							placeholder="�̸�"
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<input
							value={this.state.phone}
							name="phone"
							placeholder="��ȭ��ȣ"
							onChange={this.handleChange}
						/>
					</div>
					<button onClick={this.handleToggleEdit}>send</button>
					<button onClick={this.handleRemove}>delete</button>
				</div>
			);
		}


		// �Ϲݸ��
		const {
			name, phone
		} = this.props.info;

		return (
			<div style={style}>
				<div><b>{name}</b></div>
				<div>{phone}</div>
				<button onClick={this.handleToggleEdit}>change</button>
				<button onClick={this.handleRemove}>delete</button>
			</div>
		);
	}
}
