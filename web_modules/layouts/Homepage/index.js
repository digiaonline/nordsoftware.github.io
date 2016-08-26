import React, { Component, PropTypes } from "react"
import { fetchRepoData } from "../../app/api/api"
import { connect } from "react-redux"
import { fetchData } from "../../app/actions"
import "./index.scss"
class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }
  static propTypes = {
    dispatch: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]),
    repoData: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  };

  componentDidMount() {
    const { dispatch } = this.props
    fetchRepoData().then((data) => {
      console.log(data)
      dispatch(fetchData(data))
    })
  }

  render() {
    const { repoData } = this.props
    return (
      <div className="homepage">
      <h3> { "Nord open source repo" } </h3>
      { repoData.map((repo, index) => {
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
  console.log(state)
  return {
    repoData: state.repoReducer.repoData,
  }
}

export default connect(mapStateToProps)(Homepage)
