import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { lists, listsList } from './Trends.css'

class Trends extends Component {
  render () {
    return (
      <div className={listsList}>
        <ul className={lists}>
          <li>
            <a href={`${this.props.link}`}>
              <h4>{this.props.h4Text}</h4>
              <p>{this.props.pText}</p>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

Trends.propTypes = {
  link: PropTypes.string.isRequired,
  h4Text: PropTypes.string.isRequired,
  pText: PropTypes.string.isRequired
}

export default Trends
