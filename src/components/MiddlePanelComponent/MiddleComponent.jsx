import React, { Component, Fragment } from 'react'
import TweetTimeline from './MiddleComponents/TweetTimeLineComponent'
import TweestsComponent from './MiddleComponents/TweetsComponent'
import { middlePanel } from './MiddlePanel.css'

import axios from 'axios'

class middleComponent extends Component {
state = {
  tweetForm: {
    tweet: {
      value: '',
      placeholder: 'What are you thinking?'
    }
  },

  tweets: []
}

handleTweetChange = (event, input) => {
const tweetForm = {...this.state.tweetForm}
const updatedTweet = {...tweetForm[input]}
updatedTweet.value = event.target.value

tweetForm[input] = updatedTweet

this.setState({ tweetForm })

}

handleTweetSubmit = () => {
const tweets = Object.keys(this.state.tweetForm).reduce((res, key) =>{
  return key !== (null || undefined) 
  ? { ...res, [key]: this.state.tweetForm[key].value} 
  : {...res}
}, {})

axios
  .post('https://reactnetwork-fdc20.firebaseio.com/tweets.json', tweets)
}

  render() {

    let form = (
      <TweetTimeline 
      form={this.state.tweetForm}
      changed={this.handleTweetChange}
      clicked={this.handleTweetSubmit}
      />
    )

    return(
      <Fragment>
        <div className={`${middlePanel} top-tweetTimeline`}>
          <TweetTimeline {...form.props}/>
          <TweestsComponent tweets={this.props.tweets}/>
        </div>
      </Fragment>
    )
  }
}


export default middleComponent
