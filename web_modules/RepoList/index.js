import React, { Component, PropTypes } from "react"
import toLower from "lodash/toLower"

class RepoList extends Component {
  static propTypes = {
    repoList: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  }

  render() {
    return (
      <div>
      { this.props.repoList.map((repo, index) => {
        const langicon = `devicon-${toLower(repo.language)}-plain`
        return (
          <div key={ index } className="col-sm-4">
            <div className="repobox" >
              <i className={ langicon }></i>
              <a href={ repo.html_url }>
                <p>{ repo.name }</p>
                <p>{ repo.description }</p>
              </a>
              <div className="repobox--icons">
                <a href={ `${ repo.html_url }/watchers` } >
                  <img src={ `https://img.shields.io/github/watchers/nordsoftware/${ repo.name }.svg?style=social&label=Watchers` } />
                </a>
                &nbsp;
                <a href={ `${ repo.html_url }/stargazers` } >
                  <img src={ `https://img.shields.io/github/stars/nordsoftware/${ repo.name }.svg?style=social&label=Stars` } />
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
