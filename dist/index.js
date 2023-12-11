"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monkeyMap = exports.helloGuys = void 0;
function helloGuys() {
    return "Hello Guys";
}
exports.helloGuys = helloGuys;
var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return Person;
}());
function createInstance(classToInstantiate) {
    return new classToInstantiate();
}
function monkeyMap(entity, data) {
    // const known_fields: string[] = ["firstname", "id", "test"]
    var updated_entity = createInstance(entity);
    // known_fields.forEach((field: string) => {
    //     if (field in updated_entity) {
    //         updated_entity[field] = data[field];
    //     }})
    Object.keys(updated_entity).forEach(function (key) {
        updated_entity[key] = data[key];
    });
    console.log(updated_entity);
    return updated_entity;
}
exports.monkeyMap = monkeyMap;
monkeyMap(Person, { "firstname": "pipi", "lastname": "vert" });
// const person = createInstance<Person>(Person);
// const user = createInstance(User)
// console.log(person.name); // Output: undefined
//
//
// let response = {
//     id: 5,
//     name: "Sverker",
//     email: "sverkerlechad@gmail.com",
//     phone: "06123456748",
//     address: {
//         street: "iii",
//         street_number: "1212"
//     }
// }
/*
let mappedData = User(
    id = 5,
    name = "Sverker",
    email = "sverkerlechad@gmail.com"
)*/
//
// const create_class_from_name = (class_name: string): any => {
//     return new Function('return new ' + class_name)()
// }
//
// const person1 = create_class_from_name("Person")
// console.log("Person 1 should be created : ", person1)
