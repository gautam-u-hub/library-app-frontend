import React from 'react'
import { ExploreTopBooks } from './components/ExploreTopBooks'
import { Carousel } from './components/Carousel'
import { Heros } from './components/Heros'
import { LibraryServices } from './components/LibraryServices'

const HomePage = () => {
  return (
    <div>
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </div>
  )
}

export default HomePage
