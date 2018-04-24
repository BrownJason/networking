import React, { Component, Fragment } from 'react'
import { moment, moment1Wrap, momentList } from './MomentContent.css'
import PropTypes from 'prop-types'
import EachMoment from './Moment/EachMoment'
import MomentList from './Moment/MomentList'

class Moments extends Component {
  render () {
    return (
      <Fragment>
        <div className={moment}>
          <div className={moment1Wrap}>
            {this.props.moment.map(moments => (
              <EachMoment
                key={Math.random(Math.floor(10))}
                img={moments.img}
                h3Text={moments.h3Text}
                pText={moments.pText}
              />
            ))}
          </div>
          <div className={momentList}>
            {this.props.moment2.map(moments2 => (
              <MomentList
                key={Math.random(Math.floor(10))}
                img={moments2.img}
                h3Text={moments2.h3Text}
                pText={moments2.pText}
              />
            ))}
          </div>
        </div>
      </Fragment>
    )
  }
}

Moments.propTypes = {
  moment: PropTypes.array.isRequired,
  moment2: PropTypes.array.isRequired
}

export default Moments
