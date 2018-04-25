import React, { PureComponent, Fragment } from 'react'
import {
  tweetUser,
  avatarUser,
  size32,
  boxShadow,
  t1FormTweet
} from './TweetTimeline.css'

import FormInput from './FormInput/FormInput'

class TweetTimeline extends PureComponent {
  render () {
    const form = this.props.form

    return (
      <Fragment>
        <div className={boxShadow}>
          <div className={tweetUser}>
            <img
              className={`${tweetUser} ${avatarUser} ${size32}`}
              src={require('../../../images/profilePic.jpeg')}
              alt=''
            />
            <form className={t1FormTweet}>
              {Object.keys(form).map(input => (
                <FormInput
                  key={input}
                  value={form[input].value}
                  changed={event => this.props.changed(event, input)}
                  type={form[input].type}
                  placeholder={form[input].placeholder}
                  valid={form[input].valid}
                  touched={form[input].touched}
                />
              ))}
            </form>
            <button
              onClick={this.props.clicked}
              disabled={!this.props.formValid}
            >
              Post
            </button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default TweetTimeline
