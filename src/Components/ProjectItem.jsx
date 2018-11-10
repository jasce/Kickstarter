import React from 'react'
/* eslint-disable */
let ProjectItem = props => {
  const { projectData, onProjectClick, onLinkClick } = props
  return (
    <div
      className="project-item-container"
      onClick={onProjectClick.bind(this, projectData)}>
      <div className="project-item-wrapper" title="Click for more Details">
        <h1>{projectData['title']}</h1>
        <p className="project-by">By: {projectData['by']}</p>
        <p className="project-desc project-by">
          Description: {projectData['blurb']}
        </p>
      </div>
      <div className="project-item-content">
        <a
          href={`https://www.kickstarter.com/${projectData['url']}`}
          onClick={onLinkClick}
          target="_blank"
          title="Visit Project On Kickstarter">
          <span className="icon-link-ext" />
        </a>
        <p className="project-by">{`Percentage Funded: ${
          projectData['percentage.funded']
        }`}</p>
        <p className="project-by">{`End Date: ${new Date(
          projectData['end.time']
        ).toLocaleDateString()}`}</p>
      </div>
    </div>
  )
}

export default ProjectItem
