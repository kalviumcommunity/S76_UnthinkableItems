import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import CategoryFilter from '../components/CategoryFilter'
import ProductGrid from '../components/ProductGrid'
import ProductOfTheDay from '../components/ProductOfTheDay'
import Footer from '../components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <ProductOfTheDay />
      <CategoryFilter />
      <ProductGrid />
      <Featured />
      <Footer />
    </div>
  )
}

export default App