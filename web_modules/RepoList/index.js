import React, { Component, PropTypes } from "react"

class RepoList extends Component {
  static propTypes = {
    repoList: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  }

  render() {
    return (
      <div>
      { this.props.repoList.map((repo, index) => {
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

export default RepoList
