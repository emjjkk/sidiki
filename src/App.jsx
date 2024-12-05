import { useState } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
      <footer className="w-full bg-black text-white text-sm flex p-2 justify-between">
        &copy; Daniel Sidiki 2024. Website designed by @emjjkk
        <p className="text-sm">Built with <i className="fa-solid fa-heart"></i> and <i className="fa-brands fa-react"></i></p>
      </footer>
    </>
  )
}

export default App
