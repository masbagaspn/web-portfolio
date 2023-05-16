import { useRef, useEffect, useContext, useState } from 'react'
import projects from '../../data/projects.json'
import Tags from '../Tags'

import Card from '../commons/Card'
import Section from '../commons/Section'

import { CgArrowTopRight } from 'react-icons/cg'
import { AppContext } from '../../App'
import clsx from 'clsx'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import useWindowSize from '../../hooks/useWindowSize'

const Projects = () => {
    const { width } = useWindowSize()
    const context = useContext(AppContext)

    const [currentHoverTarget, setCurrentHoverTarget] = useState<string | undefined>(undefined)

    const projectsRef = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(projectsRef, {})
    const isVisible = !!entry?.isIntersecting

    
    useEffect(() => {
        const handleSectionInView = () => {
            if(isVisible){
                context?.setSectionInView('projects')
            }
        }
        handleSectionInView()
    }, [isVisible, context, width])

  return (
    <Section title='PROJECTS'>
        <div ref={projectsRef} className='flex flex-col gap-10 sm:gap-16'>
            { projects.map((project, idx) => (
                <a href={project.href} target="_blank" key={idx}>
                    <Card
                        onMouseEnter={() => setCurrentHoverTarget(project.name)}
                        onMouseLeave={() => setCurrentHoverTarget(undefined)}
                        className={clsx(
                            'lg:px-12 lg:py-8 lg:rounded-md',
                            { 'rounded-md transition bg-lime-400/5 border-lime-400 shadow-sm' : currentHoverTarget === project.name },
                            { 'bg-transparent opacity-50' : currentHoverTarget !== project.name && currentHoverTarget !== undefined }
                          )}
                    >
                        <h3 className='inline-flex items-center gap-1 text-lime-400 sm:text-2xl lg:text-neutral-100 lg:group-hover:text-lime-400 transition-color'>
                            {project.name}
                            <CgArrowTopRight className="lg:scale-75 group-hover:scale-100 transition" />
                        </h3>
                        <p className='mt-2 text-sm font-light sm:text-base sm:mt-6'>{project.description}</p>
                        <div className='mt-6 flex flex-wrap gap-2 sm:mt-10'>
                            {project.stacks.map((stack, idx) => (
                                <Tags key={idx}>
                                    <span>{stack}</span>
                                </Tags>
                            ))}
                        </div>
                    </Card>
                </a>
            ))}
        </div>
    </Section>
  )
}

export default Projects