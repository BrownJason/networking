import React from 'react'
import ProfileComponent from './ProfileComponent'
import TrendingComponent from './TrendingComponent'
import { LeftPanel } from './LeftPanel.css'

const leftPanel = props => (
  <div className={LeftPanel}>
    <ProfileComponent />
    <TrendingComponent trend={props.trend} />
  </div>
)

export default leftPanel
