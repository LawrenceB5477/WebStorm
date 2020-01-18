import axios from "axios";
const url:string = "https://jsonplaceholder.typicode.com/todos/1";

//interfaces are a structural contract
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean): void => {
    console.log(`${id} is ${title} and is completed: ${completed}`);
};


const person:any = {
    age: 20
};

person.test = 40;

//type annotations vs type inference?
//type annotation, explicitly telling ts what the type is
//type inference, ts figures out the type of a value


/* Annotations */
const apples: number = 4;
let nothingMuch: null = null;
let nothingAtAll: undefined = undefined;
let now: Date = new Date();

//objects, arrays and functinos
const stringArray: string[] = [];
for (let i = 0; i < 5; i++) {
    stringArray.push("" + i);
}
console.log(stringArray);

//object literal
let point: {x: number, y: number} = {
    x: 10,
    y: 20
};

//function

const logNumber: (i: number) => void = (i: number): void => {
    console.log(i);
};

//type inference vs type annotation
//declaration vs initialization
// const declaration = initialization
// if we do declaration + initializiation, type inference happens

let test;
test = "whatever";


//when to use annotations
//when a function returns type any
const json = '{"x":10, "y":20}';
const coords: {x: number, y: number} = JSON.parse(json);
console.log(coords.x + coords.y);

//when we initialize a variable later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] == "green") {
        foundWord = true;
    }
}

let numbers = [-3, -3, 10];
let numbersAboveZero: number | boolean;

numbersAboveZero = false;
for (let number of numbers) {
    if (number > 0) {
        numbersAboveZero = number;
    }
}

//when type inference doesn't work



//type inference works for function return values, not for parameters

const add = (a: number, b: number): number => {
    return a + b;
};

//you should probably use type annotations for function return values
//if you don't you can return incorrect values and typescript will be cool with it
const subtract = (a: number, b: number): number => {
    return a - b;
};

function divide(x: number, y: number): number {
   return x / y;
}

const multiply = function(x: number, y: number): number {
    return x * y;
};

//void and never? I vaguely remember it
const logger = (message: string): void => {
    console.log(message);
};

logger("This is a test");

//never represents a function never properly returning, when you
//throw an error, you don't actually return from the function,
//the error simply  propogates up
const throwError = (message: string): never => {
    throw new Error(message);
};

try {
    throwError("this is a test");
} catch (e) {
   console.log(e.toString());
}


const foreCast = {
    date: new Date(),
    weather: "sunny"
};

const logWeather = (foreCast: {date: Date, weather: string}): void => {
    console.log(foreCast.date + " " + foreCast.weather);
};

logWeather(foreCast);

const logWeatherDes = ({date, weather} : {date: Date, weather: string}): void => {
    console.log(date + " " + weather);
};

logWeatherDes(foreCast);

const profile = {
    name: "alex",
    age: 20,
    coords: {
        x: 0,
        y: 0
    },
    setAge(age: number): void {
        this.age = age;
    }
};

profile.setAge(30);
console.log(profile.age);

const {age} = profile;
console.log(age);

//const {coords: {x, y}}: {coords: {x: number, y: number}} = profile;
let {coords: {x, y}} = profile;
console.log(x);
console.log(y);


//typed arrays, lol
const strArray = ["one", "two", "three"];
for (let str of strArray) {
    console.log(str);
}

strArray.forEach((el) => {
   console.log(el);
});


const variableType: (string | number)[] = [];
variableType.push(4);
variableType.push("asdf");
console.log(variableType[1]);

//freaking tuples, just like in python
const myTuple: [string, string, boolean] = ["test", "test", true];

const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40
};

//type alias you say?

type Drink = [string, boolean, number];

const myDrink: Drink = ["test", false, 43];

type DrinkObject = {color: string, carbonated: boolean, sugar: number};

const myDrinkObject: DrinkObject = {color: "tester", carbonated: true, sugar: 10};

//Almost like java but not quite, it specifies fields that should be there took
interface Animal {
    name: string;
    legs: number;
    speak(): string;
}

class Dog implements Animal {
    legs: number;
    name: string;

    static testThing() {
       console.log("All animals can do this!");
    }
    constructor(legs: number, name: string) {
        this.legs = legs;
        this.name = name;
    }

    speak(): string {
        return `${this.name} says speak`;
    }

}

class GuardDog extends Dog {
    bite: number;

    constructor(legs: number, name: string, bite: number) {
        super(legs, name);
        this.bite = bite;
    }

    speak(): string {
        return super.speak() + " says the guard dog";
    }
}

const nick: Dog = new Dog(4, "nick");
const mow: Animal = new Dog(5, "test");
const guard: GuardDog = new GuardDog(4, "doggy", 50);
console.log(guard.speak());






class Vehicle {
    protected drive(): void {
        console.log("Chugga chugga arooga");
    }
}


const myCar = new Vehicle();


//learning to love programming again
//I am going to ignore the anxiety that is killing me, so this is my best attempt
//everything is going to be okay

//sweet inheritence

class Car extends Vehicle {
    constructor() {
        super();
       console.log("ok");
    }

    private helper(): void {
        console.log("This is a helper function");
    }

    honk():void {
        this.helper(); 
        this.drive();
        console.log("Arooga");
    }

    protected drive(): void {
        console.log("Vroom fast car");
    }
}


const car = new Car();
car.honk();
