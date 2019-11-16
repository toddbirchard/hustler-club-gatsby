import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (<Layout>
  <SEO title="Home"/>
  <div className="intro">
    <h1>{`HUSTLERS`}</h1>
    <h2>{`New York's finest Gentleman Club`}</h2>
    <h3>{`A Broiest Production. Invitation only.`}</h3>
  <video class="videoObject center" autoplay loop autobuffer muted playsinline id="myVideo">
    <source src="https://storage.cloud.google.com/planetjupyter/hustlers.mov" type="video/mp4" /></video>
  </div>
</Layout>)

export default IndexPage
