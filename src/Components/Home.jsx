import React from 'react'
import { getProjects } from '../services/kickstarterService'
import ProjectItem from './ProjectItem'
import ProjectFilters from './ProjectFilters'
import ProjectModal from './ProjectModal'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.projectData = []
    this.sortOptions = [
      {
        value: 'percentFundedAscending',
        label: 'Percentage Funded - Low to High',
        type: 'ascending',
        field: 'percentage.funded'
      },
      {
        value: 'percentFundedDescending',
        label: 'Percentage Funded - High to Low',
        type: 'descending',
        field: 'percentage.funded'
      },
      {
        value: 'oldProjects',
        label: 'Projects - Old to New',
        type: 'dateAscending',
        field: 'end.time'
      },
      {
        value: 'newProjects',
        label: 'Projects - New to Old',
        type: 'dateDescending',
        field: 'end.time'
      }
    ]
    this.state = {
      projectList: [],
      selectedOption: '',
      showInformationModal: false,
      selectedProject: null
    }
  }

  componentDidMount() {
    this.fetchProjects()
  }

  sortList = (by, type, value) => {
    const { projectList } = this.state
    let projects
    if (type === 'dateAscending') {
      projects = projectList.sort((a, b) => {
        return new Date(a[by]) - new Date(b[by])
      })
    } else if (type === 'dateDescending') {
      projects = projectList.sort((a, b) => {
        return new Date(b[by]) - new Date(a[by])
      })
    } else if (type === 'ascending') {
      projects = projectList.sort((a, b) => {
        if (a[by] < b[by]) return -1
        if (a[by] > b[by]) return 1
        return 0
      })
    } else if (type === 'descending') {
      projects = projectList.sort((a, b) => {
        if (a[by] > b[by]) return -1
        if (a[by] < b[by]) return 1
        return 0
      })
    }
    this.setState({ projectList: projects, selectedOption: value })
  }

  onSortOptionClick = option => {
    this.sortList(option['field'], option['type'], option['value'])
  }

  onProjectClick = project => {
    document.body.classList.add('modal-open')
    this.setState({ showInformationModal: true, selectedProject: project })
  }

  filterProjectsByTitle = e => {
    const { value } = e.target
    let projects = this.projectData.filter(p => {
      return p['title'].toLowerCase().includes(value.toLowerCase())
    })
    this.setState({ projectList: projects })
  }

  onLinkClick = e => {
    e.stopPropagation()
  }

  fetchProjects = () => {
    getProjects().then(res => {
      this.projectData = res
      this.setState({ projectList: res }, () => {
        this.sortList(
          'percentage.funded',
          'ascending',
          'percentFundedAscending'
        )
      })
    })
  }

  closeModal = () => {
    document.body.classList.remove('modal-open')
    this.setState({ showInformationModal: false })
  }

  render() {
    const {
      projectList,
      selectedOption,
      showInformationModal,
      selectedProject
    } = this.state
    return (
      <div className="projects-wrapper">
        <h1 className="project-title">Listing Kickstarter Projects</h1>
        <ProjectFilters
          onChange={this.filterProjectsByTitle}
          sortOptions={this.sortOptions}
          onSortOptionClick={this.onSortOptionClick}
          selectedOption={selectedOption}
        />
        {showInformationModal && (
          <ProjectModal
            projectInformation={selectedProject}
            closeModal={this.closeModal}
          />
        )}

        {projectList.length > 0 &&
          projectList.map(project => (
            <ProjectItem
              key={project['s.no']}
              projectData={project}
              onProjectClick={this.onProjectClick}
              onLinkClick={this.onLinkClick}
            />
          ))}
      </div>
    )
  }
}

export default Home
