let score: number | string = 33;

score = 66;
score = "77";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};
let Ismail: User | Admin = { name: "Ismail", id: 1122 };

Ismail = { username: "i123", id: 22 };

// function getDbId(id: number | string) {
//     // some API calls
//     console.log(`DB Id is : ${id}`);
//   }

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
  // some API calls
//   id.toUpperCase()
//   console.log(`DB Id is : ${id}`);

    if(typeof id==="string"){
        id.toLocaleLowerCase();
    } 

}

const data: number[]= [1,2,3,4]

const data2: string[]= ["1", "2"]
const data3: (string | number | boolean)[]= [1, 2, "3", true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment= "window"
seatAllotment = "aisle"

// seatAllotment = "crew"



export {}