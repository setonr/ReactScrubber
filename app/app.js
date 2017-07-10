var React = require("react");
var ReactDOM = require("react-dom");

var Header = require("./components/Main");
var Search = require("./components/Search");
var Saved = require("./components/Saved");

ReactDOM.render(
  <div className="main-container">
    <Main />
    <Search />
    <Saved />
  </div>
  , document.getElementById("app")
);