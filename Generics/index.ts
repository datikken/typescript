function echo<T>(data: T) {
    return data;
}

console.log(echo('bitch').length);

const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);

//array cause an error
// testResults.push({''});
function printAll<T>(args: T[]) {
    args.forEach((el) => console.log(el));
}

printAll<string>(['Apple', 'Bannana']);
const echo2: <T>(data: T) => T = echo;

//
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = '23';
simpleMath.multiplyValue = 23;

console.log(simpleMath.calculate());

//generic type exists to make reusable code
class MyMap<T> {
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    printMap() {
        for(let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 12);
numberMap.setItem('bananas', 21);

console.log(numberMap.getItem('apples'));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();