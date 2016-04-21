import React from 'react'

const ActiveContext = ComposedComponent => class extends React.Component {

	static childContextTypes = {
		activeItem: React.PropTypes.func
	}

	state = {
		activeItem: null
	}

	getChildContext() {
		return {
			activeItem: (item) => {
				if (this.state.activeItem != null) {
					this.state.activeItem.setState({
						activeStatus: 0 // default
					})
				}

				item.setState({
					activeStatus: 2 // active
				})

				this.setState({
					activeItem: item
				})
			}
		}
	}

	render() {
		return <ComposedComponent {...this.props} />;
	}
}

export default ActiveContext