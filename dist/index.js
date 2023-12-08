"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monkeyMap = exports.helloGuys = void 0;
function helloGuys() {
    return "Hello Guys";
}
exports.helloGuys = helloGuys;
var monkeyMap = function (entity) {
    var entity_keys = Object.keys(entity);
    var test = entity;
    console.log(test);
    console.log(entity_keys);
    // if (typeof data === "object"){
    //     try{
    //
    //     }catch (e){
    //
    //     }²
    //
    // } else {
    //     console.error("Wrong data type")
    // }
};
exports.monkeyMap = monkeyMap;
// function test<T>(arg: T): T{
//     return arg
// }
//
//
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.name = name;
    }
    return Person;
}());
//
// function createInstance<T>(classToInstantiate: T): T {
//     return new classToInstantiate();
// }
//
// const person = createInstance<Person>(Person);
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
var create_class_from_name = function (class_name) {
    return new Function('return new ' + class_name)();
};
var person1 = create_class_from_name("Person");
console.log("Person 1 should be created : ", person1);
(0, exports.monkeyMap)(Person);
