import React from "react"
import Hero  from "../components/hero/hero"
import SEO from "../components/seo"

class IndexPage extends React.Component {


  render() {
    return (
      <>
        <SEO title="Submit Scan" />
        <Hero />
      </>
    );
  }
}

export default IndexPage;
