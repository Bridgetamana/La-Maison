import React from 'react'
import HomeListing from '../components/HomeListing'
import popularHomesData from '../components/HomeListingData'
import BlogPost from '../components/BlogPost'
import blogPostData from '../components/BlogPostData'
import Image from '../assets/apartment-image.png'

const Home = () => {
  return (
    <div className=" text-black relative">
		<section className='relative bg-sky-100 grid px-4 lg:grid-cols-9 py-4 md:pb-16'>
			
			<div class="md:pl-10 lg:pl-24 lg:col-span-6 ">
				<h2 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">Find a house that suits you
				</h2>
				<p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Want to find a home? We are ready to find one that suits your lifestyle and needs</p>
				<a href={`/about`} class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-md bg-black mb-8">
                Get started
                
            	</a>
				<ul className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8'> 
					<li >
						<div className='flex items-center'>
							<h2 className='text-2xl font-medium'>1200</h2>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-blue-800 font-extrabold">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
						</div>
						<p className='text-sm'>Listed Properties</p>
					</li>
					<li>
						<div className='flex items-center'>
							<h2 className='text-2xl font-medium'>4500</h2>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-blue-800 font-extrabold">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
						</div>
						<p className='text-sm'>Happy Customers</p>
					</li>
					<li>
						<div className='flex items-center'>
							<h2 className='text-2xl font-medium'>100</h2>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-blue-800 font-extrabold">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
						</div>
						<p className='text-sm'>Awards</p>
					</li>
				</ul>
			</div>
			<div class="hidden lg:mt-0 lg:col-span-3 lg:flex bg-sky-100 ">
				<img src={Image} alt="" className='' />
			</div>
		</section>
		<div className='lg:absolute inset-x-0 top-56 flex flex-col bg-white shadow-md justify-center rounded-sm p-5 mx-auto md:mx-24 my-8 lg:mt-44 space-y-4 '>
			<p className='font-semibold'>Search for available Properties</p>
			<div className='lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 py-4 gap-4'>

				<div class="relative ">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute top-2/4 right-3 -translate-y-2/4 place-items-center text-black w-6 h-6">
						<path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
					</svg>

					<input class="peer h-full w-full rounded-[7px] border-2 border-grey-100 bg-transparent p-3 text-gray-700 outline-0 transition-all" placeholder=" Location"/>
				</div>
				<div class="relative">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-2/4 right-3 -translate-y-2/4 place-items-center text-black w-6 h-6">
						<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
						<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
					</svg>

					<input class="peer h-full w-full rounded-[7px] border-2 border-grey-100 bg-transparent p-3 text-gray-700 outline-0 transition-all" placeholder=" Property Type"/>
				</div>
				<div class="relative">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-2/4 right-3 -translate-y-2/4 place-items-center text-black w-6 h-6">
						<path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
						<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
					</svg>
					<input class="peer h-full w-full rounded-[7px] border-2 border-grey-100 bg-transparent p-3 text-gray-700 outline-0 transition-all" placeholder=" Budget"/>
				</div>
				<div className=''>
					<button className="p-3 w-full bg-black text-white font-semibold rounded-md" >
						Search Now
					</button>
				</div>
			</div>
		</div>
		<div className='w-auto mx-2 space-y-4 flex flex-col lg:mt-36 md:mx-10 lg:mx-24'>
			<div className='flex items-center'>
				<hr className='w-16 h-1 mr-3  bg-black border-0 rounded'/>
				<p className='text-2xl font-medium'>Popular</p>
			</div>
			<span className='flex justify-between items-center'>

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
			</div>
		</div>
		<section className='mx-2 md:mx-18 md:flex md:mx-10 lg:mx-24 lg:flex justify-between my-8'>
			<div>

				<img src="https://media.istockphoto.com/id/1508453163/photo/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.webp?b=1&s=170667a&w=0&k=20&c=t-gSh1gXGJyb_-PHSxwzSaEnSh-B4atbRbsQcMoHWwQ=" alt=""  />
			</div>
			<div className='px-12'>
				<span className='flex items-center'>
					<hr className='w-12 h-1 mr-4  bg-black border-0'/>
					<p className='text-xl'>OUR SERVICES</p>
				</span>
				<p className='font-bold text-2xl mb-4'>Your Comfort Is Our Priority</p>
				<p className='text-gray-500'>Finding you a home that you'd love and enjoy</p>
				<p className='text-gray-500'>staying in is our top priority. Your comfort is key</p>
				<div className='flex space-x-12 mt-4 font-medium text-sm lg:text-lg'>
					<ul className='list-disc list-inside'>
						<li>Free Marketing</li>
						<li>Managed Viewings</li>
					</ul>
					<ul className='list-disc list-inside'>
						<li>No Valuations</li>
						<li>Free Marketing</li>
					</ul>
				</div>
				<button className='py-2 px-6 bg-black text-white font-semibold rounded-md mt-8'>See More</button>
			</div>
		</section>
		<div className='w-auto mx-2 space-y-4 flex flex-col md:mx-10 lg:mx-24 '>
			<span className='flex justify-between items-center'>

				<div >
					<span className='flex items-center'>

						<hr className='w-16 h-1 mr-4  bg-black border-0 rounded'/>
						<p className='text-xl font-medium'>OUR BLOG</p>
					</span>
					<p className='text-2xl font-bold'>Latest Information</p>
				</div>
				<p className='hidden lg:block text-lg'>Stay up to date with all information about our listed properties</p>
				<button className="py-3 px-5 bg-black text-white font-semibold rounded-md" >
					See More
				</button>

			</span>
			
			<div className='md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-8 '>
				{blogPostData.map((post) => (
					<BlogPost
					key={post.id}
					imageUrl={post.imageUrl}
					date={post.date}
					title={post.title}
					/>
      			))}			
			</div>
		</div>

		<section className='bg-black text-white p-8 mt-6'>
			<div className='md:mx-10 lg:mx-24 flex justify-between'>
				<div >
					<span className='flex items-center'>

						<hr className='w-12 h-1 mr-4  bg-white border-0'/>
						<p className='text-lg'>TESTIMONIALS</p>
					</span>
					<h2 className='text-2xl'>What Our Clients Say About Us</h2>

				</div>
				<div>
					<button>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  							<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
						</svg>
					</button>
					<button>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  							<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
						</svg>

					</button>
				</div>
			</div>
			<div className='md:mx-10 lg:mx-24 flex mt-8'>
				<span className='flex gap-8'>
					<div className='md:w-1/3'>

						<img src="https://media.istockphoto.com/id/1286810719/photo/smiling-cheerful-young-adult-african-american-ethnicity-man-looking-at-camera-standing-at.jpg?s=612x612&w=0&k=20&c=b9sWYITIZ_yjXB3m-Xftj-latPXQDhb5Roa0pA0JaNY=" alt="" className='' />
					</div>
					<span className='space-y-4'>
						<h3 className='text-2xl text-gray-50'>Fikayo Tomori</h3>
						<p className='text-gray-300 text-xl'>I am very impressed with the service of la Maison. I'd definitely recommend them to my buddies</p>
						<ul>
							<li className='list-disc list-inside'>Footballer</li>
						</ul>
					</span>
				</span>
				<span className='flex gap-8'>
					<div className='md:w-1/2'>

						<img src="https://media.istockphoto.com/id/1280113805/photo/smiling-young-woman-beauty-close-up-portrait.webp?b=1&s=170667a&w=0&k=20&c=RE3mToPREvy-KeYvOCXGX6r6znzdrQP0khIFJbU0Lpc=" alt="" className='' />
					</div>
					<span className='space-y-4'>
						<h3 className='text-2xl text-gray-50'>Anne Harlow</h3>
						<p className='text-gray-300 text-xl'>I am very impressed with the service of la Maison. I'd definitely recommend them to my buddies</p>
						<ul>
							<li className='list-disc list-inside'>Actress</li>
						</ul>
					</span>
				</span>
			</div>
		</section>
		<section className='m-4 md:mx-10 lg:mx-24 md:flex justify-between'>
			<div className='space-y-2'>
				<div className='flex items-center '>
					<hr className='w-16 h-1 mx-4  bg-black border-0 rounded'/>
					<p>FAQS</p>
				</div>
				<div className='flex justify-between lg:flex-col md:flex-col space-y-6'>

					<span className='space-y-2'>

						<h3 className='text-2xl font-bold'>Frequently Asked Questions</h3>
						<p>Have questions you want answers to?</p>
					</span>
					<div>
						<button className=' py-2 px-6 bg-black text-white font-semibold rounded-md '>See More</button>
					</div>
				</div>
			</div>

			<div class="md:w-1/2 lg:w-1/2 text-xl font-semibold ">
  				<div class="group flex flex-col gap-2 rounded-lg bg-white p-5 text-black" tabindex="1">
					<div class="flex cursor-pointer items-center justify-between">
						<div className='flex items-center space-x-4'>

							<div className='w-3 h-3 bg-indigo-600 rounded-full'></div>
							<span> Do you offer loan services? </span>
						</div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-all duration-500 group-focus:-rotate-180">
							<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
						</svg>

					</div>
					<div
					class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 px-6 text-sm text-gray-500"
					>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam.
					</div>
				</div>

				<div
					class="group flex flex-col gap-2 rounded-lg bg-white p-5 text-black"
					tabindex="2"
				>
					<div class="flex cursor-pointer items-center justify-between">
						<div className='flex items-center space-x-4'>

							<div className='w-3 h-3 bg-indigo-600 rounded-full'></div>
							<span> What are capital gains on property purchase? </span>
						</div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-all duration-500 group-focus:-rotate-180">
							<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
						</svg>
					</div>
					<div
					class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 px-6 text-gray-500 text-sm"
					>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam.
					</div>
				</div>

				<div
					class="group flex flex-col gap-2 rounded-lg bg-white p-5 text-black"
					tabindex="3"
				>
					<div class="flex cursor-pointer items-center justify-between">
						<div className='flex items-center space-x-4'>

							<div className='w-3 h-3 bg-indigo-600 rounded-full'></div>
							<span> What kind of properties are listed on your website? </span>
						</div>					
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-all duration-500 group-focus:-rotate-180">
							<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
						</svg>
					</div>
					<div
					class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 px-6 text-gray-500 text-sm"
					>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam.
					</div>
				</div>
			</div>
		</section>

	</div>
  )
}

export default Home