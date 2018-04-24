import React, { Fragment } from 'react'
import {
  streamItems,
  header,
  tweetIcon,
  tweeters,
  userTag,
  bold,
  message,
  border,
  links
} from '../../../MiddlePanelComponent/MiddleComponents/StreamComponent/Stream.css'
const streamComponentTwo = () => (
  <Fragment>
    <div className={streamItems}>
      <div className={border}>
        <div className={tweeters}>
          <img
            className={tweetIcon}
            float='left'
            src={require('../../../../images/profilePic.jpeg')}
            alt=''
          />
          <div className={header}>
            <span className={bold}>No help for you!</span>
            <span className={userTag}> @NoOne · 5m</span>
          </div>
          <div className={message}>
            <span>
              Hey, did you ever figure out how to get the modal working with react?
              <a href='https://twitter.com/wmarttala' className={links}>@WillMarttala</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
)

export default streamComponentTwo
