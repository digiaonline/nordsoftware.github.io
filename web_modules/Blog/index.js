import React, { Component, PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import PagesList from "../PagesList"

const numberOfLatestPosts = 6

class Blog extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {
    const latestPosts = enhanceCollection(this.context.collection, {
      filter: { layout: "Post" },
      sort: "date",
      reverse: true,
    })
    .slice(0, numberOfLatestPosts)

    return (
      <div>
        <h2>{ "Latest Posts" }</h2>
        <PagesList pages={ latestPosts } />
      </div>
    )

  }
}

export default Blog
