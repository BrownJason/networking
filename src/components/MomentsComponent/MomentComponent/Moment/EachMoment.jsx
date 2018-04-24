import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { moment1, moment1Text } from './EachMoment.css'

class EachMoment extends Component {
  render () {
    return (
      <Fragment>
        <div className={moment1}>
          <img src={`${this.props.img}`} alt='' />
        </div>
        <div className={moment1Text}>
          <h3>{this.props.h3Text}</h3>
          <p>
            {this.props.pText}
          </p>
        </div>
      </Fragment>
    )
  }
}

EachMoment.propTypes = {
  img: PropTypes.img,
  h3Text: PropTypes.string.isRequired,
  pText: PropTypes.string.isRequired
}

export default EachMoment
