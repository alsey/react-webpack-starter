import React from 'react'
import classnames from 'classnames'
import 'whatwg-fetch'
import s from './App.scss'
import PageHeader from '../PageHeader'
import Sidebar from '../Sidebar'
import ListItem from '../ListItem'
import Dropdown from '../Dropdown'

export default class App extends React.Component {

	state = {
		data: []
	}

	constructor(props) {
		super(props)
		this.load()
	}

	load() {
		fetch('/data/menu.json')
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				this.setState({
					data: json.data
				})
			}.bind(this)).catch(function(ex) {
				console.log('can\'t fetch menu content', ex)
			})
	}

	render() {
		return (
			<div className={s.root}>
				<PageHeader />
				<div className={s.container}>
					<Sidebar className={s.sidebar}
							 shrinkerClassName={s.shrinker}
							 expandClassName={s.expand}
							 shrinkClassName={s.shrink}>
						<ListItem icon='home'
								  name='仪表板'
								  href='/'
								  className={s.item}
								  hoverClassName={s.hover}
								  activeClassName={s.active}
								  actived={true} />
						{ this.state.data.map(data => {
							return (
								<Dropdown key={data.id} title={data.title} titleClassName={s.title} hoverClassName={s.hover}>
									{data.items.map(data => {
										return (
											<ListItem key={data.id} 
													  icon={data.icon}
													  name={data.name}
													  href={data.href}
													  className={s.item}
													  hoverClassName={s.hover}
													  activeClassName={s.active}
													  disableClassName={s.disable}
													  disable={data.disable ? true : false} />
										)
									})}
								</Dropdown>
							)
						})}
					</Sidebar>
					<div className={s.content}>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}