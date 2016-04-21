import React, {	Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import HoverAndActive from '../../decorators/HoverAndActive'
import Shrink from '../../decorators/Shrink'
import s from './Dropdown.scss'

@Shrink
@HoverAndActive
export default class Dropdown extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		titleClassName: PropTypes.string,
		hoverClassName: PropTypes.string
	}

	static defaultProps = {
		title: 'UNSPECIFIED',
		titleClassName: s.title,
		hoverClassName: s.hover
	}

	render() {

		return (
			<div>
				<div className={classnames(this.props.titleClassName, {[this.props.hoverClassName]: this.props.isHover()})}
					 onClick={this.props.handleShrink}
			   	  	 onMouseOver={this.props.handleMouseOver}
				  	 onMouseOut={this.props.handleMouseOut}>
					<i className={`fa fa-caret-${this.props.isHover() ? 'right' : this.props.isShrink() ? 'up' : 'down'}`} aria-hidden="true"></i>
					<span>{this.props.title}</span>
				</div>
				<div className={this.props.isShrink() ? s.hide : ''}>
					{this.props.children}
				</div>
			</div>
		)
	}
}