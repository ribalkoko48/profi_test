import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './style.scss'

const VISIBLE_DELAY = 100

class Card extends PureComponent {

    static propTypes = {
        index: PropTypes.number.isRequired,
        isRowContent: PropTypes.bool.isRequired,
        stationName: PropTypes.string.isRequired,
        lineColor: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }

    componentDidMount() {
        this.visibleTimer = setTimeout(() => {
            this.setState({
                isCardVisible: true
            })
        }, VISIBLE_DELAY * this.props.index)
    }

    componentDidUpdate(prevProps) {
        const {isRowContent} = this.props

        if (isRowContent !== prevProps.isRowContent) {
            this.setState({
                isCardVisible: false
            })
            this.visibleTimer = setTimeout(() => {
                this.setState({
                    isCardVisible: true
                })
            }, VISIBLE_DELAY * this.props.index)
        }
    }

    componentWillUnmount() {
        if (this.visibleTimer) clearTimeout(this.visibleTimer)
    }

    visibleTimer = null

    state = {
        isCardVisible: false
    }

    getLineColorClassName() {
        switch (this.props.lineColor) {
            case 'red line':
                return 'card__infoBlockLineColor card__infoBlockLineColor_red'

            case 'blue line':
                return 'card__infoBlockLineColor card__infoBlockLineColor_blue'

            default:
                return 'card__infoBlockLineColor card__infoBlockLineColor_green'
        }
    }

    render() {
        const {isRowContent, stationName, lineColor, description, index} = this.props
        const {isCardVisible} = this.state
        const cardClassName = classnames('card',
            {
                card_row: isRowContent,
                card_visible: isCardVisible
            })
        const imageClassName = classnames('card__image',
            {
                card__image_row: isRowContent,
                [stationName.replace(' ', '')]: true
            })
        const lineColorClassName = this.getLineColorClassName()

        return (
            <div key={isRowContent + index} className={cardClassName}>
                <div className={imageClassName} />
                <div className="card__infoBlock">
                    <div className="card__infoBlockHeader">
                        <div className="card__infoBlockTitle"><span>{stationName}</span> {isRowContent &&
                        <span className={lineColorClassName}>{lineColor}</span>}</div>
                        <p className="card__infoBlockDescription">{description}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Card