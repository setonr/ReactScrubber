var React = require("react");

var Search = require("./children/Search");
var Saved = require("./children/Saved");

var helpers = require("./utils/helpers");

var Main = React.createClass({

  getInitialState: function() {
    return { topic: "", startDate: "", endDate: "", results: "" };
  },

  componentDidUpdate: function(prevProps, prevState) {
    if(prevState.topic !== this.state.topic) {
      console.log("UPDATED");

      helpers.runQuery(this.state.topic).then(function(data) {
        if (data !== this.state.results) {
          console.log(data);
          this.setState({ results: data });
        }
      }.bind(this));
    }
  },

  setTerms: function(topic, startDate, endDate) {
    this.setState({ topic: topic }, { startDate: startDate }, { endDate: endDate });
  },

  render: function() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
                <h1>ReactScrubber</h1>
            </div>
          </div>
        </nav>

        <div className="searchBox">
          <Search setSearch={this.setSearch} />
        </div>

        <div className="savedBox">
          <Saved savedArea={this.state.saved} />
        </div>
    </div>
    );
  }
});

module.exports = Main;