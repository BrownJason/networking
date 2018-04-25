import React from 'react'

import { t1FormTweet, textBox } from './FormInput.css'

const formInput = props => (
  <div className={t1FormTweet}>
    <input
      className={textBox}
      value={props.value}
      onChange={props.changed}
      placeholder={props.placeholder}
    />

  </div>
)

export default formInput
