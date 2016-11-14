import { FETCH_DATA, SEARCH_DATA, STOP_FETCH, FILTER_BY } from "./actions"
import { createFilter } from "react-search-input"

const initialState = {
  repoData: [],
  filterData: [],
  hasMore: true,
}

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_DATA:
    return Object.assign({}, state, {
      repoData: state.repoData.concat(action.filterdata),
      filterData: state.filterData.concat(action.filterdata),
    })
  case SEARCH_DATA:
    return Object.assign({}, state, {
      filterData: state.repoData.filter(
        createFilter(action.searchText, "name")),
    })
  case STOP_FETCH:
    return Object.assign({}, state, { hasMore: false })
  case FILTER_BY:
    return Object.assign({}, state, {
      filterData: state.repoData.filter((repo) => repo.language === action.lang),
    })
  default:
    return state
  }
}

export default repoReducer
