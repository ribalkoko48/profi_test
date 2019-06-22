import React from 'react'
import {render} from 'react-dom'
import AppContainer from './container'
import './style.scss'

export function renderApp() {
    render(
        <AppContainer/>,
        document.getElementById('root'))
}

renderApp()