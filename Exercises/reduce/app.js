// const num = [1,2,3]
// const result1 = num.reduce(function(final, num){
//     final += num
//     return final
// // }, 0)
 
// // //  console.log(result1); // 6

// //  const num = [1,2,3]

// //  const result = num.reduce(function(final, num){
// //      final += num
// //      return final
// //  }, [])

// //  console.log(result)

//  var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// const result = voters.reduce(function(final, voter){
//     if(voter.voted){
//         final.didVote++
//     } else{
//         final.didnt++
//     } return final
// }, {didVote: 0, didnt: 0})

// console.log(result)

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// const result = wishlist.reduce(function(final, wishlist){
//     final += wishlist.price
//     return final
// // }, 0)

// // console.log(result)

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const result = arrays.reduce(function(final, arr){
    return final.concat(arr)
}, [])

// console.log(result)

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// const result = voters.reduce(function(final, voter){
//     if(voter.age <= 25){
//         if(voter.voted){
//             final.youngVoted++
//             final.youngTotal++
//         } else{
//             final.youngTotal++
//         }
//     } else if(voter.age <= 35 ){
//         if(voter.voted){
//             final.midVoted++
//             final.midTotal++
//         } else{
//             final.midTotal++
//         }
//     } else{
//         if(voter.voted){
//             final.oldVoted++
//             final.oldTotal++
//         } else{
//             final.oldTotal++
//         }
//     } return final
// }, {youngVoted: 0, youngTotal: 0, midVoted: 0, midTotal: 0, oldVoted: 0, oldTotal: 0})

console.log(result)