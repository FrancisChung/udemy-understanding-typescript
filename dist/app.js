"use strict";
let hobbies = ['Sports', 'Cooking'];
let activeHobbies = ['Hiking'];
let activeHobbies2 = ['Hiking', ...hobbies];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
console.log(activeHobbies2);
const person = {
    name: 'Max',
    age: 30
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
//# sourceMappingURL=app.js.map