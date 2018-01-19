function purchase(state = [], action) {
  switch(action.type) {
    case 'PURCHASE' :
      console.log("Köp köp..!");
      const i = action.index;
      console.log(i)
     break; 
    default:
      return state;
  }
}

export default purchase;