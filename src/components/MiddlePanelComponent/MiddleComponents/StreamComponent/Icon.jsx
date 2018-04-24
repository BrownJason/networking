import React from 'react'
import { tweetIcon } from './Stream.css'

const icon = () => (
  <a href='https://twitter.com/jaybro1990'>
    <img
      className={tweetIcon}
      float='left'
      src={require('../../../../images/profilePic.jpeg')}
      alt=''
    />
  </a>
)

export default icon
