import React from "react"
import Hero  from "../components/hero/hero"
import Input  from "../components/input/input"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"

class IndexPage extends React.Component {
// TODO make an function that makes <Input> with criteria being cycled through, maybe make line inline css

  render() {
    return (
      <>
        <SEO title="Submit Scan" />
        <div className="flexer">
          <Hero />
          <aside>
            <Input criterion="Bodies Reported" line="true"/>
            <Input criterion="Emergencies Called" line="true"/>
            <Input criterion="Tasks Completed" line="true"/>
            <Input criterion="All Tasks Completed" line="true"/>
            <Input criterion="Sabotages Fixed" line="true"/>
            <Input criterion="Impostor Kills" line="true"/>
            <Input criterion="Times Murdered" line="true"/>
            <Input criterion="Times Ejected" line="true"/>
            <Input criterion="Crewmate Streak" line="true"/>
            <Input criterion="Times Impostor" line="true"/>
            <Input criterion="Times Crewmate" line="true"/>
            <Input criterion="Games Started" line="true"/>
            <Input criterion="Games Finished" line="true"/>
            <Input criterion="Impostor Vote Wins" line="true"/>
            <Input criterion="Impostor Kill Wins" line="true"/>
            <Input criterion="Sabotage Wins" line="true"/>
            <Input criterion="Crewmate Vote Wins" line="true"/>
            <Input criterion="Crewmate Task Wins"/>
          </aside>
        </div>
        <Footer />
      </>
    );
  }
}

export default IndexPage;
