import { TWEET_SUBMIT } from './actionType'
import axios from 'axios'

export const submitTweets = () => ({ type: TWEET_SUBMIT })

export const submitTweetsAsync = () => {
  const tweet = Object.keys(submitTweets).reduce((res, key) => {
    return key !== null
      ? { ...res, [key]: submitTweets[key].value }
      : { ...res }
  }, {})
  return dispatch => {
    axios
      .post('https://reactnetwork-fdc20.firebaseio.com/tweets.json', tweet)
      .then(res => {
        return {
          tweetForm: {
            tweet: {
              value: '',
              type: 'text',
              placeholder: 'What are you thinking?',
              valid: false,
              touched: false,
              rules: {
                required: true,
                minLength: 2,
                maxLength: 255
              }
            }
          }
        }
      })
  }
}
