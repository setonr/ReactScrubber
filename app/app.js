var React = require("react");
var ReactDOM = require("react-dom");

var Header = require("./components/Header");
var Results = require("./components/Results");
var Search = require("./components/Search");
var Saved = require("./components/Saved");

ReactDOM.render(
  <div className="main-container">
    <Header />
    <Search />
    <Results />
    <Saved />
  </div>
  , document.getElementById("app")
);