import React, {
	Component,
	PropTypes
} from 'react'

const menu = {
	title: '容器管理',
	items: [{
		id: 1,
		name: '概览',
		href: 'cont-mgnt/overview'
	}, {
		id: 2,
		name: 'API说明',
		href: 'cont-mgnt/api'
	}, {
		id: 3,
		name: '服务状态',
		href: 'cont-mgnt/status'
	}, {
		id: 4,
		name: '服务管理',
		href: 'cont-mgnt/mgnt'
	}, {
		id: 5,
		name: '服务日志',
		href: 'cont-mgnt/logs'
	}]
}

function ContMgnt() {
	return (
		<div>
			<h1>TODO:容器管理</h1>
		</div>
	)
}

export default ContMgnt