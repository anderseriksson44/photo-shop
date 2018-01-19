import firebase from "../firebase"

// export function login(user, passw){
//   return function(dispatch){
//     firebase.database().ref(`users`).push("user":user.email).push(passw)
//     .catch(error => {
//       dispatch({type: "FETCH_ERROR", error: error.message});
//     })
//   }
// }

// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
// export function addComment(comment, postId) {
//   return {
//     type: 'ADD_COMMENT',
//     comment,
//     postId
//   }
// }

export function addComment(comment){
  return function(dispatch){
    firebase.database().ref(`comments`).push(comment)
    .catch(error => {
      //Should use multiple errors! But I am too lazy :) You do it!
      dispatch({type: "FETCH_ERROR", error: error.message});
    })
  }
}


export function fetchComments(){
  return function(dispatch){
    return firebase.database().ref(`comments`).on('value', comments => {
        /* With once('value') we get an object of objects,  
         * to create an array of this it is easiest to push ever value */
        let tempList = [];
        comments.forEach(child => {
          /* Take every value, spread the values, But we also need the ID, the key
           * so we add a key-property and add the key from the object */
          tempList.push({...child.val(), key: child.key});
        })
        //When we are done creating the array, dispatch to state
        dispatch({ type: "FETCH_ALL_COMMENTS", comments: tempList });
    })
  }
}

// export function addComment(postId, author, comment) {
//   return {
//     type: 'ADD_COMMENT',
//     postId,
//     author,
//     comment
//   }
// }

// purchase


export function purchase(index) {
  return {
    type: 'PURCHASE',
    index
  }
}

// remove comment

export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}

export function userUpdate(){
    return function(dispatch){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
              firebase.database().ref(`users/${user.uid}`).once('value')
              .then(users => {
                dispatch({ type: "LOGIN", user: user })
              })
            }else{
                dispatch({ type: "LOGOUT", user: "" });
            }
        })
    }
}