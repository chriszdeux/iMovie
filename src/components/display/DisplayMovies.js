import React from 'react';

import '../../styles/display/display-movies.css'
import transform from '../../temporal-utils/transform.jpg'
export const DisplayMovies = () => {
  return (
    <>
      <section className="display__movies">
        <img src={ transform} alt=""/>
        <p>Info About the movie</p>
        <p>Info About the movie</p>
      </section>
    </>
  )
}
