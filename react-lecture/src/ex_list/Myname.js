import React from 'react';

export default class Myname extends React.Component{
	render(){
		return(
			<div>
				안녕하세요! 제이름은 <b>{this.props.name} 입니다.</b>
			</div>
		);
	}
}

Myname.defaultProps = {
	name : '기본이름'
};

// 함수형방식
// const Myname = ({name}) => {
// 	return(
// 		<div>
// 			안녕하세요!! 제이름은 {name} 입니다.
// 		</div>
// 	);
// };
// export default Myname;