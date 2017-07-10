var React = require("react");

var Search = React.createClass({
  render: function() {
    return (
      <div id="searchForm">

        <div class="form-group row">
          <label for="topic" class="col-2 col-form-label">Topic</label>
          <div class="col-10">
            <input class="form-control" type="text" value="topic" id="topic"></input>
          </div>
        </div>

        <div class="form-group row">
          <label for="startYear" class="col-2 col-form-label">Start Year</label>
          <div class="col-10">
            <input class="form-control" type="text" value="startYear" id="startYear"></input>
          </div>
        </div>

        <div class="form-group row">
          <label for="endYear" class="col-2 col-form-label">End Year</label>
          <div class="col-10">
            <input class="form-control" type="text" value="endYear" id="endYear"></input>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Search;