import * as actionTypes from './actionType'

export const tweetChanged = (value, inputName) => {
  return {
    type: actionTypes.TWEET_CHANGED,
    value,
    inputName
  }
}

export const submitTweet = () => {
  return {
    type: actionTypes.TWEET_SUBMIT
  }
}
