import React from "react";
import "../global.css";
import "../reset.css";
import "./input.css"
import "../fonts/type.css"

const updateRadarChart = function() {
    var Chart = require('chart.js');
    Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.defaultFontFamily = 'LAN';
    Chart.defaults.global.legend.display = false;

    var ctx = document.getElementById('myChart').getContext('2d');
    let playerData = {
      bodiesReported: Number(document.getElementById("bodiesReported").value) || 0,
      emergenciesCalled: Number(document.getElementById("emergenciesCalled").value) || 0,
      tasksCompleted: Number(document.getElementById("tasksCompleted").value) || 0,
      allTasksCompleted: Number(document.getElementById("allTasksCompleted").value) || 0,
      sabotagesFixed: Number(document.getElementById("sabotagesFixed").value) || 0,
      imposterKills: Number(document.getElementById("imposterKills").value) || 0,
      timesMurdered: Number(document.getElementById("timesMurdered").value) || 0,
      timesEjected: Number(document.getElementById("timesEjected").value) || 0,
      crewmateStreak: Number(document.getElementById("crewmateStreak").value) || 0,
      timesImposter: Number(document.getElementById("timesImposter").value) || 1,
      timesCrewmate: Number(document.getElementById("timesCrewmate").value) || 1,
      gamesStarted: Number(document.getElementById("gamesStarted").value) || 2,
      gamesFinished: Number(document.getElementById("gamesFinished").value) || 2,
      imposterVoteWins: Number(document.getElementById("imposterVoteWins").value) || 0,
      imposterKillWins: Number(document.getElementById("imposterSabotageWins").value) || 0,
      imposterSabotageWins: Number(document.getElementById("imposterSabotageWins").value) || 0,
      crewmateVoteWins: Number(document.getElementById("crewmateVoteWins").value) || 0,
      crewmateTaskWins: Number(document.getElementById("crewmateTaskWins").value) || 0,

   
      graphLabels: ['BIG BRAIN', 'TRUSTWORTHY', 'DEADLY', 'HANDY', 'PROACTIVE'],
      graphMin:1,
      graphMax:100,
      graphStats: [1, 1, 1, 1, 1],
      
      
      //getters
       getCrewmateWinPercentage: function() {
        return ((this.crewmateVoteWins + this.crewmateTaskWins) / (this.timesCrewmate) * 100);
      },
      
      getImposterWinPercentage: function() {
        return ((this.imposterVoteWins + this.imposterKillWins + this.imposterSabotageWins) / (this.timesImposter) * 100);
      },
      
      getEjectionPercentage: function() {
        return ((this.timesEjected / this.gamesStarted) * 100)
      },
      
      imposterKillRatio: function() {
        return (this.imposterKills/this.timesImposter)
      },
      
      getEmergenciesCalledWeight: function() {
        return Math.min(( ((this.emergenciesCalled / this.gamesStarted) * 100) * 4), this.graphMax)
      },
      
      getBodiesReportedWeight: function() {
        // const maxPercentage = 35;
        const bodiesReportedMult = (100 / 35);
        return Math.min( ( ((this.bodiesReported / this.gamesStarted) * 100) * bodiesReportedMult), this.graphMax);
      },
        
      getProactiveLevel: function() {
        const finalProactiveLevel = (this.getEmergenciesCalledWeight() * 0.75) + (this.getBodiesReportedWeight() * 0.25);
        console.log("finalProactiveLevel");
        console.log(finalProactiveLevel);
        this.graphStats[4] = Math.min(finalProactiveLevel, this.graphMax);
      },
        
      getDeadlyLevel: function() {
        this.graphStats[2] = Math.min((this.imposterKillRatio() * 33.3), this.graphMax);
        return this.graphStats[2];
      },
      
      getSabotageFixWeight: function() {
        const finalFixPercent = ((this.sabotagesFixed / this.gamesStarted) * 100);
        console.log("finalFixPercent");
        console.log(finalFixPercent);
        return Math.min(finalFixPercent, this.graphMax);
      },
      
      getTasksFinishedWeight: function() {
        const averageTasksCompleted = 3;
        return Math.min(( ( (this.tasksCompleted/averageTasksCompleted) / this.timesCrewmate) * 100), this.graphMax);
      },
      
      getHandyLevel: function() {
        //sabotageFixWeight * 0.7 + tasksFinishedWeight 0.3
        this.graphStats[3] = ((this.getSabotageFixWeight() * 0.7) + (this.getTasksFinishedWeight() * 0.3));
        console.log("handyLevel");
        console.log(this.graphStats[3]);
        return this.graphStats[3];  
      },
      
      getBigBrainLevel: function() {
        const maxPercentage = 75;
        const scaleFactor = (100 / maxPercentage);
        let finalCrewmateWeight = this.getCrewmateWinPercentage() >= maxPercentage ? maxPercentage : this.getCrewmateWinPercentage();
        let finalImposterWeight = this.getImposterWinPercentage() >= maxPercentage ? maxPercentage : this.getImposterWinPercentage();
        
        finalCrewmateWeight = finalCrewmateWeight * scaleFactor;
        finalImposterWeight = finalImposterWeight * scaleFactor;
        console.log("finalCrewmateWeight");
        console.log(finalCrewmateWeight);
        console.log("finalImposterWeight");
        console.log(finalImposterWeight);

        this.graphStats[0] = (finalCrewmateWeight * 0.5) + (finalImposterWeight * 0.5);
        return this.graphStats[0];
      },
      
      getTrustLevel: function() {
        // const maxPercentage = 75;
        // const scaleFactor = (100 / maxPercentage);
        // const timesImposterPercentage = ((this.timesImposter / this.gamesStarted) * 100);
        // const timesImposterWeight = timesImposterPercentage >= maxPercentage ? maxPercentage : timesImposterPercentage; 
        const finalTrustLevel = ( (this.getCrewmateWinPercentage() * 1.1) );
        this.graphStats[1] = Math.min(finalTrustLevel, this.graphMax);
        return this.graphStats[0];
      },
      
      updateGraph: function(){
        const testData = {
        labels: this.graphLabels,
        datasets: [
          {
            data: this.graphStats,
            backgroundColor: 'rgba(37, 193, 110, 0.5)',
            borderColor:'rgba(37, 193, 110, 1)',
            lineTension: 0.05,
            label:"PLAYER DIAGNOSIS",
            pointBackgroundColor: 'white'
          }
        ]
        }
        const testOptions = {
            scale: {
                gridLines: {
                  display: true,
                  circular: false,
                  color:'rgba(37, 193, 110, 0.75)',
                },
                angleLines: {
                    display: false
                },
                pointLabels: {
                  fontSize: 16
                },
                ticks: { 
                    display: false,
                    suggestedMin: this.graphMin,
                    suggestedMax: this.graphMax
                }
            },
          borderColor: 'rgba(0.5,0,0,0.1)'
        };
        const myRadarChart = new Chart(ctx, {
            type: 'radar',
            data: testData,
            options: testOptions
        });
      },
      
      updateAndDrawData: function(){
        this.getProactiveLevel();
        this.getDeadlyLevel();
        this.getBigBrainLevel();
        this.getTrustLevel();
        this.getHandyLevel();
        this.updateGraph();
      }
    };

    const updatePlayerData = function(){
      playerData.updateAndDrawData();
    }

    updatePlayerData();
};


