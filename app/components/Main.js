var React = require("react");

var Search = require("./children/Search");
var Saved = require("./children/Saved");

var helpers = require("./utils/helpers");

var Main = React.createClass({

  getInitialState: function() {
  {/*TODO: add saved*/}
    return { searchTerm: "", results : "" };
  },

  componentDidUpdate: function(prevProps, prevState) {
    if(prevState.searchTerm !== this.state.searchTerm) {
      console.log("UPDATED");

      helpers.runQuery(this.state.searchTerm).then(function(data) {
        if (data !== this.state.results) {
          console.log(data);
          this.setState({ results: data });
        }
      }.bind(this));
    }
  },

  setTerms: function(term) {
    this.setState({ searchTerm: term });
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

        <div className="row">
          <div className="col-sm-12 searchBox">
            <Search setTerms={this.setTerms} />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 savedBox">
            <Saved savedArea={this.state.saved} />
          </div>
        </div>

    </div>
    );
  }
});

module.exports = Main;