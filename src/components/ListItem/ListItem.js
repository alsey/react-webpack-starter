import React, {	Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import HoverAndActive from '../../decorators/HoverAndActive'
import s from './ListItem.scss'

@HoverAndActive
export default class ListItem extends Component {

	static propTypes = {
		icon: PropTypes.string,
		name: PropTypes.string.isRequired,
		href: PropTypes.string,
		className: PropTypes.string,
		hoverClassName: PropTypes.string,
		activeClassName: PropTypes.string,
		actived: PropTypes.bool
	}

	static defaultProps = {
		name: 'UNSPECIFIED',
		href: '#',
		className: s.item,
		hoverClassName: s.hover,
		activeClassName: s.active,
		actived: false
	}

	conponentWillMount() {
		if (this.props.actived) {
			this.props.toActive()
		}		
	}

	render() {

		return (
			<Link className={classnames(this.props.className, 
									  {[this.props.hoverClassName]: this.props.isHover(), 
									   [this.props.activeClassName]: this.props.isActive()})} 
			   	  to={this.props.href}
			   	  onClick={this.props.handleClick}
			   	  onMouseOver={this.props.handleMouseOver}
				  onMouseOut={this.props.handleMouseOut}>
				<i className={classnames('fa', 'fa-lg', {[`fa-${this.props.icon}`]: this.props.icon})} aria-hidden="true"></i>
				<span>{this.props.name}</span>
			</Link>
		)
	}
}