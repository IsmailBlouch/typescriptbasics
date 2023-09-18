"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 66;
score = "77";
var Ismail = { name: "Ismail", id: 1122 };
Ismail = { username: "i123", id: 22 };
// function getDbId(id: number | string) {
//     // some API calls
//     console.log(`DB Id is : ${id}`);
//   }
getDbId(3);
getDbId("3");
function getDbId(id) {
    // some API calls
    //   id.toUpperCase()
    //   console.log(`DB Id is : ${id}`);
    if (typeof id === "string") {
        id.toLocaleLowerCase();
    }
}
var data = [1, 2, 3, 4];
var data2 = ["1", "2"];
var data3 = [1, 2, "3", true];
var seatAllotment;
seatAllotment = "window";
seatAllotment = "aisle";
