import React from 'react'
import { Trending } from './components/trending/Trending'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { FeatureTrending } from './components/trending/FeatureTrending'
import { DisplayMovies } from './components/display/DisplayMovies'

export const IMovie = () => {
  return (
    <>
      < Header />
      < Hero />
      < Trending />
      < FeatureTrending />
      < FeatureTrending />
      < DisplayMovies />
    </>
  )
}
