import { GET_TWEETS } from './actionType'
import axios from 'axios'

export const getTweets = tweets => ({ type: GET_TWEETS, tweets })

export const getTweetsAsync = () => {
  return dispatch => {
    axios
      .get('https://reactnetwork-fdc20.firebaseio.com/tweets.json')
      .then(response => {
        dispatch(getTweets(response.data))
      })
      .catch(err => console.log(err))
  }
}
