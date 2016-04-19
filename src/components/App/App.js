import React from 'react'
import s from './App.scss'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'

class App extends React.Component {
	render() {
		return (
			<div className={s.root}>
				<Topbar />
				<div className={s.container}>
					<Sidebar />
					<div className={s.content}>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default App