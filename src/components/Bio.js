import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import avatar from './avatar.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={avatar}
          alt={`Jazib Sawar`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Jazib Sawar</strong> who lives in Pakistan &
          Loves developing useful applications.{' '}
          <a target="_blank" href="https://twitter.com/jazibsawar">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
