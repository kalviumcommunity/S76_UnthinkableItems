function Featured() {
    return (
      <div className="py-12 bg-gradient-to-r from-dark to-secondary text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              User Submissions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              The weirdest items our community has discovered and shared.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 text-gray-900">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <span>👤</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-bold">Sandra K.</div>
                    <div className="text-sm text-gray-500">Submitted 2 days ago</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Ostrich Pillow</h3>
                <p className="text-gray-600 mb-4">
                  This pillow that makes you look like an ostrich with its head in the sand. Perfect for public napping if you have no dignity!
                </p>
                <div className="flex items-center justify-between">
                  <span className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                    Weird Score: 8.5/10
                  </span>
                  <button className="text-secondary hover:text-primary">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 text-gray-900">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <span>👤</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-bold">Marco T.</div>
                    <div className="text-sm text-gray-500">Submitted 1 week ago</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Keyboard Waffle Iron</h3>
                <p className="text-gray-600 mb-4">
                  For those who want their breakfast to look like a keyboard. Perfect for the tech enthusiast who wants syrup in between their keys.
                </p>
                <div className="flex items-center justify-between">
                  <span className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                    Weird Score: 7/10
                  </span>
                  <button className="text-secondary hover:text-primary">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 text-gray-900">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <span>👤</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-bold">Jamie R.</div>
                    <div className="text-sm text-gray-500">Submitted 3 days ago</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Nicolas Cage Pillowcase</h3>
                <p className="text-gray-600 mb-4">
                  Fall asleep with Nicolas Cage's face inches from yours. For those who want to wake up screaming every morning.
                </p>
                <div className="flex items-center justify-between">
                  <span className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                    Weird Score: 9/10
                  </span>
                  <button className="text-secondary hover:text-primary">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="btn bg-white text-dark hover:bg-gray-100">
              Submit Your Discovery
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Featured