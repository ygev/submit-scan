import React from "react"
import Hero  from "../components/hero/hero"
import Input  from "../components/input/input"
import Footer from "../components/footer/footer"
import SEO from "../components/seo"
import Particles from 'react-particles-js';
import "./index.css"

class IndexPage extends React.Component {
// TODO make an function that makes <Input> with criteria being cycled through, maybe make line inline css

  render() {
    return (
      <>
        <SEO title="Submit Scan" />
        <div className="flexer bg-black">
          <Hero />
          <aside>
            <div id="chartGenerator">
              <div id="inputContainer">
                <Input id="bodiesReported" criterion="Bodies Reported"/>
                <Input id="emergenciesCalled" criterion="Emergencies Called"/>
                <Input id="tasksCompleted" criterion="Tasks Completed" />
                <Input id="allTasksCompleted" criterion="All Tasks Completed" />
                <Input id="sabotagesFixed" criterion="Sabotages Fixed" />
                <Input id="imposterKills" criterion="Impostor Kills"/>
                <Input id="timesMurdered" criterion="Times Murdered" />
                <Input id="timesEjected" criterion="Times Ejected"/>
                <Input id="crewmateStreak" criterion="Crewmate Streak"/>
                <Input id="timesImposter" criterion="Times Impostor"/>
                <Input id="timesCrewmate" criterion="Times Crewmate"/>
                <Input id="gamesStarted" criterion="Games Started"/>
                <Input id="gamesFinished" criterion="Games Finished"/>
                <Input id="imposterVoteWins" criterion="Impostor Vote Wins"/>
                <Input id="imposterKillWins" criterion="Impostor Kill Wins"/>
                <Input id="imposterSabotageWins" criterion="Impostor Sabotage Wins"/>
                <Input id="crewmateVoteWins" criterion="Crewmate Vote Wins"/>
                <Input id="crewmateTaskWins" criterion="Crewmate Task Wins"/>
              </div>
              <div id="chartContainer">
                <canvas id="myChart" width="400" height="400"></canvas>
              </div>
            </div>
            
          </aside>
        </div>
        <Footer />
        <div id="particles-js">
        <Particles
                params={{
                  "particles": {
                      "number": {
                          "value": 160,
                          "density": {
                              "enable": true,
                              "value_area": 1500
                          }
                      },
                      "line_linked": {
                          "enable": false
                      },
                      "move": {
                          "direction": "right",
                          "speed": 0.05
                      },
                      "size": {
                          "value": 1.25
                      },
                      "opacity": {
                          "anim": {
                              "enable": true,
                              "speed": 1,
                              "opacity_min": 0.05
                          }
                      }
                  },
                  "interactivity": {
                      "events": {
                          "onclick": {
                              "enable": true,
                              "mode": "push"
                          }
                      },
                      "modes": {
                          "push": {
                              "particles_nb": 1
                          }
                      }
                  },
                  "retina_detect": true
              }} />
              </div>
            </>
          );
        }
      }

export default IndexPage;
