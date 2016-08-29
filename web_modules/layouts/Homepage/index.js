import React, { Component, PropTypes } from "react"
import { fetchRepoData } from "../../app/api/api"
import { connect } from "react-redux"
import { fetchData, searchData } from "../../app/actions"
import "./index.scss"

class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }
  static propTypes = {
    dispatch: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]),
    repoData: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    filterData: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  };

  componentDidMount() {
    const { dispatch } = this.props
    fetchRepoData().then((data) => {
      dispatch(fetchData(data))
    })
  }

  handleSearchRepo(event) {
    const { dispatch } = this.props
    dispatch(searchData(event.target.value))
  }
  render() {
    const { filterData } = this.props
    return (
      <div className="homepage">
      <h3> { "Nord open source repo" } </h3>
      <input type="text"  placeholder="Search.. "
        onChange={ this.handleSearchRepo.bind(this) }
      />
      { filterData.map((repo, index) => {
        return (
          <div key={ index } className="col-sm-4">
            <div className="repobox" >
              <a href={ repo.html_url }>
                <p>{ repo.name }</p>
                <p>{ repo.description }</p>
              </a>
            </div>
          </div>
        )
      }) }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    repoData: state.repoReducer.repoData,
    filterData: state.repoReducer.filterData,
  }
}

export default connect(mapStateToProps)(Homepage)
