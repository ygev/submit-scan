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
        <canvas id="myChart" width="400" height="400"></canvas>
        <SEO title="Submit Scan" />
        <div className="flexer">
          <Hero />
          <aside>
            <Input criterion="Bodies Reported"/>
            <Input criterion="Emergencies Called"/>
            <Input criterion="Tasks Completed" />
            <Input criterion="All Tasks Completed" />
            <Input criterion="Sabotages Fixed" />
            <Input criterion="Impostor Kills"/>
            <Input criterion="Times Murdered" />
            <Input criterion="Times Ejected"/>
            <Input criterion="Crewmate Streak"/>
            <Input criterion="Times Impostor"/>
            <Input criterion="Times Crewmate"/>
            <Input criterion="Games Started"/>
            <Input criterion="Games Finished"/>
            <Input criterion="Impostor Vote Wins"/>
            <Input criterion="Impostor Kill Wins"/>
            <Input criterion="Sabotage Wins"/>
            <Input criterion="Crewmate Vote Wins"/>
            <Input criterion="Crewmate Task Wins"/>
          </aside>
        </div>
        <Footer />
      </>
    );
  }
}

export default IndexPage;
