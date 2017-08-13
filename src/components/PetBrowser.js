import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  isAdopted(pet){
    return this.props.adoptedPets.includes(pet.id)
  }

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet =>
          <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} isAdopted={this.isAdopted(pet)}/>
        )}
      </div>
    );
  }
}

export default PetBrowser;


// Should have a pets prop. This is an array of pets that the component uses to render <Pet /> components.
// Should have an onAdoptPet prop. This callback prop gets passed to its <Pet /> children components.
// Should have an adoptedPets prop. Use this prop to figure out if a pet is adopted or not,
  //and pass that result to the <Pet /> components in the form of an isAdopted prop.
