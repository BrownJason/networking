import React, { Component, Fragment } from 'react'
import StreamComponent from './StreamComponent/Stream'
import { streamTweets } from './Tweets.css'
import PropTypes from 'prop-types'

class TweestsComponent extends Component {
  render () {
    let tweets = this.props.tweets
    
    return (
      <Fragment>
        <div className={streamTweets}>
          <div className='streaming' id='tweet'>
            {Object.values(tweets).map(tweet => (
              <StreamComponent
                key={Math.random(Math.floor(1000))}
                text={tweet.tweet}
                clicked={this.handleTweetDelete}
              />
            ))}
          </div>
        </div>
      </Fragment>
    )
    
  }
}

TweestsComponent.propTypes = {
  tweets: PropTypes.object
}

export default TweestsComponent
