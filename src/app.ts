let hobbies = ['Sports','Cooking'];

let activeHobbies = ['Hiking'];
let activeHobbies2 = ['Hiking',...hobbies];
activeHobbies.push(...hobbies); 

console.log(activeHobbies);
console.log(activeHobbies2);

const person = {
    name: 'Max',
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