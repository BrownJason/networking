import React, { Fragment } from 'react'
import NavigationComponent from './SubNavComponets/NavigationComponent'
import SearchBar from './SubNavComponets/SearchBarComponent'
import styles from './NavComponet.css'
import WebPageIcon from './WebPageIcon/WebpageIcon'

const navComponent = () => (
  <Fragment>
    <div className={styles.topbar}>
      <div className={styles.globalNav}>
        <div className={styles.globalNavInner}>
          <div className={styles.navContainer}>
            <div role='navigation'>
              <NavigationComponent />
            </div>
            <WebPageIcon />
            <div className={`${styles.pullRight} ${styles.navExtras}`}>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
)

export default navComponent
