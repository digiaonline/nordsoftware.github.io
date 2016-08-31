export const FETCH_DATA = "FETCH_DATA"
export const SEARCH_DATA = "SEARCH_DATA"
export const STOP_FETCH = "STOP_FETCH"

export const fetchData = (data) => ({
  type: FETCH_DATA,
  data,
})

export const searchData = (searchText) => ({
  type: SEARCH_DATA,
  searchText,
})

export const stopFetchingData = () => ({
  type: STOP_FETCH,
})
