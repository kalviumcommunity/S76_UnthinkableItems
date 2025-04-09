function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-yellow-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-gray-900 font-bold text-2xl">WeirdBuys</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
              Home
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
              Categories
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
              Explore the weirdness
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
              Submit Item
            </a>
            <button href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 border-2 hover:text-gray-700">
              Login/Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;