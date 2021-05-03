//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { Pick } from "./component/pick.js";
import Select from "./component/select.js";

//render your react application
ReactDOM.render(<Select />, document.querySelector("#app"));
