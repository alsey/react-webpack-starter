import React from 'react'
import s from './App.scss'
import Topbar from '../Topbar'
import Sidebar from '../Sidebar'

const App = () => (
	<div className={s.root}>
		<Topbar />
		<div className={s.container}>
			<Sidebar />
			<div className={s.content}>
			</div>
		</div>
	</div>
)

export default App