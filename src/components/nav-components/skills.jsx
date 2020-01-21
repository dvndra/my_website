import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import { getSkills } from "../services/fakeSkills";
import "./skills.css";
//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Skills extends Component {
  state = { skills: getSkills() };
  render() {
    return (
      <div id="mainSkills" className="container-fluid m-0 pt-3 pb-5">
        <div className="row px-5">
          <div className="col-md-5 mx-auto py-5">
            <CanvasJSChart options={this.state.skills[0]} />
          </div>
          <div className="col-md-5 mx-auto py-5">
            <CanvasJSChart options={this.state.skills[1]} />
          </div>
        </div>

        <div className="row px-5">
          <div className="col-md-5 mx-auto py-5">
            <CanvasJSChart options={this.state.skills[2]} />
          </div>
          <div className="col-md-5 mx-auto py-5">
            <CanvasJSChart options={this.state.skills[3]} />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
