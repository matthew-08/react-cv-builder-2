import React from 'react'

export default function EduOutput({ college, degree, GPA, from, to }) {
  return (
    <div>
      <p>
        {college}
      </p>
      <p>
        {degree}
      </p>
      <p>
        {GPA}
      </p>
      <p>
        {from}
      </p>
      <p>
        {to}
      </p>
    </div>
  )
}