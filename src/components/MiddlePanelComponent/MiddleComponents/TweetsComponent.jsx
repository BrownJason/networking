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
            {Object.keys(tweets).map(id => (
              <StreamComponent
                key={id}
                text={tweets[id].tweet}
                clicked={() => this.props.clicked(id)}
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
