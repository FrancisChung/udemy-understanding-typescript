/* let hobbies = ['Sports','Cooking', 'Studying', 'Drinking'];

let activeHobbies = ['Hiking'];
let activeHobbies2 = ['Hiking',...hobbies];
activeHobbies.push(...hobbies); 

console.log(activeHobbies);
console.log(activeHobbies2);

const person = {
    firstname: 'Max',
    age: 30
};

const copiedPerson = {...person};
console.log(copiedPerson);

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    },0);
};

const addedNumbers = add(5,10,2,3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1);
console.log(hobby2);
console.log(remainingHobbies);

const {firstname: username, age} = person;
//console.log(firstname);
console.log(age);
console.log(username); */