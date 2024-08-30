import React from 'react'
import PropTypes from 'prop-types'

export default function BasicComponent({ data }) {
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

BasicComponent.propTypes = {
  /* data: PropTypes.string.isRequired, */
  /* data: PropTypes.number.isRequired, */
  /* data: PropTypes.bool.isRequired, */
  data: PropTypes.array.isRequired,
}
