// Using Javascript's Fetch API for making requests to Kickstarter API
/* eslint-disable */

let fetchConfig = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

function __parseJSON(response) {
  const clone = response.clone()
  return clone.text().then(text => {
    return text ? JSON.parse(text) : {}
  })
}

export function getProjects() {
  return fetch(`http://starlord.hackerearth.com/kickstarter`, fetchConfig).then(
    response => {
      return __parseJSON(response)
    }
  )
}
