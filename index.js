function friend(friends){
    console.log(friends)
    let realFriends =[]
    for (let i = 0; i < friends.length; i++){
      console.log(friends[i].length)
      if (friends[i].length == 4){
        realFriends.push(friends[i])
      }
     }
     return realFriends
}