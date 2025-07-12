import React from 'react'

const ErrorPage = () => {
  return (
    <div className="container text-center py-5">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-4">¡Ups! Página no encontrada 😕</h2>
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="Error 404"
        className="img-fluid mb-4"
        style={{ maxWidth: '300px' }}
      />
      <br />
    </div>
  )
}

export default ErrorPage