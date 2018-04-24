import React, { Fragment } from 'react'
import WhoToFollowComponent from './RightPanels/WhoToFollowComponent'
import { rightPanel, blankSpace1, copyRight } from './RightPanel.css'

const rightComponent = props => (
  <Fragment>
    <div className={rightPanel}>
      <div className={blankSpace1}>
        <WhoToFollowComponent follower={props.follower} />
      </div>
      <div className={blankSpace1}>
        <span className={copyRight}>
          © 2018 This Social media site right here is da best of all! If you try
          to copy this, just beware, I can sue and I'm not afraid of you!
          <br />
          <br />
          P.S. - Just kidding you can copy if you want to.
        </span>
      </div>
    </div>
  </Fragment>
)

export default rightComponent
