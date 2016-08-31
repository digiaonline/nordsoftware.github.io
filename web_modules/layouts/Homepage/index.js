import React, { Component, PropTypes } from "react"
import { fetchRepoData } from "../../app/api/api"
import { connect } from "react-redux"
import { fetchData, searchData, stopFetchingData } from "../../app/actions"
import InfiniteScroll from "react-infinite-scroller"
import RepoList from "../../RepoList"
import "./index.scss"

class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }
  static propTypes = {
    dispatch: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]),
    repoData: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    filterData: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    hasMore: PropTypes.bool,
  };

  componentDidMount() {
    const { dispatch } = this.props
    fetchRepoData(0).then((data) => {
      dispatch(fetchData(data))
      if (data.length < 1) {
        dispatch(stopFetchingData())
      }
    })
  }

  loadRepoData(pageNum) {
    const { dispatch } = this.props
    fetchRepoData(pageNum).then((data) => {
      dispatch(fetchData(data))
      if (data.length < 30) {
        dispatch(stopFetchingData())
      }
    })
  }

  handleSearchRepo(event) {
    const { dispatch } = this.props
    dispatch(searchData(event.target.value))
  }
  render() {
    const { filterData, hasMore } = this.props
    return (
      <div className="homepage">
      <h3> { "Nord open source repo" } </h3>
      <input type="text"  placeholder="Search.. "
        onChange={ this.handleSearchRepo.bind(this) }
      />
      <InfiniteScroll
        pageStart={ 0 }
        loadMore={ this.loadRepoData.bind(this) }
        hasMore={ hasMore }
        loader={ '<div className="ball-loader">Loading ...</div>' }
      >
          <RepoList repoList={ filterData } />
      </InfiniteScroll>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    repoData: state.repoReducer.repoData,
    filterData: state.repoReducer.filterData,
    hasMore: state.repoReducer.hasMore,
  }
}

export default connect(mapStateToProps)(Homepage)
