let hobbies = ['Sports','Cooking'];

let activeHobbies = ['Hiking'];
let activeHobbies2 = ['Hiking',...hobbies];
activeHobbies.push(...hobbies); 

console.log(activeHobbies);
console.log(activeHobbies2);