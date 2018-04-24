import React, { Fragment } from 'react'
import { middlePanel } from '../../MiddlePanelComponent/MiddlePanel.css'
import NotifTweets from '../NotifTweets/NotifTweets'
import TweestsComponentTwo from './MentionsStream/TweetsComponentTwo'

const mentionsMiddle = () => (
  <Fragment>
    <div className={`${middlePanel} top-tweetTimeline`}>
      <NotifTweets />
      <TweestsComponentTwo />
    </div>
  </Fragment>
)

export default mentionsMiddle
