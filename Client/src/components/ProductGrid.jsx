function ProductGrid() {
    const products = [
      {
        id: 1,
        name: "Banana Slicer",
        category: "Kitchen Gadgets",
        weirdnessScale: 7,
        image: "🍌",
        description: "Because cutting a banana with a knife is just too mainstream."
      },
      {
        id: 2,
        name: "Dog Umbrella",
        category: "Pet Products",
        weirdnessScale: 6,
        image: "🐕",
        description: "Keep your dog dry while looking absolutely ridiculous."
      },
      {
        id: 3,
        name: "Selfie Toaster",
        category: "Kitchen Gadgets",
        weirdnessScale: 8,
        image: "🍞",
        description: "Toast your face onto bread. Narcissism for breakfast!"
      },
      {
        id: 4,
        name: "Smartphone Attachment Perfume Dispenser",
        category: "Tech Nonsense",
        weirdnessScale: 9,
        image: "📱",
        description: "Turn your phone into a smell-o-phone. Why? We have no idea."
      },
      {
        id: 5,
        name: "Toilet Golf",
        category: "Bathroom Oddities",
        weirdnessScale: 7,
        image: "🚽",
        description: "Practice your putting while doing your business."
      },
      {
        id: 6,
        name: "Bacon Bandages",
        category: "Fashion Fails",
        weirdnessScale: 5,
        image: "🥓",
        description: "Make your wounds look delicious with bacon-shaped bandages."
      }
    ];
  
    return (
      <div className="py-12 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="card group">
                <div className="w-full h-60 rounded-3xl bg-yellow-100 flex items-center justify-center">
                  <span className="text-7xl">{product.image}</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs">
                      {product.category}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  <div className="mt-2">
                    <div className="flex items-center">
                      <span className="text-sm font-bold text-primary">Weirdness: {product.weirdnessScale}/10</span>
                      <div className="ml-2 flex">
                        {[...Array(product.weirdnessScale)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <button className="text-primary font-medium hover:text-primary-dark flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Comments
                    </button>
                    
                    <button className="text-primary font-medium hover:text-primary-dark flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Add to Favorites
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="btn btn-primary">
              Load More Weird Stuff
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  export default ProductGrid