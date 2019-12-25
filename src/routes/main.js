import React from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from "react-router-dom"

import { getPersons } from '../actions/index'
import { MainPageContainer, PersonContainer } from '../containers'

class Main extends React.Component {

 componentDidMount() {
  this.props.getPersons()
 }

 render() {
  return (
   <main>
    <Switch>
     <Route path={"/"} exact component={MainPageContainer} />
     <Route path={"/character/:id"} component={PersonContainer} />
    </Switch>
   </main>
  )
 }
}
const mapDispatchToProps = {
 getPersons
}
export const MainContainer = connect(null, mapDispatchToProps)(Main)