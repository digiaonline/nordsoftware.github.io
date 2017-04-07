export const FETCH_DATA = "FETCH_DATA"
export const SEARCH_DATA = "SEARCH_DATA"
export const STOP_FETCH = "STOP_FETCH"
export const FILTER_BY = "FILTER_BY"

const featureRepos = [
  "react-boilerplate",
  "react-flow-types",
  "react-foundation",
  "lumen-cors",
  "lumen-elasticsearch",
  "lumen-newrelic",
  "lumen-oauth2",
  "lumen-rbac",
]

export const fetchData = (data) => {
  const filterdata = []
  featureRepos.map((f) => {
    const x = data.filter(d => d.name === f)
    filterdata.push(...x)
  })
  return {
    type: FETCH_DATA,
    filterdata,
  }
}

export const searchData = (searchText) => ({
  type: SEARCH_DATA,
  searchText,
})

export const stopFetchingData = () => ({
  type: STOP_FETCH,
})

export const filterBy = (lang) => ({
  type: FILTER_BY,
  lang,
})
