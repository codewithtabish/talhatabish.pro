import React from 'react'
import ProjectsHomeSectionHeader from './project-home-header'
import HomeProjectsGrid from './home-project-grid'

const HomeProjectSection = ({locale='en',isHome=true}:{locale:any,isHome:boolean}) => {
  return (
    <div>
      <ProjectsHomeSectionHeader locale={locale}/>
      <HomeProjectsGrid locale={locale} isHome={isHome}/>
    </div>
  )
}

export default HomeProjectSection
