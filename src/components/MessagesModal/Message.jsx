import React, { Component } from 'react'

import Modal from './Modal'

class Container extends Component {
  render () {
    return (
      <div>
        <Modal isModal={false} />
      </div>
    )
  }
}

export default Container
