// const user = {
//     name: 'ismail',
//     email: 'i@i.com',
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser= {name: 'Ismail', isPaid: false, email: "i@i.com"}

// createUser(newUser)


// function course():{name: string, price: number}{
//     return {name:"Angular", price: 300}
// }


// type User= {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return { name:"Jalal", email: "i@i.com", isActive: true}
// }

// createUser({name: "", email:"", isActive: false})



// type point= {
//     x: number;
//     y: number;
// }

// function printCoord(pt: point): point {
//     console.log("The coordinate x  value is : "+ pt.x)
//     console.log("The coordinate's y value is : " +pt.y);
//     return {x: 100, y: 100}
// }

// printCoord({x: 100, y: 100})



type User= {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credCardDetails?: number   // ? make this property optional so u can use it or not depends upon usecase
}

let myUser: User = {
    _id: "1234",
    name: "khan",
    email: "i@i.com",
    isActive: false
}

myUser.email= "i@gmail.com"
// myUser._id= "1223"    readonly property

// credit card senario

type cardNumber = {
    cardnumber: string
}

type cardDate ={
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}






export{}