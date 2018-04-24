import React, { Fragment } from 'react'
import { navRight, btn, avatarBtn, navRightIcon } from './IconToHome.css'

const iconToHome = () => (
  <Fragment>
    <ul className={navRight}>
      <li className='me'>
        <a href='https://twitter.com/jaybro1990' className={btn} id={avatarBtn}>
          <img
            className={navRightIcon}
            src={require('../../../../images/profilePic.jpeg')}
            alt=''
          />
        </a>
      </li>
    </ul>
  </Fragment>
)

export default iconToHome
