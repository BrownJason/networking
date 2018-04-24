import React from 'react'
import {coolIcon} from './Icon.css'
import {Link} from 'react-router-dom'

const webPageIcon = () => (
    <span className={coolIcon}>
        <Link to='/'>
            <img src={require('../../../images/cool-icon.jpg')} alt='' />
        </Link>
    </span>
)

export default webPageIcon