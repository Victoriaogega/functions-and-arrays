function stringLength(string){
    string = string.map(str => str.length)
    return  string
}

let string= ["hyena","elephant","cow"]
console.log(stringLength(string))

function filter(evenArray){
evenArray = evenArray.filter(number => number % 2 === 0)
return evenArray
}
let evenArray = [1,3,5,6,2,8,12,56,7]
console.log(filter(evenArray))


function studentsScore(names){
    names = names.filter(name => name.score >75)
    names= names.map(name => name.name)
    return names
}
let names = [
    {name:"justus",score:75},
    {name:"mary",score:65} ,
    {name:"ann", score:80},
]
console.log(studentsScore(names))


function square(number){
    number = number.map(num => num*num)
    return number
}
let number = [2,4,5]
console.log(square(number))


function uppercaseString(array){
  let  newArray = array.filter(word => typeof word === "string")
  return newArray.map(string => string.toUpperCase())
}
console.log(uppercaseString(["worry",25,false]))