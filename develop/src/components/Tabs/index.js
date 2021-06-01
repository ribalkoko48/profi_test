import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function getTabClassName(tabName, activeTabName) {
    return activeTabName === tabName
        ? 'tabs__tab tabs__tab_active'
        : 'tabs__tab'
}

const Tabs = ({activeTabName, handleChange}) => (
    <div className="tabs">
        <div onClick={handleChange('row')} className={getTabClassName('row', activeTabName)}>Списком</div>
        <div onClick={handleChange('column')} className={getTabClassName('column', activeTabName)}>Плиткой</div>
    </div>
)

Tabs.propTypes = {
    activeTabName: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default Tabs