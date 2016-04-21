import React from 'react'
import autobind from 'autobind-decorator'

const HoverAndActive = ComposedComponent => class extends React.Component {

	static propTypes = {
		actived: React.PropTypes.bool
	}

	static defaultProps = {
		actived: false
	}

	componentWillMount() {
		if (this.context.activeItem && this.props.actived) {
			this.context.activeItem(this)
		}
	}

	static contextTypes = {
		activeItem: React.PropTypes.func
	}

	@autobind
	handleClick(e) {
		if (this.context.activeItem) {
			this.context.activeItem(this)
		}
	}

	state = {
		activeStatus: 0 /* 0: default, 1: mouse over, 2: selected*/
	}

	@autobind
	handleMouseOver(e) {
		if (this.state.activeStatus != 2) this.setState({
			activeStatus: 1 // hover
		})
	}

	@autobind
	handleMouseOut(e) {
		if (this.state.activeStatus != 2) this.setState({
			activeStatus: 0 // default
		})
	}

	@autobind
	isActive() {
		return this.state.activeStatus == 2
	}

	@autobind
	isHover() {
		return this.state.activeStatus == 1
	}

	render() {
		return <ComposedComponent handleClick={this.handleClick} 
								  handleMouseOver={this.handleMouseOver}
								  handleMouseOut={this.handleMouseOut}
								  isActive={this.isActive}
								  isHover={this.isHover}
								  {...this.props} />;
	}
}

export default HoverAndActive