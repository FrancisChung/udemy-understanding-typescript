const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Francis',
    age: 46,
    hobbies: ['Basketball', 'Video Games'],
    role: [2, 'Author' ]
}

person.role.push('admin');
person.role.push[0] = 10;

let activities: string[];
activities = ["Basketball", "Volleyball", "Tennis"];

console.log(person);

for (const act of activities) {
    console.log(act.toLowerCase());
}