import React, { Component, Fragment } from 'react'
import { middlePanel } from '../../MiddlePanelComponent/MiddlePanel.css'
import NotifTweets from '../NotifTweets/NotifTweets'
import TweestsComponent
  from '../../MiddlePanelComponent/MiddleComponents/TweetsComponent'

class NotifMiddle extends Component {
  render () {
    return (
      <Fragment>
        <div className={`${middlePanel} top-tweetTimeline`}>
          <NotifTweets />
          <TweestsComponent
            tweets={this.props.tweets}
            clicks={this.props.clicks}
          />
        </div>
      </Fragment>
    )
  }
}

export default NotifMiddle
