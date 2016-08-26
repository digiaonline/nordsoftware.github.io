import { FETCH_DATA } from "./actions"

const initialState = {
  repoData: [],
}

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_DATA:
    return Object.assign({}, state, { repoData: action.data })
  default:
    return state
  }
}

export default repoReducer
