import React from 'react'
import s from './ContMgnt.scss'
import Sidebar from '../../components/Sidebar'
import ListItem from '../../components/ListItem'
import ListGroup from '../../components/ListGroup'

function ContMgnt(props) {
	return (
		<div className={s.root}>
			<Sidebar className={s.sidebar}
					 shrinkerClassName={s.shrinker}
					 expandClassName={s.expand}
					 shrinkClassName={s.shrink}>
				<ListGroup title='容器管理' titleClassName={s.title}>
					<ListItem name='概览' href='cont-mgnt/overview' actived={true} className={s.item} hoverClassName={s.hover} activeClassName={s.active} disableClassName={s.disable} />
					<ListItem name='API说明' href='cont-mgnt/api' className={s.item} hoverClassName={s.hover} activeClassName={s.active} disableClassName={s.disable} />
					<ListItem name='服务状态' href='cont-mgnt/status' className={s.item} hoverClassName={s.hover} activeClassName={s.active} disableClassName={s.disable} />
					<ListItem name='服务管理' href='cont-mgnt/mgnt' className={s.item} hoverClassName={s.hover} activeClassName={s.active} disableClassName={s.disable} />
					<ListItem name='服务日志' href='cont-mgnt/logs' className={s.item} hoverClassName={s.hover} activeClassName={s.active} disableClassName={s.disable} />
				</ListGroup>
			</Sidebar>
			<div className={s.content}>
				{props.children}
			</div>
		</div>
	)
}

export default ContMgnt