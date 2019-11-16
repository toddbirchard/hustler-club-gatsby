import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../styles/app.less'

const IndexPage = () => (
  <Layout>
  <SEO title="Home"/>
  <div className="intro">
    <h1>{`HUSTLERS`}</h1>
    <h2>{`New York's finest Gentleman Club`}</h2>
    <h3>{`A Broiest Production. Invitation only.`}</h3>
    </div>
    <div className="video-container">
      <video className="videoObject center" autoPlay loop muted playsInline id="myVideo">
        <source src="vid/background.mp4" type="video/mp4" />
      </video>
    </div>

</Layout>
)

export default IndexPage
