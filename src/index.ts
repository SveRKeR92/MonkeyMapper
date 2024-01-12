class Person{
    constructor(
        public firstname: string,
        public lastname: string,
    ) {}
}

function createInstance<T>(classToInstantiate: new () => T): T {
    return new classToInstantiate();
}

export function monkeyMap(entity: any, data: {[key: string]: string | any}){
    // const known_fields: string[] = ["firstname", "id", "test"]
    const updated_entity: any = createInstance(entity)

    Object.keys(updated_entity).forEach(key => {
        updated_entity[key] = data[key]
    })
    return updated_entity
}

const dummy_response_from_api = {
    "firstname": "DummyFirstname",
    "lastname": "DummyLastname",
}

const user_exemple = monkeyMap(Person, dummy_response_from_api)

console.log(user_exemple)
