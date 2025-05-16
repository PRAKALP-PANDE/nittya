import React from 'react'
import About from './About'
import HappyClients from './HappyClients'
import YoutubeVideos from './YoutubeVideos'
import Newhero from './Newhero'
import FaqSection from './FaqSection'
import WhatToExpect from './WhatToExpect'
import WhatWeOffer from './WhatWeOffer'

const HomePage = () => {
  return (
    <>
      <Newhero />
      <About />
      <WhatToExpect />
      <WhatWeOffer />
      <YoutubeVideos />
      <HappyClients />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <FaqSection />
      </div>
    </>
  )
}

export default HomePage