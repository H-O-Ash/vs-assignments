var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const result = peopleArray.filter(function(peeps){
    if(peeps.age >= 18){ 
        return peopleArray    
    }
})
result.sort(function(a, b){
    return a.lastName < b.lastName ? -1:1
})

// result.reduce(function(final, list){
//     return final.concat(list)
// }, [])

console.log(peopleArray)


