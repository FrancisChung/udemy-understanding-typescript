"use strict";
const person = {
    name: 'Francis',
    age: 46,
    hobbies: ['Basketball', 'Video Games'],
    role: [2, 'Author']
};
person.role.push('admin', 10);
//person.role.push[1] = 10;
let activities;
activities = ["Basketball", "Volleyball", "Tennis"];
console.log(person);
for (const act of activities) {
    console.log(act.toLowerCase());
}
