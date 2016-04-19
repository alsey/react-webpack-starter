import React from 'react'
import { Link } from 'react-router'

class Status extends React.Component {
	render() {
		return (
			<div>
				<p><Link to="auth/status/detail">详细信息</Link></p>
				<p><Link to="auth/status/env">环境与配置</Link></p>
				<hr />
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Status