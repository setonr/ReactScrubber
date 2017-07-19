var React = require("react");
var Search = require("./children/Search");
var Saved = require("./children/Saved");
var helpers = require("./utils/helpers");

var Main = React.createClass({

  getInitialState: function() {

    return { searchTerm: "", startYear: "", endYear: "", firstSearch: true };
    },

    setSearchState: function (newSearchTerm, newStartYear, newEndYear) {
      this.setState ({
        searchTerm: newSearchTerm,
        startYear: newStartYear,
        endYear: newEndYear,
        firstSearch: false
      })
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
          {this.props.children}
        </div>

    </div>
    );
  }
});

module.exports = Main;