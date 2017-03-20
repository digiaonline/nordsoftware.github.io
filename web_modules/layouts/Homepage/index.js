import React, { Component, PropTypes } from "react"
import InfiniteScroll from "react-infinite-scroller"
import { connect } from "react-redux"
import Helmet from "react-helmet"
import { joinUri } from "phenomic"

import "../../../browserconfig.xml"

import { fetchRepoData } from "../../app/api/api"
import { fetchData, stopFetchingData } from "../../app/actions"
import RepoList from "../../RepoList"

class Homepage extends Component {
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

  render() {
    const { filterData, hasMore } = this.props
    const { props, context } = this

    const {
      pkg,
    } = context.metadata

    const {
      __url,
      head,
    } = props

    const metaTitle = head.metaTitle ? head.metaTitle : head.title

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      {
        property: "og:url",
        content: joinUri(process.env.PHENOMIC_USER_URL, __url),
      },
      { property: "og:description", content: head.description },
      { property: "og:image", content: `${joinUri(process.env.PHENOMIC_USER_URL, __url)}assets/nordlogo.png` },
      { property: "og:image:url", content: `${joinUri(process.env.PHENOMIC_USER_URL, __url)}assets/nordlogo.png` },
      { property: "fb:app_id", content: "199114683830636" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: metaTitle },
      { name: "twitter:creator", content: `@${ pkg.twitter }` },
      { name: "twitter:description", content: head.description },
      { name: "description", content: head.description },
    ]

    return (
      <div className="homepage">
        <Helmet
          title={ metaTitle }
          meta={ meta }
        />
        <div className="row hero-container">
          <div className="col-md-8">
            <div className="hero">
              <div className="content">
                <h1>OPEN SOURCE</h1>
                <p className="ingress">
                  Our products and libraries are used by thousands of individuals, teams, and companies including Dropbox and.
                </p>
              </div>
            </div>
          </div>
          <div className="rotating-box animated infinite flash" />
        </div>
        <div className="row">
          <div className="col-sm-12 repo-container">
            <InfiniteScroll
              pageStart={ 0 }
              loadMore={ this.loadRepoData.bind(this) }
              hasMore={ hasMore }
            >
                <RepoList repoList={ filterData } />
            </InfiniteScroll>
          </div>
        </div>
      </div>
    )
  }
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
  metadata: PropTypes.object.isRequired,
}

Homepage.propTypes = {
  dispatch: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]),
  repoData: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  filterData: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  hasMore: PropTypes.bool,
}
function mapStateToProps(state) {
  return {
    repoData: state.repoReducer.repoData,
    filterData: state.repoReducer.filterData,
    hasMore: state.repoReducer.hasMore,
  }
}

export default connect(mapStateToProps)(Homepage)
