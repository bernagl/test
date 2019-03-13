import { ADD_CUIDADOR } from '../constants'

const initialState = [
  {
    pais: 'México',
    name: 'Chuck',
    phone: '11576894838',
    email: 'chuck@email.com'
  },
  {
    pais: 'Argentina',
    name: 'Marta',
    phone: '23234234234',
    email: 'marta@email.com'
  }
]

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CUIDADOR:
      return [...state, action.payload]
    default:
      return state
  }
}
