import React, { Component, Fragment } from 'react'
import LeftComponent from '../LeftPanelComponent/LeftComponent'
import MiddleComponent from '../MiddlePanelComponent/MiddleComponent'
import RightComponent from '../RightPanelComponent/RightComponent'
import MentionsMiddle
  from '../NotificationsComponent/NotifMiddle/MentionsMiddle'
import NotifLeftPanel
  from '../NotificationsComponent/NotifLeftPanel/NotifLeftPanel'
import NotifMiddle from '../NotificationsComponent/NotifMiddle/NotifMiddle'

import styles from './HomeComponent.css'

import JessicaJones from '../../images/jessica-jones.jpg'
import Marvel from '../../images/Marvel.png'
import BlankSpace from '../../images/blank-space.jpg'
import Cats from '../../images/cats.jpg'

import axios from 'axios'

class HomeComponent extends Component {
  state = {
    followerComponent: [
      {
        link: 'https://twitter.com/JessicaJones',
        img: JessicaJones,
        h5: 'Jessica Jones',
        span: '@OfficalJessicaJones'
      },
      {
        link: 'https://twitter.com/Marvel',
        img: Marvel,
        h5: 'Marvel Studios',
        span: '@MarvelStudios'
      },
      {
        link: 'https://twitter.com/taylorswift13',
        img: BlankSpace,
        h5: 'Chris Shivers - TSwift Fan',
        span: '@ChrisShiversTaySwiftfan101'
      },
      {
        link: 'https://twitter.com/wmarttala',
        img: Cats,
        h5: 'Will Marttala',
        span: '@TheRealWill'
      }
    ],

    trendingComponent: [
      {
        link: 'https://twitter.com/hashtag/UFCAC?src=tren',
        h4Text: '#UFCAC',
        pText: '· Very important fights'
      },
      {
        link: 'https://twitter.com/hashtag/LivePD?src=tren',
        h4Text: '#LivePD',
        pText: '· 24.9K people talking'
      },
      {
        link: 'https://twitter.com/hashtag/StarWarsHalf?src=tren',
        h4Text: '#StarWarsHalf',
        pText: '· STAR WARSSS!'
      },
      {
        link: 'https://twitter.com/hashtag/DarkSouls?src=hash',
        h4Text: '#DarkSouls',
        pText: '· Death welcomes you'
      }
    ],

    tweets: {}
  }

  componentDidMount () {
    axios
      .get('https://reactnetwork-fdc20.firebaseio.com/tweets.json')
      .then(response => {
        return this.setState({ tweets: response.data })
      })
      .catch(err => console.log(err))
  }

  renderComponent () {
    if (this.props.location.pathname === '/') {
      return (
        <Fragment>
          <LeftComponent trend={this.state.trendingComponent} />
          <MiddleComponent tweets={this.state.tweets} />
        </Fragment>
      )
    } else if (this.props.location.pathname === '/mentions') {
      return (
        <Fragment>
          <NotifLeftPanel trend={this.state.trendingComponent} />
          <MentionsMiddle />
        </Fragment>
      )
    } else if (this.props.location.pathname === '/notifications') {
      return (
        <Fragment>
          <NotifLeftPanel trend={this.state.trendingComponent} />
          <NotifMiddle tweets={this.state.tweets} />
        </Fragment>
      )
    }
  }

  render () {
    return (
      <Fragment>
        <div className={styles.outer}>
          <div className={styles.outerContent}>
            <div className={styles.container}>
              {this.renderComponent()}
              <RightComponent follower={this.state.followerComponent} />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default HomeComponent
