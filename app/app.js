var React = require("react");
var ReactDOM = require("react-dom");

var Main = require("./components/Main");
var Search = require("./components/children/Search");
var Saved = require("./components/children/Saved");

ReactDOM.render(
  <div className="main-container">
    <Main />
    <Search />
    <Saved />
  </div>
  , document.getElementById("app")
);