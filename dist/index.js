"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monkeyMap = void 0;
var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
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
    Object.keys(updated_entity).forEach(function (key) {
        updated_entity[key] = data[key];
    });
    return updated_entity;
}
exports.monkeyMap = monkeyMap;
var dummy_response_from_api = {
    "firstname": "DummyFirstname",
    "lastname": "DummyLastname",
};
var user_exemple = monkeyMap(Person, dummy_response_from_api);
console.log(user_exemple);
