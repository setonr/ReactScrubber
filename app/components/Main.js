var React = require("react");

var Main = React.createClass({
  render: function() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              <h1>ReactScrubber</h1>
            </a>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Main;