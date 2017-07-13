var React = require("react");

var Search = React.createClass({
  getInitalState: function() {
    return { term: "" };
  },

  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  
  handleSubmit: function(event) {
    event.preventDefault();

    this.props.setTerms(this.state.term);

    this.setState({ term: "" });
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
              <h4 className="">
                <strong>Topic</strong>
              </h4>

              {/*
                TODO: need to add start and end date options
             
              <input
                type="text"
                value={this.state.term}
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />
               */}
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Search;