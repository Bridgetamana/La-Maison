import HomeListing from '../components/HomeListing'
import popularHomesData from '../components/HomeListingData'

const Propertiespage = () => {
  return (
    <div className='px-4 py-4  md:px-10 lg:px-24'>
        <span className='flex justify-between items-center my-4'>

            <p className='text-3xl font-bold'>Our Popular Homes</p>
            <button className='flex justify-center space-x-4 font-medium'>
                <a href="#">Explore All </a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>

        </span>
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

export default Propertiespage