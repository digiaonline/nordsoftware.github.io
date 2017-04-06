import React, { Component, PropTypes } from "react"
import { Link } from "react-router"

import styles from "./index.scss"

import ReactIcon from "../../web_modules/Rect"

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
            <div className={ styles.repobox } >
              <Link to={ `/repo/${repo.id}` }>
                <p><ReactIcon index={ index } />{ repo.name }</p>
                <p>{ repo.description }</p>
              </Link>

              <div className={ styles.icons }>
                <a href={ `${ repo.url }/stargazers` } >
                  <img src="assets/star.svg" />
                  { repo.star }
                </a>
                &nbsp;
                <a href={ `${ repo.url }/watchers` } >
                  <img src="assets/download.svg" />
                  { repo.watcher }
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
