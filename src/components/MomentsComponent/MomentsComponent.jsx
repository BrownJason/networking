import React, { Component, Fragment } from 'react'
import Moments from './MomentComponent/MomentContent'
import { outer1, outerContent1, container1 } from './Moments.css'

import Confetti from '../../images/download.jpg'
import Cats from '../../images/cats.jpg'
import Dogs from '../../images/dogs.jpg'
import Blox from '../../images/bloxs.jpg'

class momentsComponent extends Component {
  state = {
    momentHeroComponent: [
      {
        img: Confetti,
        h3Text: 'CONFETTI!!!!',
        pText: 'Looks like confetti raining down from the sky. This may be a pain in the butt to clean up if its in you yard. Check next on the news if it was near you.'
      }
    ],

    momentListComponent: [
      {
        img: Cats,
        h3Text: 'Cats, are they deadly?',
        pText: 'Are cats your friends, or are they just deadly aliens that come to kill all humans. We are still not sure about this about but continue to question it.'
      },
      {
        img: Dogs,
        h3Text: 'Cute Dogs in a blanket, or so you thought',
        pText: 'Dogs on a rampage through city caught in blankets to calm down so they don"t destroy anything else in their path'
      },
      {
        img: Blox,
        h3Text: 'Blox helping each other',
        pText: 'Blox trying to help each othet up a curb, or is this some kids after school project that he left in the street.'
      }
    ]
  }

  render () {
    return (
      <Fragment>
        <div className={outer1}>
          <div className={outerContent1}>
            <div className={container1}>
              <Moments
                moment={this.state.momentHeroComponent}
                moment2={this.state.momentListComponent}
              />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default momentsComponent
