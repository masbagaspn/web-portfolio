import { motion } from "framer-motion"

interface SectionProps {
    title: string
    children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <motion.section 
      id={title.toLowerCase()}
      className='flex flex-col text-neutral-100/90 scroll-mt-16 lg:p-0'
    >
        <div className='w-full h-fit px-6 py-6 sm:px-12 sticky top-0 left-0 bg-neutral-950/70 backdrop-blur-sm lg:hidden'>
            <h2 className='font-bold tracking-tight text-lime-400 md:text-2xl'>
                {title}
            </h2>
        </div>
        <div className="px-6 py-8 sm:px-12 sm:py-16 lg:p-0">
          { children }
        </div>
    </motion.section>
  )
}

export default Section