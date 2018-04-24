import React, { Component } from 'react'
import HomeComponent from './components/HomeComponent/HomeComponent'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import NavComponent from './components/NavComponent/NavComponent'
import MomentsComponent from './components/MomentsComponent/MomentsComponent'
import Modal from './components/MessagesModal/Modal'
import Container from './components/MessagesModal/Message'

class App extends Component {
  previousLocation = this.props.location

  componentWillUpdate (nextProps) {
    const { location } = this.props
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render () {
    const { location } = this.props

    const isModal = !!(location.state &&
      location.state.modal &&
      this.previousLocation !== location)

    return (
      <div className='App' id='home'>
        <NavComponent />
        <Switch location={isModal ? this.previousLocation : location}>

          <Route exact path='/' component={HomeComponent} />
          <Route exact path='/moments' component={MomentsComponent} />
          <Route
            exact
            path='/notifications'
            component={HomeComponent}
          />
          <Route exact path='/mentions' component={HomeComponent} />

          <Route
            path={`${location}`}
            render={() => {
              const Component = isModal ? Modal : Container

              return <Component />
            }}
          />
        </Switch>
        {isModal ? <Route component={Modal} /> : null}
      </div>
    )
  }
}

export default App
