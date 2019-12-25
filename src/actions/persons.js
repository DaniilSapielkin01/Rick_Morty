import axios from 'axios'

import { URL_PERSONS, SET_PERSONS, IS_LOADING, LOADING_FAIL } from '../constans'

export const loadingFail = () => ({
  type: LOADING_FAIL
})

export const isLoading = () => ({
  type: IS_LOADING
})

export const setPersons = (persons) => ({
  type: SET_PERSONS,
  payload: persons
})


export const getPersons = () => {
  return dispatch => {
    dispatch(isLoading)
    axios
      .get(URL_PERSONS)
      .then(({ data }) => {
        dispatch(setPersons(data.results))
        // console.log("action_person", data.results)
      }
      )
      .catch((error) => {
        dispatch(loadingFail())
        console.error(error)
      }
      )
  }
}