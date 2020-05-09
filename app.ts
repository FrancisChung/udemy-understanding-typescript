const person = {
    name: 'Francis',
    age: 46,
    hobbies: ['Basketball', 'Video Games']
}

let activities: string[];
activities = ["Basketball", "Volleyball", "Tennis"];

console.log(person);

for (const act of activities) {
    console.log(act.toLowerCase());
}