
// try{
//   function sum(x, y){
//     if(typeof x === 'number' && typeof y === 'number'){
//         return x + y;
//     } else{
//       throw "Thats an error";
//     }
//   }
//   console.log(sum("hey", 2))
// }
// catch(err){
// console.log(err)
// }
  

//   //check data types first and throw error

var user = {username: "sam", password: "123abc"};
try{
    function login(username, password){
    //check credentials
    if(username === "sam" && password === "123abc"){
      return "Welcome, Sam!"
    } else{
      throw new Error("Incorrect credentials, please try again")
    }
  }
  console.log(login("sam", "123abc"))
}
catch(err){
  console.log(err)
}