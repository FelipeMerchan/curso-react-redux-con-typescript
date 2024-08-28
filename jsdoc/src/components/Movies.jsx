import React from 'react'

export function ListOfMovies({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map((movie) => (
          <li className='movie' key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

export function NoMoviesResults() {
  return (
    <p>No se encontraron películas para esta búsqueda</p>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies.length > 0

  return (
    hasMovies
     ? <ListOfMovies movies={movies} />
     : <NoMoviesResults />
  )
}

/**
 * Componente de boton reutilizable
 * @function
 * @param {object} props - Las props para el componente
 * @param {React.ReactNode} props.children - Contenido interno que va dentro del botón
 * @returns {JSX.Element}
 */
export function Button({ children }) {
  return (
    <button>{children}</button>
  )
}

/**
 * Componente de encabezado reutilizable
 * @function
 * @param {object} props - Las props para el componente
 * @param {string} props.title - El título del encabezado
 * @param {string} [props.subtitle] - El subtítulo opcional del encabezado
 * @returns {JSX.Element} El componente de encabezado
 */
export function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </header>
  )
}