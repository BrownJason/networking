import React, { Fragment } from 'react'
import StreamComponent from './Stream'
import {
  streamTweets
} from '../../../MiddlePanelComponent/MiddleComponents/Tweets.css'
import { webIcon} from './BottomMentions.css'
import {Link} from 'react-router-dom'

const tweestsComponentTwo = () => (
  <Fragment>
    <div className={streamTweets}>
      <div className='streaming'>
        <StreamComponent />
      </div>
      <div className={webIcon}>
        <Link to='/'>
            <img src={require('../../../../images/cool-icon.jpg')} alt='' />
        </Link>
      </div>
    </div>
  </Fragment>
)

export default tweestsComponentTwo
