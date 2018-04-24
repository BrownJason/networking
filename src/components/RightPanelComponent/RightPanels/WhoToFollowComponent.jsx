import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { whoToFollow } from './WhoToFollow.css'

import FollowerComponent from './FollowComponent/FollowerComponent'

class WhoToFollowComponent extends Component {
  render () {
    return (
      <Fragment>
        <div className={whoToFollow}>
          <h3>Who to follow</h3>
          {this.props.follower.map(followers => (
            <FollowerComponent
              key={Math.random(Math.floor(1000))}
              link={followers.link}
              img={followers.img}
              h5={followers.h5}
              span={followers.span}
            />
          ))}
        </div>
      </Fragment>
    )
  }
}

WhoToFollowComponent.propTypes = {
  follower: PropTypes.array.isRequired
}

export default WhoToFollowComponent
