import React, { Fragment } from 'react'
import { middlePanel } from '../../MiddlePanelComponent/MiddlePanel.css'
import NotifTweets from '../NotifTweets/NotifTweets'
import TweestsComponent
  from '../../MiddlePanelComponent/MiddleComponents/TweetsComponent'

const notifMiddle = props => (
  <Fragment>
    <div className={`${middlePanel} top-tweetTimeline`}>
      <NotifTweets />
      <TweestsComponent tweets={props.tweets} />
    </div>
  </Fragment>
)

export default notifMiddle
