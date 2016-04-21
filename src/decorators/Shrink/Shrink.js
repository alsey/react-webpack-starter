import React from 'react'
import autobind from 'autobind-decorator'

const Shrink = ComposedComponent => class extends React.Component {

	state = {
		shrink: false
	}

	@autobind
	handleClick(e) {
		this.setState({
			shrink: !this.state.shrink
		})
	}

	@autobind
	isShrink() {
		return this.state.shrink
	}

	render() {
		return <ComposedComponent {...this.props} handleShrink={this.handleClick} isShrink={this.isShrink} />;
	}
}

export default Shrink