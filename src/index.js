import React from 'react'
import {render} from 'react-dom'
import {Router} from 'react-router-dom'
import {createHashHistory} from 'history'
import './style.scss'

export function renderApp() {
    render(
            <Router history={createHashHistory()}>
                <div>hello profi</div>
            </Router>,
        document.getElementById('root'))
}

renderApp()