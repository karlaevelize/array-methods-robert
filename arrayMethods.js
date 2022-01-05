const animals = [
  { name: "cat", isPet: true }, 
  { name: "dog", isPet: true }, 
  { name: "rabbit", isPet: true },
  { name: "lion", isPet: false }, 
  { name: "girrafe", isPet: false }, 
  { name: "whale", isPet: false }
]

// 1. Filter
// What does it return? Always returns an array
// With everything that matches the condition
// [o, o, b, a].filter(obj => obj === o) => [o,o]

const filterByPet = animals.filter(animal => animal.isPet === true)
console.log(filterByPet)

const filterByNotPet = animals.filter(animal => !animal.isPet)
console.log(filterByNotPet)

// 2. Find
// What does it reuturn? It always returns an object
// You only use find when you interested in one element
// [a, b, c, d].find(obj => obj === d) => { b }

const findLion = animals.find(animal => animal.name === "lion")
console.log(findLion)

const findPet = animals.find(animal => animal.isPet)
console.log(findPet)

// 3. Map
// What does it return? It returns an arry with the same length, but updated data
// You use it to update or remove info from the array
// [a, d, g, h].map(obj => obj === o) => [o, o, o, o] 

//only the names of animals
const onlyNames = animals.map(animal => animal.name)
console.log(onlyNames)

//only name of pet animals
const petWithNames = filterByPet.map(animal => animal.name)
console.log(petWithNames)