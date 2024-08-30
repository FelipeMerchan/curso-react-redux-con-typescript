import React from 'react'
import PropTypes from 'prop-types'

export default function ComponentAvanzado({ list, title }) {
  return (
    <div>
      <p>{title}</p>
      <ul>
        {
          list.map((item) => (
            <li key={item.id}>
              {item.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

ComponentAvanzado.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
}
