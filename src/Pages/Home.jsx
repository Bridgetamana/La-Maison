import React from 'react'

const Home = () => {
  return (
    <div className=" text-black relative ">
		<section className="relative bg-[url(https://media.istockphoto.com/id/1508453163/photo/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.jpg?s=612x612&w=0&k=20&c=RSJYaxThii5iK-zk_69h16UVthwufA1gbaxoZEKOUZg=)] bg-cover bg-center bg-no-repeat ">
  			<div className="absolute inset-0 bg-white opacity-60 md:from-white/95 sm:to-white/25 lg:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
			  <div className="flex flex-col relative lg:w-1/2 md:w-1/2 md:px-6 justify-center lg:items-start px-6 py-8 lg:px-24 lg:py-24">
				<h2 className=" lg:text-6xl text-4xl md:text-5xl leading-tight md:leading-snug mb-4 font-bold lg:font-semibold">Find a house that suits you
				</h2>
				<p className=" text-gray-600 font-medium mb-4 lg:text-xl">Want to find a home? We are ready to find one that suits your lifestyle and needs</p>
				<a href="#"
					className="bg-black text-center text-white rounded shadow hover:shadow-lg py-2 px-8 mb-12">
					Get Started
				</a>
				<ul className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-16'> 
					<li >
						<div className='flex items-center'>
							<h2 className='text-2xl font-medium'>1200</h2>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
						</div>
						<p>Listed Properties</p>
					</li>
					<li>
						<div className='flex items-center'>
							<h2 className='text-2xl font-medium'>4500</h2>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
						</div>
						<p>Happy Customers</p>
					</li>
					<li>
						<div className='flex items-center'>
							<h2 className='text-2xl font-medium'>100</h2>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
						</div>
						<p>Awards</p>
					</li>
				</ul>
			</div>
		</section>
		<div className='lg:absolute inset-x-0 top-96 flex flex-col bg-white shadow-md justify-center rounded-sm p-5 mx-auto md:mx-32 my-10 lg:mt-24 space-y-4 ' id='Searchbox'>
			<p className='font-semibold mb-8'>Search for available Properties</p>
			<div className='lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 gap-4'>

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
		<div className='w-auto mx-2 space-y-4 flex flex-col lg:mt-36 lg:mx-24'>
			<div className='flex items-center'>
				<hr className='w-16 h-1 mx-4  bg-black border-0 rounded'/>
				<p className='text-2xl font-medium'>Popular</p>
			</div>
			<p>Our Popular Homes</p>
			<div className='flex flex-col lg:flex-row space-x-4'>

				<div className='border-2'>
					<img src="https://static.wixstatic.com/media/710728_97c5c23fd61648ffb323e8bf32919e91~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_auto/710728_97c5c23fd61648ffb323e8bf32919e91~mv2.jpg" alt="A building" className='w-full' />
					<div className='bg-white rounded-sm mb-6 p-4'>
						<div className='flex space-x-4'>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
								<path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
							</svg>

							<p className='font-bold'>Banana Island, Lagos</p>
						</div>
						<div className='flex py-5 justify-between'>
							<div className='flex space-x-3'>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
								</svg>

								<p className='font-normal my-auto'>4 Bed</p>
							</div>
							<div className='flex space-x-3'>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
							</svg>

								<p className='font-normal my-auto'>10x10 m</p>
							</div>
							<div className='flex space-x-3'>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
								</svg>

								<p className='font-normal my-auto'>1600</p>
							</div>
						</div>

						<div className='flex justify-between items-center'>
							<button className='py-2 px-4 bg-black text-white font-semibold rounded-md'>Book Now</button>
							<p className='text-xl font-medium text-center'>NGN100,000,000</p>
						</div>
					</div>
				</div>
				<div className='border-2 '>
					<img src="https://static.wixstatic.com/media/710728_97c5c23fd61648ffb323e8bf32919e91~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_auto/710728_97c5c23fd61648ffb323e8bf32919e91~mv2.jpg" alt="A building" className='w-full' />
					<div className='bg-white rounded-sm mb-6 p-4'>
						<div className='flex space-x-4'>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
								<path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
							</svg>

							<p className='font-bold'>Banana Island, Lagos</p>
						</div>
						<div className='flex py-5 justify-between'>
							<div className='flex space-x-3'>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
								</svg>

								<p className='font-normal my-auto'>4 Bed</p>
							</div>
							<div className='flex space-x-3'>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
							</svg>

								<p className='font-normal my-auto'>10x10 m</p>
							</div>
							<div className='flex space-x-3'>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
								</svg>

								<p className='font-normal my-auto'>1600</p>
							</div>
						</div>

						<div className='flex justify-between items-center'>
							<button className='py-2 px-4 bg-black text-white font-semibold rounded-md'>Book Now</button>
							<p className='text-xl font-medium text-center'>NGN100,000,000</p>
						</div>
					</div>
				</div>
				<div className='border-2'>
					<img src="https://static.wixstatic.com/media/710728_97c5c23fd61648ffb323e8bf32919e91~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_auto/710728_97c5c23fd61648ffb323e8bf32919e91~mv2.jpg" alt="A building" className='w-full' />
					<div className='bg-white rounded-sm mb-6 p-4'>
						<div className='flex space-x-4'>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
								<path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
							</svg>

							<p className='font-bold'>Banana Island, Lagos</p>
						</div>
						<div className='flex py-5 justify-between'>
							<div className='flex space-x-3'>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
								</svg>

								<p className='font-normal my-auto'>4 Bed</p>
							</div>
							<div className='flex space-x-3'>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
							</svg>

								<p className='font-normal my-auto'>10x10 m</p>
							</div>
							<div className='flex space-x-3'>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
								</svg>

								<p className='font-normal my-auto'>1600</p>
							</div>
						</div>

						<div className='flex justify-between items-center '>
							<button className='py-2 px-4 bg-black text-white font-semibold rounded-md'>Book Now</button>
							<p className='text-xl font-medium text-center'>NGN100,000,000</p>
						</div>
					</div>
				</div>
			</div>
			<button className='flex justify-center space-x-4'>
				<a href="#">Explore All </a>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  					<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
				</svg>

			</button>
		</div>
		<section className='p-4 lg:mx-24'>
			<img src="https://media.istockphoto.com/id/1508453163/photo/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.webp?b=1&s=170667a&w=0&k=20&c=t-gSh1gXGJyb_-PHSxwzSaEnSh-B4atbRbsQcMoHWwQ=" alt="" />
			<span className='flex items-center'>
				<hr className='w-16 h-1 mx-4  bg-black border-0 rounded'/>
				<p className='text-2xl font-medium'>OUR SERVICES</p>
			</span>
			<p>Your Comfort Is Our Priority</p>
			<p>Finding you a home that you'd love and enjoy</p>
			<p>staying in is our top priority. Your comfort is key</p>
			<div className='flex'>
				<ul>
					<li>Free Marketing</li>
					<li>Managed Viewings</li>
				</ul>
				<ul>
					<li>No Valuations</li>
					<li>Free Marketing</li>
				</ul>
			</div>
			<button className='py-2 px-6 bg-black text-white font-semibold rounded-md'>See More</button>
		</section>
		<div className='w-auto mx-2 space-y-4 flex flex-col lg:mx-24 '>
			<div className='flex items-center'>
				<hr className='w-16 h-1 mx-4  bg-black border-0 rounded'/>
				<p className='text-2xl font-medium'>OUR BLOG</p>
			</div>
			<p>Latest Information</p>
			<div className='lg:flex lg:flex-row '>

				<div className='border-2'>
					<img src="https://static.wixstatic.com/media/710728_97c5c23fd61648ffb323e8bf32919e91~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_auto/710728_97c5c23fd61648ffb323e8bf32919e91~mv2.jpg" alt="A building" className='w-full' />
					<div className='bg-white rounded-sm mb-6 p-4'>
						<div className='flex space-x-4 items-center'>
							<div className='w-4 h-4 rounded-full bg-indigo-700'></div>
							<p className='font-bold'>3 June 2023</p>
						</div>
						<hr />
						<p>The Challenges Of Investment In Real Estate</p>
						<button className='py-2 px-4 bg-blue-200 text-indigo-500 font-semibold rounded-md'>Read More</button>
					</div>
				</div>
				<div className='border-2'>
					<img src="https://static.wixstatic.com/media/710728_97c5c23fd61648ffb323e8bf32919e91~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_auto/710728_97c5c23fd61648ffb323e8bf32919e91~mv2.jpg" alt="A building" className='w-full' />
					<div className='bg-white rounded-sm mb-6 p-4'>
						<div className='flex space-x-4 items-center'>
							<div className='w-4 h-4 rounded-full bg-indigo-700'></div>
							<p className='font-bold'>3 June 2023</p>
						</div>
						<hr />
						<p>The Challenges Of Investment In Real Estate</p>
						<button className='py-2 px-4 bg-blue-200 text-indigo-500 font-semibold rounded-md'>Read More</button>
					</div>
				</div>
				<div className='border-2'>
					<img src="https://static.wixstatic.com/media/710728_97c5c23fd61648ffb323e8bf32919e91~mv2.jpg/v1/fill/w_473,h_355,fp_0.50_0.50,q_90,enc_auto/710728_97c5c23fd61648ffb323e8bf32919e91~mv2.jpg" alt="A building" className='w-full' />
					<div className='bg-white rounded-sm mb-6 p-4'>
						<div className='flex space-x-4 items-center'>
							<div className='w-4 h-4 rounded-full bg-indigo-700'></div>
							<p className='font-bold'>3 June 2023</p>
						</div>
						<hr />
						<p>The Challenges Of Investment In Real Estate</p>
						<button className='py-2 px-4 bg-blue-200 text-indigo-500 font-semibold rounded-md'>Read More</button>
					</div>
				</div>
			</div>
		</div>

		<section className='bg-black text-white '>
			<div className='lg:mx-24'>
				<div className='flex items-center'>
					<hr className='w-16 h-1 mx-4  bg-white border-0 rounded'/>
					<p className='text-2xl font-medium'>TESTIMONIALS</p>
				</div>
				<h2>What Our Clients Say About Us</h2>
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
			<div className='lg:mx-24'>
				<span>

					<img src="https://media.istockphoto.com/id/1286810719/photo/smiling-cheerful-young-adult-african-american-ethnicity-man-looking-at-camera-standing-at.jpg?s=612x612&w=0&k=20&c=b9sWYITIZ_yjXB3m-Xftj-latPXQDhb5Roa0pA0JaNY=" alt="" />
					<span>
						<h3>Fikayo Tomori</h3>
						<p>I am very impressed with the service of la Maison. I'd definitely recommend them to my buddies</p>
						<ul>
							<li>Footballer</li>
						</ul>
					</span>
				</span>
				<span>

					<img src="https://media.istockphoto.com/id/1280113805/photo/smiling-young-woman-beauty-close-up-portrait.webp?b=1&s=170667a&w=0&k=20&c=RE3mToPREvy-KeYvOCXGX6r6znzdrQP0khIFJbU0Lpc=" alt="" />
					<span>
						<h3>Anne Harlow</h3>
						<p>I am very impressed with the service of la Maison. I'd definitely recommend them to my buddies</p>
						<ul>
							<li>Actress</li>
						</ul>
					</span>
				</span>
			</div>
		</section>
		<section className='lg:mx-24'>
			<div>
				<div className='flex items-center'>
					<hr className='w-24 '/>
					<p>FAQS</p>
				</div>
				<h3>Frequently Asked Questions</h3>
				<p>Have questions you want answers to?</p>
				<button className='py-2 px-4 bg-black text-white font-semibold rounded-md'>See More</button>
			</div>

			<div class="m-2 space-y-2 ">
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
					class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 px-6"
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
					class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 px-6"
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
					class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 px-6"
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