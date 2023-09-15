// 1 - numbers
let y: number = 10

console.log(y)

y = 16

console.log(typeof y)

const z: number = 15.584848

console.log(typeof z)

console.log(z.toPrecision(3))

console.log(z)

// 2 - string
const firstName: string = "Daniel"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Cardoso"

fullName = firstName + " " + lastName

console.log(fullName)

console.log(typeof fullName)

// 3 - boolean
let a: boolean = false

console.log(a)
console.log(typeof a)

a = true

console.log(a)

// 4 - inference e annotation
const ann: string = "Teste"

let inf = "Teste"

console.log("Testando 3")
