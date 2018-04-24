import React, { Fragment } from 'react'
import { middlePanel } from '../../MiddlePanelComponent/MiddlePanel.css'
import NotifTweets from '../NotifTweets/NotifTweets'
import TweestsComponent
  from '../../MiddlePanelComponent/MiddleComponents/TweetsComponent'

const notifMiddle = props => (
  <Fragment>
    <div className={`${middlePanel} top-tweetTimeline`}>
      <NotifTweets tweeting={props.tweeting} change={props.change} />
      <TweestsComponent tweet={props.tweet} />
    </div>
  </Fragment>
)

export default notifMiddle
