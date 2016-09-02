import { combineReducers } from "redux"
import createStore from "phenomic/lib/redux/createStore"
import * as phenomicReducers from "phenomic/lib/redux/modules"
import repoReducer from "./reducer"
const store = createStore(
  combineReducers({ ...phenomicReducers, repoReducer }),
  { ...(typeof window !== "undefined") && window.__INITIAL_STATE__ },
)
if (module.hot) {
  module.hot.accept([
    "./reducer",
  ], () => {
    const updatedReducer = combineReducers({
      // we still need to combine all reducers
      ...require("phenomic/lib/redux/modules"),
      ...require("./reducer"),
    })
    store.replaceReducer(updatedReducer)
  })
}

export default store
