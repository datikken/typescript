class Application {
    property: string;
    //available only inside this
    private type: string;
    //available in children extend
    protected prop: number;

    constructor(name: string, public username: string) {
        this.property = name;
    }

    run() {
        console.log('started');
    }

    private setSome() {
        console.log('set');
    }

    protected bull() {
        console.log('bu')
    }
}

const app = new Application('shiny', 'app');

class Student extends Application {
     constructor(user) {
        super('ya', user);
    }
    fuck() {
        this.bull();
        //
        this.prop = 2;
        console.log('1m');
    }
}

const db = new Student('any');

db.fuck();

//getters and setters
class Plant {
    private _species: string;
}