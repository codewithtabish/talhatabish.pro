import React from 'react'
import ProjectsHomeSectionHeader from './project-home-header'
import HomeProjectsGrid from './home-project-grid'

const HomeProjectSection = ({locale='en'}:{locale:any}) => {
  return (
    <div>
      <ProjectsHomeSectionHeader locale={locale}/>
      <HomeProjectsGrid locale={locale}/>
    </div>
  )
}

export default HomeProjectSection
