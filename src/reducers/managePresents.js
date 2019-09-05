<<<<<<< HEAD
export function managePresents(state, action) {
  switch(action.type) {
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents + 1}
=======
action = {
  type: "INCREASE"
}

export function managePresents(state, action){
  switch(action.type) {
    CASE 'INCREASE':
      return {state.numberOfPresents + 1}
>>>>>>> 5fd72d77bf3baafa109668f106c4bde126f9044d
    default:
      return state
  }
}
