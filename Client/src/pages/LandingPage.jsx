import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import CategoryFilter from '../components/CategoryFilter'
import ProductGrid from '../components/ProductGrid'
import ProductOfTheDay from '../components/ProductOfTheDay'
import Footer from '../components/Footer'

function App() {

  return (
    <div>
      <Navbar />
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