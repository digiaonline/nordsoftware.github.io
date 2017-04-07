import React, { PropTypes } from "react"
import repoList from "../app/api/cache.json"
import Header from "../../web_modules/Header"
import RectIcon from "../../web_modules/Rect"

import styles from "./index.scss"

class RepoDetail extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      currentRepo: {},
    }
  }

  componentWillMount() {
    const { repoId } = this.props.params

    const currentRepo = repoList[repoId]

    this.setState({
      currentRepo : currentRepo,
    })
  }

  render() {
    const { currentRepo } = this.state
    const { repoId } = this.props.params

    return (
    <div className={ styles.repoDetail }>
      <div className="clearfix hero-container">
        <Header />
        <div className={ `col-md-8 ${ styles.wrapper }` }>
          <div className={ styles.repoDetail__content }>
            <h1><RectIcon index={ parseInt(repoId) } />{ currentRepo.name }</h1>
            <p className={ styles.repoDetail__ingress }>
              { currentRepo.description }
            </p>
          </div>
        </div>
        <div className="rotating-box animated infinite flash" />
      </div>
      <div className="clearfix">
        <div className={ `col-sm-12 ${ styles.repoDetail__moreinfo }` }>
          <div className={ `${ styles.repoDetail__customDescription } col-sm-12 col-lg-8` }>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non molestiae, dolore? Quisquam voluptatibus</p>

            { currentRepo.links && currentRepo.links.length &&
              <div className={ styles.links }>
                <h2>Related links</h2>
                { currentRepo.links.map((link, index) => {
                  return (
                    <a href="link.url" key={ index }>{ link.title }</a>
                  )
                })
                }
              </div>
            }
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className={ styles.repoDetail__box }>
              <div className={ styles.padding }>
                <a href={ currentRepo.url }>
                  <h2>{ currentRepo.name }</h2>
                </a>
                <a href={ currentRepo.url }>
                  <p>github.com/nordsoftware/{ currentRepo.name }</p>
                </a>
                <div className={ styles.stats }>
                  <div className={ styles.stars }>
                    <p>{ currentRepo.star }</p>
                    <p>Stars</p>
                  </div>

                  <div className={ styles.watchers }>
                    <p>{ currentRepo.watcher }</p>
                    <p>Watchers</p>
                  </div>

                  <div className={ styles.contributors }>
                    <p>{ currentRepo.watcher }</p>
                    <p>contributors</p>
                  </div>
                </div>
              </div>

              <a className={ styles.github }href={ currentRepo.url }>
                  View in Github ->
              </a>
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
