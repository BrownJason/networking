import React, { Component, Fragment } from 'react'
import { Nav } from './Nav.css'
import HomeComponent from '../../HomeComponent/HomeComponent'
import { NavLink } from 'react-router-dom'
import MomentsComponent from '../../MomentsComponent/MomentsComponent'
// import NotificationsComponent
//   from '../../NotificationsComponent/NotificaiontsComponent'

class nagivationComponent extends Component {
  render () {
    const { location } = this.props
    return (
      <Fragment>
        <ul className={Nav}>
          <li>
            <NavLink
              exact
              to='/'
              activeStyle={{ textDecoration: 'none', color: '#1c94e0' }}
              component={HomeComponent}
            >
              <i className='fa fa-home'> Home</i>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/moments'
              activeStyle={{ textDecoration: 'none', color: '#1c94e0' }}
              component={MomentsComponent}
            >
              <i className='fa fa-star-o'> Moments</i>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/notifications' || '/mentions'}
              activeStyle={{ textDecoration: 'none', color: '#1c94e0' }}
              component={HomeComponent}
            >
              <i className='fa fa-bell-o'> Notifications</i>
            </NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: location, state: { modal: true } }}>
              <i className='fa fa-envelope-o'> Messages</i>
            </NavLink>
          </li>
        </ul>
      </Fragment>
    )
  }
}

export default nagivationComponent
