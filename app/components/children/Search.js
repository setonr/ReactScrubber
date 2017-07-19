var React = require("react");

var Search = React.createClass({
  getInitalState: function() {
    return { searchTerm: "", startYear: "", endYear: "" };
  },

  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  
  handleSubmit: function(event) {
    event.preventDefault();

    if (this.state.searchTerm) {
      this.props.setSearchState(this.state.searchTerm, this.state.startYear, this.state.endYear);
    }
      this.setState({
        searchTerm: "",
        startYear: "",
        endYear: ""
      })
  },

  render: function() {
    return (
      
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search for Articles</h3>
        </div>
        <div className="panel-body text-center">

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="row">
                <div className="input-field offset-s2 col s2 ">
                    <i className="tiny material-icons prefix">search</i>
                    <input  value={this.state.searchTerm} onChange={this.handleChange} placeholder="" id="searchTerm" type="text" className="validate"/>  
                  </div>
                  <div className="input-field col s2">
                      <i className="tiny material-icons prefix">date_range</i>
                      <input value={this.state.startYear} onChange={this.handleChange} placeholder="" id="beginYear" type="number" className="validate"/> 
                  </div>
                  <div className="input-field col s2">
                      <i className="tiny material-icons prefix">date_range</i>
                      <input value={this.state.endYear} onChange={this.handleChange} placeholder="" id="endYear" type="number" className="validate"/> 
                  </div>
                  <div className="input-field col s2">
                      <button onSubmit={this.handleSubmit} type="submit" className="btn" id="submit">Submit</button> 
                  </div>
              </div>
            </div>
          </form>
          <div className="results"></div>
        </div>
      </div>
    )
  }
});

module.exports = Search;