import React from 'react'
import PropTypes from 'prop-types'

export default function ComponentsWithChildren({ children, title }) {
  return (
    <div>
      <h1 className='title-heading'>{title}</h1>
      <div>
        {children}
      </div>
    </div>
  )
}

ComponentsWithChildren.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}
