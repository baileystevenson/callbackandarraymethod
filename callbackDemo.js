
const greetingMachine = (greeting, name) => {
    return greeting(name)
}

const hello = (name) => {
    return `Hello, ${name}`
}
 const sup = (name) => {
    return `Sup, ${name}?`
 }

 const yo = (name) => {
    return `Yo, ${name}!`
 }



 let numArr = [4,3,1,1,2,44,5,6,7,7,89]

const forLoopFunction = (num,index, array) => [

]

 numArr.forEach((num, index, array) => {
    console.log(`Inside the following array; ${array}\nThe element in position ${index} is ${num}`)
 })

 console.log("=======================")
 let mappedNums = numArr.map((num,index) => {
    console.log(`The element in position ${index} is ${num}`)
    console.log("=======================")
    return num / index
 })
console.log(mappedNums) 

console.log("=======================")

let strArr = ['Lukas', 'Cameron', 'Jordan', 'Cody', 'Erik']

let mappedStrings = strArr.map((string, index) => {
    console.log(`The element in position ${index} is ${string}`)
    console.log("=======================")
    return string + " is awesome!"
})
console.log(mappedStrings)

console.log("=======================")
let filteredArr = strArr.filter((string, index) => {
    return string[0] === "C"
})
console.log(filteredArr)

console.log("=======================")

let groceries = [
    {
        food: "Tomato",
        price: 4
    },
    {
        food: "Cereal",
        price: 10
    },
    {
        food: "Lunch meat",
        price: 20
    },
    {
        food: "Bread",
        price: 3
    },
]
let reducedPrices = groceries.reduce((accumulator, currentValue) => {
    // console.log(`The current accumlated vlaue is ${accumulator}|nThe current actual value is ${currentValue}`)
    console.log("The accumulator:", accumulator)
    console.log("The current value:",currentValue)
    let {price} = currentValue
    return accumulator + price
}, 0)
console.log(`the price for my groceries was $${reducedPrices}`)

let reducedFunction + (accumulator, currentValue) => {
    console.log("The accumulator:", accumulator)
    console.log("The current value:",currentValue)
    let {price} = currentValue
    return accumulator + price
}
let reducedPricesVersionTwo = groceries.reduce(reduceFunction, 0)
console.log(`The price for my groceries with fancier logic was $${reducedPricesVersionTwo}`)