interface NamedPerson {
    firstName: string,
    name: string,
    age?: number,
    [propName: string]: any,
    greet(lastName: string): void
};

function greet(person: NamedPerson) {
    console.log(`hello ${person.name}`);    
}

const person: NamedPerson = {
    firstName: 'tikken',
    name: 'son',
    any: 9,
    greet(lastName: string) {
        console.log('some' + lastName)
    }
}

greet(person);

class Person implements NamedPerson {
    firstName: string;
    name: string;

    greet(lastName: string) {
        console.log(`This is a ${lastName}`);
    }
}

const I = new Person();

I.greet('nikita');