import React from 'react'
import { Link } from 'react-router'

class Auth extends React.Component { 
	render() {
		return (
			<div>
				{/* FIXME */}
				<p><Link to="auth/overview">概览</Link></p>
				<p><Link to="auth/status">服务状态</Link></p>
				<hr />
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Auth