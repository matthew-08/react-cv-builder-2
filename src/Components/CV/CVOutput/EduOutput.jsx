import React from 'react'
import styles from './output.module.css'

export default function EduOutput({ college, degree, GPA, from, to }) {
  return (
    <div
      className={styles['edu-container']}
    >
      <div
        className={styles['edu-left']}
      >
        <p>
          {college}
        </p>
        <p>
          {degree}
        </p>
      </div>
      <div
        className={styles['edu-right']}
      >
        <p>
          {GPA}
        </p>
        <div
          className={styles['from-to']}
        >
          <p>
            {from}
          </p>
          <p>
            {to}
          </p>
        </div>
      </div>
    </div>
  )
}