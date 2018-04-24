import React, { Fragment } from 'react'
import styles from './Search.css'

const searchComponent = () => (
  <Fragment>
    <form action='' className={`${styles.globalNav} ${styles.formSearch}`}>
      <label htmlFor='searching' className={styles.hide}>Search</label>
      <input
        type='text'
        className={styles.searchInput}
        placeholder='Search This'
      />
      <span className={styles.searchIcon}>
        <button type='submit' className={styles.icon}>
          <i className='fa fa-search' aria-hidden='true' />
        </button>
      </span>
    </form>
  </Fragment>
)

export default searchComponent
