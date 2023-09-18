function addTwo(number: number): number{
    // return "hello"
    return number + 2
}

function getUpper(val: string){
    return val.toUpperCase()
}
getUpper('Hello from the other side...')

addTwo(4)


function signUpUser(name: string , email: string, ispaid: boolean){}

let loginUser= (name: string, email: string, isPaid: boolean= false)=>{
}

loginUser("Ismail", "i@i.com")

signUpUser("Ismail", "test@test.com", true)



// function getValue(myVal: number):boolean{
//     if(myVal>5){
//         return true
//     }
//     return "200 ok"
// }


// const getHello = (s: string): string =>{
//     return ""
// }

const heros = ["thor", "profaisal", "ironman"]
// const heros = [1,2,3]

heros.map((hero): string =>{
    return `Hero is ${hero}.`
})



function consoleError(errormsg: string): void{
    console.log(errormsg);
    // return 1
}
function handleError(errormsg: string): never{
    throw new Error(errormsg);
    // return 1
}




export {}