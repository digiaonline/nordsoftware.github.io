import React, { Component, PropTypes } from "react"
import { fetchRepoData } from "../../app/api/api"
import { connect } from "react-redux"
import { fetchData, searchData, stopFetchingData } from "../../app/actions"
import InfiniteScroll from "react-infinite-scroller"
import RepoList from "../../RepoList"
import FilterList from "../../Filter/FilterList"
import "./index.scss"
import styles from "./index.scss"
import "../../../browserconfig.xml"
import uniq from "lodash/uniq"
import map from "lodash/map"
import flatten from "lodash/flatten"
import Helmet from "react-helmet"
import { joinUri } from "phenomic"

class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
    metadata: PropTypes.object.isRequired,
  }
  static propTypes = {
    dispatch: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]),
    repoData: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    filterData: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    hasMore: PropTypes.bool,
  };

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

  handleSearchRepo(event) {
    const { dispatch } = this.props
    dispatch(searchData(event.target.value))
  }
  render() {
    const { filterData, repoData, hasMore } = this.props

    // const cache = repoData.map(repo => ({
    //   id: repo.id,
    //   url: repo.url,
    //   name: repo.name,
    //   description: repo.description,
    //   stars: repo.stargazers_count,
    //   watchers: repo.watchers,
    //   forks:repo.forks,
    //   open_issues: repo.open_issues_count,
    //   custom_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo repudiandae placeat ipsam ab reprehenderit, \
    //                        nobis dolore ipsa saepe, illum maxime odio, \
    //                        cum tenetur dolorum ullam distinctio doloremque optio similique omnis.",
    //   links: [],
    // }))
    // console.log(JSON.stringify(cache, null, "\t"))

    const languages = uniq(map(flatten(repoData), "language"))
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
      <h3> { "Open source at Nord Software" } </h3>
      <input type="text"  placeholder="Search…"
        onChange={ this.handleSearchRepo.bind(this) }
      />
      <FilterList items={ languages } />
      <InfiniteScroll
        pageStart={ 0 }
        loadMore={ this.loadRepoData.bind(this) }
        hasMore={ hasMore }
        loader={
          <div className={ styles.loader }>
            <div className={ styles.spinner }></div>
          </div>
        }
      >
          <RepoList repoList={ filterData } />
      </InfiniteScroll>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    repoData: state.repoReducer.repoData,
    filterData: state.repoReducer.filterData,
    hasMore: state.repoReducer.hasMore,
  }
}

export default connect(mapStateToProps)(Homepage)
