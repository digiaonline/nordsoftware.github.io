import { FETCH_DATA, SEARCH_DATA } from "./actions"
import { createFilter } from "react-search-input"

const initialState = {
  repoData: [],
  filterData: [],
}

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_DATA:
    return Object.assign({}, state, {
      repoData: action.data, filterData: action.data,
    })
  case SEARCH_DATA:
    return Object.assign({}, state, {
      filterData: state.repoData.filter(
        createFilter(action.searchText, "name")),
    })
  default:
    return state
  }
}

export default repoReducer
