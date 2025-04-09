function Hero() {
    return (
      <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-dark sm:text-5xl md:text-6xl">
                <span className="block">Weird and Crazy Things</span>
                <span className="block text-accent">People Actually Bought</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-dark sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Explore the most bizarre, unusual, and utterly unnecessary items that somehow made it from concept to checkout.
              </p>
              <div className="mt-10 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-dark bg-accent hover:bg-opacity-90 md:py-4 md:text-lg md:px-10"
                  >
                    Explore Weird Stuff
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-black text-base font-medium rounded-md bg-dark hover:bg-opacity-90 md:py-4 md:text-lg md:px-10"
                  >
                    Submit Your Find
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path 
    fill="#F7FFF7" 
    fillOpacity="1" 
    d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,272C672,288,768,320,864,304C960,288,1056,240,1152,224C1248,208,1344,240,1392,256L1440,272L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
  </path>
</svg>
        </div>
      </div>
    )
  }
  
  export default Hero;