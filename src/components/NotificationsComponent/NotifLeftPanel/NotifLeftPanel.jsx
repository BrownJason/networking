import React, { Fragment } from 'react'
import { LeftPanel, margin } from '../../LeftPanelComponent/LeftPanel.css'
import TrendingComponent from '../../LeftPanelComponent/TrendingComponent'

const notifLeftPanel = props => (
  <Fragment>
    <div className={`${LeftPanel} ${margin}`}>
      <TrendingComponent trend={props.trend} />
    </div>
  </Fragment>
)

export default notifLeftPanel
