function TrendingSection() {
    return (
      <div className="py-12 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">
              Trending Items
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              The weird products everyone is talking about right now.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold text-dark border-b border-gray-200 pb-2 mb-4">
                  Most Commented
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <span className="font-medium">1. USB Pet Rock</span>
                    <span className="text-primary font-bold">124 comments</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">2. Selfie Toaster</span>
                    <span className="text-primary font-bold">96 comments</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">3. Nicolas Cage Pillowcase</span>
                    <span className="text-primary font-bold">82 comments</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">4. Toilet Golf</span>
                    <span className="text-primary font-bold">67 comments</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">5. Keyboard Waffle Iron</span>
                    <span className="text-primary font-bold">51 comments</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold text-dark border-b border-gray-200 pb-2 mb-4">
                  Highest Weirdness Rating
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <span className="font-medium">1. Smartphone Perfume Dispenser</span>
                    <span className="text-primary font-bold">9.2/10</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">2. Nicolas Cage Pillowcase</span>
                    <span className="text-primary font-bold">9.0/10</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">3. USB Pet Rock</span>
                    <span className="text-primary font-bold">8.7/10</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">4. Selfie Toaster</span>
                    <span className="text-primary font-bold">8.5/10</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">5. Ostrich Pillow</span>
                    <span className="text-primary font-bold">8.3/10</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold text-dark border-b border-gray-200 pb-2 mb-4">
                  Most Favorited
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <span className="font-medium">1. Toilet Golf</span>
                    <span className="text-primary font-bold">213 favorites</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">2. Dog Umbrella</span>
                    <span className="text-primary font-bold">187 favorites</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">3. Banana Slicer</span>
                    <span className="text-primary font-bold">156 favorites</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">4. Keyboard Waffle Iron</span>
                    <span className="text-primary font-bold">142 favorites</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-medium">5. Bacon Bandages</span>
                    <span className="text-primary font-bold">98 favorites</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default TrendingSection