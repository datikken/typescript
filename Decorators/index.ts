function logger(constructor: Function) {
    console.log(constructor);
}

@logger
class Person {
    constructor() {
        console.log('hey', logger);
    }
}
//factory
function some(value: boolean) {
    return value ? logger : null;
}

@some(true)
class Car {

}
//advanced
function printable(constr: Function) {
    constr.prototype.print = function() {
        console.log(this);
    }
}

@printable
class Plant {
    name = 'green sock';
}

const plant = new Plant();
(<any>plant).print();

//methods decorator
//property decorator
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        // Cannot set property 'writable' of undefined try to fix;
        descriptor.writable = value;
    }
}

function overwritable(value: boolean) {
    return function(target: any, propName: string):any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };

        return newDescriptor;
    }
}

class Project {
    @overwritable(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    // @editable(true)
    calcBudget() {
        console.log('1200');
    }
}

const project = new Project('duper project');
console.log(project);

//parameters decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log('Target: ', target);
    console.log('Method: ', methodName);
    console.log('ParamIndex: ', paramIndex);
}


class Course {
    name: string;

    constructor(name) {
        this.name = name;
    }

    printNumberOfStudents(mode: string, @printInfo printAll: boolean) {
        if(printAll) {
            console.log(1000);
        } else {
            console.log(2000);
        }
    }
}

const course = new Course('typescript');

course.printNumberOfStudents("anything", true);
course.printNumberOfStudents("anything", false);