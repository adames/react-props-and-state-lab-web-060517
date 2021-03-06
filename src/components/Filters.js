import React from 'react';

class Filters extends React.Component {

  filterHandle = (event) => {
    // this.setState({type: event.target.value})
    this.props.onChangeType(event.target.value)
  }

  findHandler = (event) => {
    this.props.onFindPetsClick(this.props.filters.type);
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.filterHandle}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.findHandler}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;

// Should have a filters prop that contains all of the filters in the App state (see below).
  // Hook up this value to the select component.
// Should have an onChangeType callback prop.
  // This callback prop gets called whenever the value of the <select> element changes.
  // It calls the onChangeType callback prop with one argument: the value of the select.
// Should have an onFindPetsClick callback prop.
  // This callback prop gets called when the users clicks the 'Find pets' button.
