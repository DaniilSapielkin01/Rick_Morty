
import { SET_PERSONS } from '../constans'

const initialValues = {
  persons: []
}

export const persons = (state = initialValues, action) => {
  switch (action.type) {
    case SET_PERSONS:
      return {
        ...state,
        persons: action.payload
      }
    default:
      return state
  }
}