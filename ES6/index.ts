let variable:string = 'fuck';
const maxLevel:number = 100;

const multyply = (number1: number = 2, arr:number[]):void => {arr.forEach(element => {
    console.log(number1 * element);
});}

multyply(3, [2, 3]);

//rest, spread
const nums = [1,2,3];
console.log(Math.max(...nums));

const makeArr = (name: string, ...args: number[]) => { return args };
console.log(makeArr('tikken', 2,3,4));

//destructuring
const hobbies:string[] = ['coocking', 'fuck'];
// console.log(hobbies[0], hobbies[1]);
const [hobby1, hobby2] = hobbies;
console.log(hobby1);

const userData: {username: string, age: number} = {username: "Tikken", age: 27};
// const userName = userData.username;
const {username, age} = userData;
console.log(age);

//template literals
let i:number = 2;
const string:string = `Hello ${i}pac`;
console.log(string);
