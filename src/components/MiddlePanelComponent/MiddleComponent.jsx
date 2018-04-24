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
      placeholder: 'What are you thinking?',
      valid: false,
      touched: false,
      rules: {
        required: true,
        minLength: 2,
        maxLength: 255
      }
    }
  },
  formValid: false,

  tweets: []
}

checkValidity(value, rules) {
  let isValid = true

  if(!rules) {
    return true
  }

  if(rules.required) {
    isValid = value.trim() !== '' && isValid
  }

  if(rules.minLength) {
    isValid = value.length >= rules.minLength && isValid
  }

  if(rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid
  }

  return isValid
}

handleTweetChange = (event, input) => {
const tweetForm = {...this.state.tweetForm}
const updatedTweet = {...tweetForm[input]}
updatedTweet.value = event.target.value
updatedTweet.valid = this.checkValidity(
  updatedTweet.value,
  updatedTweet.rules
)

updatedTweet.touched = true
tweetForm[input] = updatedTweet

let formValid = true
Object.keys(tweetForm).forEach(input =>{
  formValid = tweetForm[input].valid && formValid
})

this.setState({ tweetForm, formValid })
}

handleTweetSubmit = () => {
  if(this.state.formValid) {
    this.setState({
      
    })
  }
const tweets = Object.keys(this.state.tweetForm).reduce((res, key) =>{
  return key !== (null || undefined || '') 
  ? { ...res, [key]: this.state.tweetForm[key].value} 
  : {...res}
}, {})

axios
  .post('https://reactnetwork-fdc20.firebaseio.com/tweets.json', tweets)
}

handleTweetDelete = (event) =>{
  axios.delete('https://reactnetwork-fdc20.firebaseio.com/tweets/' + this.setState({tweets: this.state.tweets}))
}

  render() {

    let form = (
      <TweetTimeline 
      form={this.state.tweetForm}
      changed={this.handleTweetChange}
      clicked={this.handleTweetSubmit}
      formValid={this.state.formValid}
      />
    )

    return(
      <Fragment>
        <div className={`${middlePanel} top-tweetTimeline`}>
          <TweetTimeline {...form.props}/>
          <TweestsComponent tweets={this.props.tweets} clicked={this.handleTweetDelete}/>
        </div>
      </Fragment>
    )
  }
}


export default middleComponent
