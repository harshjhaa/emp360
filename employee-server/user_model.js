const { readFileSync } = require("fs");

// let loadUser = () => {
//     let users = JSON.parse(readFileSync("data.json"));
//     // console.log(users);
//     return users;
// }

let loadUser = () => JSON.parse(readFileSync("data.json"));
// console.log(loadUser());

module.exports = { loadUser };