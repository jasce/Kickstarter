import React from 'react'
/* eslint-disable */
let ProjectModal = props => {
  const { closeModal, projectInformation } = props
  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={closeModal} />
      <div className="modal-container">
        <div className="modal-header">
          <h1>Project Details</h1>
          <span className="pull-right close" onClick={closeModal}>
            &times;
          </span>
        </div>
        <div className="modal-content">
          {projectInformation &&
            Object.keys(projectInformation).map(project => (
              <div>
                <p className="mp-label">{project}</p>
                <p className="mp-value">
                  {project === 'url'
                    ? `https://www.kickstarter.com${
                        projectInformation[project]
                      }`
                    : projectInformation[project]}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
