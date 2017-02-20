/**
 * Created by andrewgross on 2/19/17.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Container from './Container'

const render = (Component) => {
	ReactDOM.render(
			<Component/>,
		document.getElementById('app')
	)
}

render(Container)