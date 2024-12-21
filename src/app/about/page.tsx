import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className='h-full'>
      <div className='about'>
        <div className='about-text'>
          <h1 className='crimson h1'>COFFEE</h1>
          <p className='poppins p'>We source only the finest beans from around the world, ensuring every roast delivers a symphony of flavors. Whether you crave the bold intensity of dark roasts or the smooth balance of lighter blends, our selection caters to every taste.</p>
          <p className='poppins p'>Experience the perfect brew in every cup. At the heart of every sip lies the passion for exceptional quality and flavor. From the rich aroma of freshly ground beans to the comforting warmth of a perfectly brewed cup, coffee is more than a drink—it&apos;s a daily ritual, a moment of indulgence, and a source of inspiration.</p>
          <p className='poppins p'>Step into a world where every cup tells a story. From bean to brew, we’re here to celebrate your love for coffee. Explore our collection, discover your perfect blend, and let us make every coffee moment extraordinary.</p>
          
        </div>
        <div className='about-image'>
          <Image src={'/about.jpeg'} width={600} height={600} alt=''/>
        </div>
      </div>
    </div>
    </div>
  )
}
