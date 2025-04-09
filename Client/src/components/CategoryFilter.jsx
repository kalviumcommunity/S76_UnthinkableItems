function CategoryFilter() {
  const categories = [
    'All Items',
    'Kitchen Gadgets',
    'Pet Products',
    'Tech Nonsense',
    'Bathroom Oddities',
    'Fashion Fails',
    'Home Decor',
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <h2 className="text-2xl font-bold mb-4 sm:mb-0">Browse Categories</h2>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search weird stuff..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border bg-yellow-300 text-gray-900 border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full text-sm font-medium bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-all duration-200"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryFilter;