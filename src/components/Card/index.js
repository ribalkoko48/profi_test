import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './style.scss'

class Card extends PureComponent {

    static propTypes = {
        index: PropTypes.number.isRequired,
        isRowContent: PropTypes.bool.isRequired,
        stationName: PropTypes.string.isRequired,
        lineColor: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
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
        const {isRowContent, stationName, lineColor, description} = this.props
        const cardClassName = classnames('card',
            {card_row: isRowContent})
        const imageClassName = classnames('card__image',
            {card__image_row: isRowContent,
            [stationName.replace(' ', '')]: stationName
            })
        const lineColorClassName = this.getLineColorClassName()

        return (
            <div className={cardClassName}>
                <div className={imageClassName} />
                <div className="card__infoBlock">
                    <div className="card__infoBlockHeader">
                        <div className="card__infoBlockTitle"><span>{stationName}</span> {isRowContent && <span className={lineColorClassName}>{lineColor}</span>}</div>
                        <p className="card__infoBlockDescription">{description}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Card