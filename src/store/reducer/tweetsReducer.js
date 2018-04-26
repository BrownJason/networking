import * as actionTypes from '../actions/actionType'
import { updateObject } from '../utility'

const initialState = {
  tweets: {}
}

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TWEETS:
      return updateObject(state, { tweets: action.tweets })
    default:
      return state
  }
}

export default tweetsReducer
