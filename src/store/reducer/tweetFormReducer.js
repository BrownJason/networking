import * as actions from '../actions/actionType'
import axios from 'axios'
import { updateObject } from '../utility'

const initialState = {
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
  },
  tweetFormValid: false
}

const tweetFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TWEET_CHANGED:
      const valid = checkValidity(
        action.value,
        state.tweetForm[action.inputName].rules
      )

      console.log(valid)

      return updateObject(state, {
        tweetForm: updateObject(state.tweetForm, {
          [action.inputName]: updateObject(state.tweetForm[action.inputName], {
            value: action.value,
            valid,
            touched: true
          })
        }),
        tweetFormValid: Object.keys(state.tweetForm).reduce(
          (formValid, inputName) => valid && formValid,
          true
        )
      })
    case actions.TWEET_SUBMIT:
      const tweet = Object.keys(state.tweetForm).reduce((res, key) => {
        return key !== null
          ? { ...res, [key]: state.tweetForm[key].value }
          : { ...res }
      }, {})
      // return dispatch => {
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
      // }
      return state
    default:
      return state
  }
}

const checkValidity = (value, rules) => {
  let isValid = true

  if (!rules) {
    return true
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid
  }

  return isValid
}

export default tweetFormReducer
