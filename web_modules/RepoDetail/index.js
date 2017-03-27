import React, { PropTypes } from "react"
import repoList from "../app/api/cache.json"

class RepoDetail extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      currentRepo: {},
    }
  }

  componentWillMount() {
    const { repoId } = this.props.params

    const currentRepo = repoList.find(repo => repo.id === parseInt(repoId))

    this.setState({
      currentRepo : currentRepo,
    })
  }

  render() {
    const { currentRepo } = this.state
    return (
      <div className="repo-detail">
        <div className="repo-detail__hero col-md-8">
          <a href={ currentRepo.url }>{ currentRepo.name }</a>
          <p> { currentRepo.description }</p>
        </div>
      </div>)
  }
}

RepoDetail.propTypes = {
  params: PropTypes.object,
}

export default RepoDetail
