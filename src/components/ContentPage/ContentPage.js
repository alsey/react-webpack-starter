import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import s from './ContentPage.scss';

export default class ContentPage extends Component {

	render() {
		return (
			<div className={s.root}>
				<div className={s.header}>
					<div className={s.left}>
						<span className={s.title}>服务:ngcp-auth</span>
						<span className={s.status}>UP</span>
					</div>
					<div className={s.right}>
						<span className="fa-stack fa-lg">
							<i className="fa fa-square-o fa-stack-2x"></i>
							<i className="fa fa-refresh fa-stack-1x"></i>
						</span>
					</div>
				</div>
				{this.props.children}
			</div>
		)
	}
}
