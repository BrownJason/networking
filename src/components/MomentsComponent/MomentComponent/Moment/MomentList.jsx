import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { moment1, moment1Text, moment } from './MomentList.css'

class MomentList extends Component {
  render () {
    return (
      <Fragment>
        <div className={moment}>
          <div className={moment1}>
            <img src={`${this.props.img}`} alt='' />
          </div>
          <div className={moment1Text}>
            <h3>{this.props.h3Text}</h3>
            <p>
              {this.props.pText}
            </p>
          </div>
        </div>
      </Fragment>
    )
  }
}

MomentList.propTypes = {
  img: PropTypes.img,
  h3Text: PropTypes.string.isRequired,
  pText: PropTypes.string.isRequired
}

export default MomentList
