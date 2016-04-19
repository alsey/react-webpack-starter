import React from 'react'
import { Link } from 'react-router'
import s from './Sidebar.scss';

const Sidebar = () => (
	<div className={s.root}>
		{/*FIXME!*/}
		<p><Link to="auth" activeClassName={s.active}>认证与授权</Link></p>
		<p><Link to="cont-mgnt" activeClassName={s.active}>容器管理</Link></p>
	</div>
)

export default Sidebar