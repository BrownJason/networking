import React, { Component, Fragment } from 'react'
import { middlePanel } from './MiddlePanel.css'
import TweetTimeline from './MiddleComponents/TweetTimeLineComponent'
import TweestsComponent from './MiddleComponents/TweetsComponent'

class middleComponent extends Component {
  render () {
    return (
      <Fragment>
        <div className={`${middlePanel} top-tweetTimeline`}>
          <TweetTimeline
            form={this.props.form}
            changed={this.props.changed}
            clicked={this.props.clicked}
            entered={this.props.entered}
            formValid={this.props.formValid}
          />
          <TweestsComponent
            tweets={this.props.tweets}
            clicks={this.props.clicks}
          />
        </div>
      </Fragment>
    )
  }
}

export default middleComponent
