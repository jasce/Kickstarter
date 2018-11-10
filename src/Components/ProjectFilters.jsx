import React from 'react'
/* eslint-disable */

let SearchProject = props => {
  const { selectedOption, sortOptions, onSortOptionClick } = props
  return (
    <div>
      <input
        placeholder="Search Project By Title"
        onChange={props.onChange}
        className="search-input"
      />
      <div className="sort-option-wrapper">
        <div>
          Sort By:
          <ul>
            {sortOptions.map(option => (
              <li
                value={option['value']}
                key={option['value']}
                onClick={onSortOptionClick.bind(this, option)}
                className={`${
                  selectedOption === option['value'] ? 'active' : ''
                }`}>
                {option['label']}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SearchProject
