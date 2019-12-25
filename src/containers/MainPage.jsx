import React from 'react'
import { connect } from 'react-redux'


import { PersonList } from '../components'

const MainPage = ({ persons }) => (
 <div className="container">
  <div className="row row-col-4 justify-content-center">
   {
    persons.map(item => (
     <PersonList key={item.id} person={item} />
    ))
   }
  </div>
 </div>
)
const MapStateToPtrops = (state) => ({
 persons: state.data.persons

})

export const MainPageContainer = connect(MapStateToPtrops)(MainPage)