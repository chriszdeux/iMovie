import React from 'react';

import '../../styles/trending/feature-style.css'
import feature from '../../temporal-utils/feature.jpg';
import quin from '../../temporal-utils/quin.jpeg';

export const FeatureTrending = () => {
  return (
    <section className="feature__trending">
        <article className="feature__movie">
          <img src={ quin } alt=""/>
          <div className="movie--icons">
            <ion-icon name="heart-circle-outline"></ion-icon>
            <ion-icon  name="alert-circle-outline"></ion-icon>
          </div>
        </article>
        
    </section>
  )
}
