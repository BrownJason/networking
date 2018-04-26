import { TWEET_DELETE } from './actionType'
import axios from 'axios'

export const deleteTweets = id => ({ type: TWEET_DELETE, id })

export const deleteTweetsAsync = id => {
  return dispatch => {
    axios
      .delete(
        'https://reactnetwork-fdc20.firebaseio.com/tweets/' + id + '.json'
      )
      .then(res => {
        return {
          tweets: Object.keys(this.state.tweets)
            .filter(key => key !== id)
            .reduce(
              (result, next) => ({
                ...result,
                [next]: this.state.tweets[next]
              }),
              {}
            )
        }
      })
      .catch(err => console.log(err))
  }
}
