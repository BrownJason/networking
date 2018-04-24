import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Trends from './Trends/Trends'
import {
  blankWhite,
  listModule,
  listInner,
  listTitle,
  listTitles
} from './Trending.css'

class TrendingComponent extends Component {
  render () {
    return (
      <Fragment>
        <div className={blankWhite}>
          <div className={listModule}>
            <div className={listInner}>
              <div className={listTitle}>
                <h3>
                  <span className={listTitles}>Trending Topics</span>
                </h3>
              </div>
              {this.props.trend.map(trends => (
                <Trends
                  key={Math.random(Math.floor(10))}
                  link={trends.link}
                  h4Text={trends.h4Text}
                  pText={trends.pText}
                />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

TrendingComponent.propTypes = {
  trend: PropTypes.array.isRequired
}

export default TrendingComponent
