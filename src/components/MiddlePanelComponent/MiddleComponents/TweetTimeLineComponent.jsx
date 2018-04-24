import React, { PureComponent, Fragment } from 'react'
import {
  tweetUser,
  avatarUser,
  size32,
  boxShadow,
  t1FormTweet
} from './TweetTimeline.css'

// import StreamComponent from './StreamComponent/Stream'

import FormInput from './FormInput/FormInput'

class TweetTimeline extends PureComponent {
  render() {
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
          <form className={t1FormTweet} > 
            {Object.keys(form).map(input => (
              <FormInput
                value={form[input].value}
                changed={event => this.props.changed(event, input)}
                placeholder={form[input].placeholder}
              />
            ))}
          </form>
          <button type='button' href='/' onClick={this.props.clicked.bind(this)}> Post</button>
        </div>
      </div>
    </Fragment>
    )
  }
}

export default TweetTimeline
