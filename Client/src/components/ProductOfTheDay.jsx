function ProductOfTheDay() {
    return (
      <div className="py-12 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">
              Weirdest Product of the Day
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Today's featured bizarre purchase that will make you question humanity.
            </p>
          </div>
          
          <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">
                  <span className="block">USB Pet Rock</span>
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Yes, it's exactly what it sounds like: a rock with a USB cable attached to it. 
                  It doesn't store data. It doesn't charge anything. It just sits there, being a rock.
                </p>
                <div className="mt-6">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-primary">Weirdness Scale: 9/10</span>
                    <div className="ml-4 flex">
                      {[...Array(9)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row">
                  <a href="#" className="btn btn-primary mr-0 mb-3 sm:mb-0 sm:mr-3">
                    See Details
                  </a>
                  <a href="#" className="btn btn-secondary flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                    Add to Favorites
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-8">
              <div className="h-64 w-64 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-6xl">🪨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default ProductOfTheDay