import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import stationsData from '../data'
import Card from "../components/Card/index";
import Tabs from "../components/Tabs/index";
import './style.scss'

class AppContainer extends PureComponent {

    componentDidMount() {
        window.addEventListener('resize', this.handleResizeListener)

        this.handleResizeListener()
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizeListener)
    }

    handleResizeListener = () => {
        if (window.innerWidth <= 420) { // проверка на "column" не нужна, render только один раз сработает
            this.setState({
                contentFlow: 'column'
            })
        }

        // P.S. можно сделать логику с фиксацией последнего состояния, до авто переключения
    }

    state = {
        contentFlow: 'row'
    }

    renderCards() {
        const {contentFlow} = this.state
        const isRowContent = contentFlow === 'row'

        return stationsData.map((item, index) => (
            <Card key={item.stationName} index={index} isRowContent={isRowContent} {...item} />
        ))
    }


    handleChangeTab = (tabName) => () => {
        this.setState({
            contentFlow: tabName
        })
    }

    render() {
        const {contentFlow} = this.state
        const cardsClassName = classnames('underground__cards', {
            underground__cards_row: contentFlow === 'row'
        })

        return (
            <div className="underground">
                <Tabs activeTabName={contentFlow} handleChange={this.handleChangeTab} />
                <div className={cardsClassName}>{this.renderCards()}</div>
            </div>
        )
    }

}

export default AppContainer