
import React, { useState } from 'react'
import AllRoutes from './routes/AllRoutes'
import { Navbar } from './Pages';
 
const App = () => { 
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar isOpen={isOpen} handleIsOpen={ handleIsOpen }/>
      <main onClick={() => setIsOpen(false)} className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
          <AllRoutes />
      </main>
     </>
  )
}

export default App
