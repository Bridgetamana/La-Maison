/* eslint-disable react/no-unescaped-entities */
function ErrorPage() {
    
  return (
    <div>
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                Oops!!
                            </h1>
                            <p className="my-2 text-gray-800">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
                            <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-black text-white ">Back to homepage</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
    </div>
  )
}

export default ErrorPage