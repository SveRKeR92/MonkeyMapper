export function helloGuys(): string {
    return "Hello Guys"
}

export function monkeyMap<T> (entity: T, data: object| Array<object>): T {
    const known_field_array: string[] = ["firstname", "id", "test"]
    const updated_entity = createInstance(entity)
    const
    known_field_array.forEach((field) => {
        updated_entity[field] = data[field]
    })
    const entity_keys = Object.keys(entity)
    console.log(entity_keys)
    return entity
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
}

// function test<T>(arg: T): T{
//     return arg
// }
//
//
class Person{
    constructor(public name: string) {
        this.name = name
    }
}

function createInstance<T>(classToInstantiate: T): T {
    return new classToInstantiate();
}

const person = createInstance<Person>(Person);
const user = createInstance(User)
console.log(person.name); // Output: undefined


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

monkeyMap(user, {})

const create_class_from_name = (class_name: string): any => {
    return new Function('return new ' + class_name)()
}

const person1 = create_class_from_name("Person")
console.log("Person 1 should be created : ", person1)

