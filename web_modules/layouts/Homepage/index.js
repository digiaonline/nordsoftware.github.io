import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import { joinUri } from "phenomic"

import repoData from "../../app/api/cache.json"

import "../../../browserconfig.xml"

import Header from "../../Header"
import RepoList from "../../RepoList"

class Homepage extends Component {

  render() {
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
          <Header />
          <div className="col-md-8">
            <div className="hero">
              <div className="content">
                <h1>Open Source_</h1>
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
            <RepoList repoList={ repoData } />
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

export default Homepage
