import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"

// Import global CSS before other components and their styles
import "./index.global.scss"
import styles from "./index.scss"
import Header from "../Header"
import Footer from "../Footer"

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <div className={ styles.layout }>
        <Helmet
          meta={ [
            {
              name: "generator", content: `${
              process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
            },
            { property: "og:site_name", content: pkg.name },
            { name: "facebook:site", content: `@${ pkg.facebook }` },
            { name: "repository:site", content: `@${ pkg.repository }` },
            { name: "linkedin:site", content: `@${ pkg.linkedin }` },
          ] }
          script={ [
            { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
          ] }
        />

        { /* meta viewport safari/chrome/edge */ }
        <Helmet
          meta={ [ {
            name: "viewport", content: "width=device-width, initial-scale=1",
          },{
            name: "theme-color", content: "#ffffff",
          },
          ] }
          link={ [
            { rel: "apple-touch-icon",
              href: "/apple-touch-icon.png", sizes:"180x180",
            },
            { rel: "icon", type:"image/png",
              href: "/favicon-32x32.png", sizes:"32x32",
            },
            { rel: "icon", type:"image/png",
              href: "/favicon-16x16.png", sizes:"16x16",
            },
            { rel: "manifest", href: "/manifest.json" } ,
            { rel: "mask-icon", href: "/safari-pinned-tab.svg",
              color: "#5bbad5",
            },
          ] }
        />
        <style>{ "@-ms-viewport { width: device-width; }" }</style>

        <Header />
        <div className={ styles.content }>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}
