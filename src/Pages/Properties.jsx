import React from 'react'
import HomeListing from '../components/HomeListing'

const Properties = () => {
  return (
    <div>
        <div className='md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-8'>
			{popularHomesData.map((home) => (
				<HomeListing
					key={home.id}
					image={home.image}
					location={home.location}
					bedCount={home.bedCount}
					area={home.area}
					squareMeter={home.squareMeter}
					price={home.price}
				/>
			))}			
		</div>
    </div>
  )
}

export default Properties