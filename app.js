var person = {
    name: 'Francis',
    age: 46,
    hobbies: ['Basketball', 'Video Games'],
    role: [2, 'Author']
};
person.role.push('admin');
person.role.push[0] = 10;
var activities;
activities = ["Basketball", "Volleyball", "Tennis"];
console.log(person);
for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
    var act = activities_1[_i];
    console.log(act.toLowerCase());
}
