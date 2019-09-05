<<<<<<< HEAD
export function manageFriends(state, action) {
  switch(action.type) {
    case 'ADD_FRIEND':
      const newFriendList = [...state.friends, action.friend]
      return {...state, friends: newFriendList}
    case 'REMOVE_FRIEND':
      const updatedList = state.friends.filter(friend => friend.id !== action.id)
      return {...state, friends: updatedList}
=======
let action = {
  type: "ADD_FRIEND",
  friend: "Chrome Boi"
}

export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return state
    case 'REMOVE_FRIEND':
      return state
>>>>>>> 5fd72d77bf3baafa109668f106c4bde126f9044d
    default:
      return state
  }
}
