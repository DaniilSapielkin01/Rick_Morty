import React from 'react';
import { connect } from 'react-redux'

class Person extends React.Component {
 state = {
  person: {}
 }
 componentDidMount() {
  const { match, persons } = this.props
  const personId = match.params.id
  const person = persons.find(item => item.id === personId);

  this.setState({ person })
 }


 render() {
  const { person } = this.state
  console.log("this.state", this.state.person);

  return <div className="">
   {/* <img src={person.image} alt="image" /> */}
   {/* <h1>{person.name}</h1> */}
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aspernatur. Nostrum nulla architecto, eos iste in ipsa nesciunt quo dicta aliquam iure commodi earum impedit dolor placeat quaerat eveniet maxime.
  </div>
 }
}


const MapStateToPtrops = (state) => ({
 persons: state.data.persons

})

export const PersonContainer = connect(MapStateToPtrops)(Person)