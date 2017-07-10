var React = require("react");

var Results = React.createClass({
  render: function() {
    return (
      <div id="resultsDiv">
        <h1 id="resultsHeader">Your Results</h1>
        <div id="results"></div>
      </div>
    )
  }
});

module.exports = Results;