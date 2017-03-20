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
          <div key={ index } className="col-sm-12 col-md-6 col-lg-4">
            <div className="repobox" >
              <a href={ repo.html_url }>
                <p>{ repo.name }</p>
                <p>{ repo.description }</p>
              </a>
              <div className="repobox--icons">
                <a href={ `${ repo.html_url }/stargazers` } >
                  <img src="assets/star.svg" />
                  { repo.stargazers_count }
                </a>
                &nbsp;
                <a href={ `${ repo.html_url }/watchers` } >
                  <img src="assets/download.svg" />
                  { repo.watchers_count }
                </a>
              </div>
            </div>
          </div>
        )
      }) }
      </div>
    )

  }
}

export default RepoList
