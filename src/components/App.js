import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onFindPetsClick = () => {
    let type = this.state.filters.type
    let petUrl= "/api/pets"
    if (type !== 'all'){
      petUrl += `?type=${type}`
    }
    debugger
    fetch(petUrl)
      .then(res => res.json())
      .then(pets => this.setState({pets}))
  }

  onChangeType = (animal) => {
    this.setState({
      filters: {type: animal}
    })
  }

  onAdoptPet = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;


// The app's initial state is already defined.
  //Pass the right state properties to the <Filters /> and <PetBrowser /> components.
// When the <Filters /> component calls the onChangeType prop you pass into it,
  //<App />'s state needs to be updated accordingly.
// When the <Filters /> component calls the onFindPetsClick prop you pass into it,
  //the <App /> component should fetch a list of pets using fetch.
    // The URL of the API is /api/pets with an optional query parameter.
    // If the type is 'all', send a request to /api/pets.
    // If the type is 'cat', send a request to /api/pets?type=cat. Do the same thing for dog and micropig.
    // Finally, set the pet data on the state property pets to properly pass them to the <PetBrowser /> component.
// When the <PetBrowser /> component calls the onAdoptPet prop you pass into it,
  //add the pet ID to the the adoptedPets array in the state.
