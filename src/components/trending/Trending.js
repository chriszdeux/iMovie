import React from 'react';
// import { FeatureTrending } from './FeatureTrending';

import '../../styles/trending/trending-style.css';

import movie from '../../temporal-utils/movie.jpg';

export const Trending = () => {
  return (
    <section className="trending" id="trending"> 
      <div className="selector">
        <p>Trending</p>
        <div className="selector__perspective">
        </div>
      </div>
      <div className="trending__content">
        <article className="trending__card">
          <img  src={ movie } alt=""/>
          <p>Movie Name</p>
        </article>
        <article className="trending__card">
          <img  src={ movie } alt=""/>
          <p>Movie Name</p>
        </article>
        <article className="trending__card">
          <img  src={ movie } alt=""/>
          <p>Movie Name</p>
        </article>
        <article className="trending__card">
          <img  src={ movie } alt=""/>
          <p>Movie Name</p>
        </article>
        <article className="trending__card">
          <img  src={ movie } alt=""/>
          <p>Movie Name</p>
        </article>
      </div>
    </section>
  )
}
