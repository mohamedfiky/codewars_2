function friend(friends){
  //your code here
  let myFr = [] ;
  friends.map(fr => {
    if (fr.length ==4){
      myFr.push(fr);
    }
    
  })
      return myFr ;
}

let arr = ["ali", "moha", "asdfgrt", "khara", "dodo", "gjgjjgk", "tito"];

console.log(friend(arr));