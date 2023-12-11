export function helloGuys(): string {
    return "Hello Guys"
}

class Person{
    constructor(public firstname: string, public lastname: string) {
        this.firstname = firstname
        this.lastname = lastname
    }
}

function createInstance<T>(classToInstantiate: new () => T): T {
    return new classToInstantiate();
}

export function monkeyMap(entity: any, data: {[key: string]: string | any}){
    // const known_fields: string[] = ["firstname", "id", "test"]
    const updated_entity: any = createInstance(entity)
    // known_fields.forEach((field: string) => {
    //     if (field in updated_entity) {
    //         updated_entity[field] = data[field];
    //     }})
    Object.keys(updated_entity).forEach(key => {
        updated_entity[key] = data[key]
    })
    console.log(updated_entity)
    return updated_entity
}

monkeyMap(Person, {"firstname": "pipi", "lastname": "vert"})

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

