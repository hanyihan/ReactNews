import React from 'react';

export default class BodyIndex extends React.Component {
	render(){
		var userName = '韩晗';
		var boolInput = false;

		var html = 'IMOOC&nbsp;LESSON';

		return (
			<div>
				<h2>页面的主体内容</h2>
				<p>{userName==''? '用户未登录' : '用户名：' + userName}</p>
				<p><input type='button' value = {userName} disabled = {boolInput} /></p>
				<p>{html}</p>
				<p dangerouslySetInnerHTML = {{__html : html}}></p>
			</div>
		)
	}
}