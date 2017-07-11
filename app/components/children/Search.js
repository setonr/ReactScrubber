var React = require("react");

var Search = React.createClass({
  getInitalState: function() {
    return { topic: "", startDate: "", endDate: ""};
  },

  handleChange: function(event) {
    var newState ={};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  
  handleSubmit: function(event) {
    event.preventDefault();

    this.props.setSearch(this.state.topic);
    this.props.setSearch(this.state.startDate);
    this.props.setSearch(this.state.endDate);

    this.setState({topic: ""}, {startDate: ""}, {endDate: ""});
  },

  render: function() {
    return (
      
      <div id="searchForm">

        <form onSubmit={this.handleSubmit}>
          <div class="form-group row">
            <label for="topic" class="col-2 col-form-label">Topic</label>
            <div class="col-10">
              <input class="form-control" type="text" value={this.state.topic} id="topic" onChange={this.handleChange}></input>
            </div>
          </div>

          <div class="form-group row">
            <label for="startYear" class="col-2 col-form-label">Start Year</label>
            <div class="col-10">
              <input class="form-control" type="text" value={this.state.startYear} id="startYear" onChange={this.handleChange}></input>
            </div>
          </div>

          <div class="form-group row">
            <label for="endYear" class="col-2 col-form-label">End Year</label>
            <div class="col-10">
              <input class="form-control" type="text" value={this.state.endYear} id="endYear" onChange={this.handleChange}></input>
            </div>
          </div>

          <button class="btn btn-primary searchBtn" type="submit">Search</button>
        </form>

      </div>
    )
  }
});

module.exports = Search;