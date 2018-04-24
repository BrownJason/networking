import React, { Component, Fragment } from 'react'
import classes from './Modal.css'

class Modal extends Component {
  static defaultProps = {
    isModal: true
  }

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

  onClose = () => {
    this.props.history.goBack()
  }

  render () {
    return (
      <Fragment>
        <div className={classes.darkOverlay} onClick={this.onClose} />
        <div className={classes.Modal}>
          <div className={classes.modalContent}>
            <div className={classes.modalHeader}>

              <h5 className={classes.modalTitle}>Messages</h5>

              <div className={classes.rightToolBar}>
                <button className={classes.newMessage}>New Message </button>
                {this.props.isModal &&
                  <button
                    className={classes.closeModal}
                    onClick={this.props.onClose || this.onClose}
                  >
                    <span aria-hidden='true'>X</span>
                  </button>}
              </div>
            </div>

            <div className={classes.modalBody}>
              <div className={classes.ScrollY}>
                <div className='primary'>
                  <div className={classes.Inbox}>
                    <h2 className={classes.InboxHeader}>
                      Send a message, get a message
                    </h2>
                    <div className={classes.InboxDetails}>
                      <p>
                        Messages are private conversations between you and other people on this page. Share messages, media, and more!
                      </p>
                    </div>
                    <div className={classes.InboxButton}>
                      <button type='button' className={classes.StartConv}>
                        Start Messaging
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Modal
