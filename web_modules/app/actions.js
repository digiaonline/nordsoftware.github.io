export const FETCH_DATA = "FETCH_DATA"
export const SEARCH_DATA = "SEARCH_DATA"

export const fetchData = (data) => ({
  type: FETCH_DATA,
  data,
})

export const searchData = (searchText) => ({
  type: SEARCH_DATA,
  searchText,
})
