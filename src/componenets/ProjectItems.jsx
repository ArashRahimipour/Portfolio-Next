import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './projectItem.css'

const ProjectItems = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='projects'>
      <Image className='project-pic' src={backgroundImg} alt='/' width={400}/> 
      <div className='wrap-project'>
        <h3>{title}</h3>
        <p className=''>{tech}</p>
        <Link href={projectUrl}>
            <p className='info'>More Info</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItems;