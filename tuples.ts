// const user: (string|number)[]=[1,"ik"] 
let user:[string, number, boolean]
// it is tuple and it has a strict order.
user = ["ik", 223, true]

let rgb: [number, number, number]= [255, 255, 123]

type User= [number, string]

const newUser: User= [111, "i@i.com"]

newUser[1]= "test@test.com"


export {}