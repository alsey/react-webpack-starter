import React, {	Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import Hover from '../../decorators/Hover'
import s from './ListItem.scss'

@Hover
export default class ListItem extends Component {

	static propTypes = {
		icon: PropTypes.string,
		name: PropTypes.string.isRequired,
		href: PropTypes.string,
		className: PropTypes.string,
		hoverClassName: PropTypes.string,
		activeClassName: PropTypes.string,
		disableClassName: PropTypes.string,
		actived: PropTypes.bool,
		disable: PropTypes.bool
	}

	static defaultProps = {
		name: 'UNSPECIFIED',
		href: '#',
		className: s.item,
		hoverClassName: s.hover,
		activeClassName: s.active,
		disableClassName: s.disable,
		actived: false,
		disable: false
	}

	render() {

		return (
			<Link className={classnames(this.props.className, 
									  {[this.props.hoverClassName]: !this.props.disable && this.props.isHover,
									   [this.props.disableClassName]: this.props.disable})} 
			   	  to={this.props.href}
			   	  onClick={(e) => {if (this.props.disable) e.preventDefault()}}
			   	  onMouseOver={this.props.disable ? () => undefined : this.props.handleMouseOver}
				  onMouseOut={this.props.disable ? () => undefined : this.props.handleMouseOut}
				  onlyActiveOnIndex={this.props.disable ? false : this.props.actived}
				  activeClassName={this.props.disable ? '' : this.props.activeClassName}>
				<i className={classnames('fa', 'fa-lg', {[`fa-${this.props.icon}`]: this.props.icon})} aria-hidden="true"></i>
				<span>{this.props.name}</span>
			</Link>
		)
	}
}