function updatePage() {
    updateRadarChart();
    colorGreen();
}


function changeToEditStatsButton() {
  console.log("changing to edit stats button....");
  let diagnoseButton = document.getElementsByTagName("button")[0];
  diagnoseButton.classList.remove("button__white");
  diagnoseButton.classList.add("button__white", "button__default");
  diagnoseButton.innerHTML = "<h3>Edit Stats</h3>";
  diagnoseButton.addEventListener("click", diagnoseClicked)
}

function diagnoseClicked() {
  let diagnoseButton = document.getElementsByTagName("button")[0];
  document.getElementById("chartContainer").style.display = "block";
  document.getElementById("inputContainer").style.display = "none";
  changeToEditStatsButton();
}

function changeToDiagnoseButton() {
  console.log("all is valid");
  console.log("changing to diagnose button....");
  let diagnoseButton = document.getElementsByTagName("button")[0];
  diagnoseButton.classList.add("button__green", "button__default");
  diagnoseButton.innerHTML = "<h3>Diagnose</h3>";
  diagnoseButton.addEventListener("click", diagnoseClicked)
}

function colorGreen() {
    var allValid = true;
    for (var i = 0; i < 19; i++) {
        var input = document.getElementsByTagName('input')[i];
        if(input.checkValidity() === true){
            console.log("onBlur Running")
            document.getElementsByClassName("input__wrapper")[i].classList.add("input__wrapper--filled");
            document.getElementsByClassName("input--default")[i].classList.add("input--filled");
            document.getElementsByClassName("input__line")[i].classList.add("glowInner");
        } else {
            allValid = false;
        }
    }
    if (allValid === true) {
      document.getElementsByTagName("nav")[0].classList.add("glowOuter", "greenBorderRight");
      document.getElementsByClassName("buttonLine")[0].classList.add("glowInner");
      changeToDiagnoseButton();
    }
}

export default (props) => (
    <>
    <div className="inputLine__wrapper">
        <div className="input__wrapper">
            <label htmlFor="criterion"><h4>{props.criterion}</h4></label>
            <input onBlur={updatePage} id={props.id} className="inputField input--default" type="number" name="criterion" required
                minLength="1" maxLength="5" placeholder="EMPTY"></input>
        </div>
        <div className="input__line">
        </div>
    </div>
    </>
);
