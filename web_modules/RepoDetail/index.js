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
      <div className="row hero-container">
        <div className="col-md-8">
          <div className="hero">
            <div className="content">
              <h1>{ currentRepo.name }</h1>
              <p className="ingress">
                { currentRepo.description }
              </p>
            </div>
          </div>
        </div>
        <div className="rotating-box animated infinite flash" />
      </div>
      <div className="row">
        <div className="col-sm-12 repo-detail__moreinfo">
          <div className="repo-detail__custom-description col-md-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non molestiae, dolore? Quisquam voluptatibus</p>
          </div>
          <div className="col-md-4">
            <div className="repo-detail__box">
              <a href={ currentRepo.url }>
                <h2>{ currentRepo.name }</h2>
              </a>
              <p className="ingress">
                { currentRepo.description }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

RepoDetail.propTypes = {
  params: PropTypes.object,
}

export default RepoDetail
