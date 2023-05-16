import { MouseEvent, useState, createContext, SetStateAction } from 'react'
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'

import Profile from './components/sections/Profile'
import About from './components/sections/About'
import Experiences from './components/sections/Experiences'
import Projects from './components/sections/Projects'
import useWindowSize from './hooks/useWindowSize'

type AppContextValue = {
  sectionInView: string,
  setSectionInView: React.Dispatch<SetStateAction<string>>
}

export const AppContext = createContext<AppContextValue | undefined>(undefined)

function App() {
  const { width } = useWindowSize()
  const [sectionInView, setSectionInView] = useState('about')

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    if(width < 1024){
      mouseX.set(0)
      mouseY.set(0)
    }

    if(width >= 1024){
      const { left, top } = currentTarget.getBoundingClientRect()
  
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }
  }
  
  const backgroundContainerStyle = {
    background: useMotionTemplate`radial-gradient(circle ${width >= 1024 ? '450px' : '0px'} at ${mouseX}px ${mouseY}px, rgb(163 230 53 / 0.15), transparent 80%)`
  }
  
  return (
    <AppContext.Provider value={{ sectionInView, setSectionInView }}>
      <main className="relative bg-neutral-900 max-w-screen min-h-screen font-inter">
        <motion.div
          onMouseMove={(event) => handleMouseMove(event)}
          className='w-full h-full flex flex-col lg:flex-row z-10'
          style={backgroundContainerStyle}
        >
          <div className='lg:w-2/5 lg:h-screen lg:flex lg:flex-col lg:sticky lg:top-0 lg:pl-20 lg:py-24 lg:justify-between'>
            <Profile />
          </div>
          <div className='scroll-smooth lg:w-3/5 lg:py-24 lg:px-12 lg:flex lg:flex-col lg:gap-72'>
            <About />
            <Experiences />
            <Projects />
          </div>
        </motion.div>
      </main>
    </AppContext.Provider>
  )
}

export default App
