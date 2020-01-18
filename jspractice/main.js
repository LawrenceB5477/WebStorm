//functions that are not methods do not have this defined in strict mode

class Model {
    constructor(initialState) {
        this.state = initialState;
    }

    setState(state) {
        this.state = {
            ...this.state,
            ...state
        };
    }

    toString() {
        return JSON.stringify(this.state);
    }
}


function OldModel(initialState) {
    this.state = initialState;
}

OldModel.prototype.setState  = function(state) {
    this.state = {
        ...state,
        ...this.state
    };
};

let x = 4;

function varTest(randomIze) {
    if (randomIze) {
       let x = Math.random();
    }
    return x;
}

function callBackTester(func) {
    func();
}

function testOfThis() {
    let that = this;
    this.thing = "whatever";
    callBackTester(function () {
        console.log(this.thing);
    });
}

function destructorTest() {
    let myObj = {
        first: "apple",
        second: "orange"
    };
    return myObj;
}
function main() {
    let resFunc = testOfThis();
    console.log(varTest(false));

    function test() {

    }

    let state = new Model({apples: 1});

    let {first, second} = destructorTest();
    console.log(first);

    state.setState({oranges: 2});
    console.log(state.state);
    console.dir(console);
    //look up internal slots, never heard of
    console.log(Object.getPrototypeOf(state));
    console.log(Object.getPrototypeOf(state) == Model.prototype);
    console.log(Model.prototype);
    let oldState = new OldModel({apples: "apple"});
    console.log(Object.getPrototypeOf(oldState));

    //to store scopes, ECMAscript uses environments, I'm assuming it's like different symbol tables?

    //So you just can't assign a new value to const, it can be mutated
    const originalArray = [1, 2, 3, 4];
    originalArray.push(5);

    originalArray.forEach((el) => console.log(el * el));

    let arrayOne = [1, 2, 3];
    let arrayTwo = [4, 5, 6];
    let arr = arrayOne + arrayTwo;
    console.log(arr);
    console.log(arrayOne.toString())
    console.log(state.toString());
    let mySet = new Set();
    mySet.add("one");
    mySet.add("two");

    let otherSet = new Set();
    otherSet.add("three");
    otherSet.add("one");

    Set.prototype.union = function (other) {
        let res = new Set();
        console.log(this);
        for (let entry of this.values()) {
            res.add(entry);
        }

        for (let entry of other.values()) {
            res.add(entry);
        }
        return res;
    }

    console.log(mySet.union(otherSet));
    let interSect = new Set([...mySet].filter(el => otherSet.has(el)));
    console.log(interSect);

    let testString = "This is cool";
    console.log(`${testString} is the value of testerString`);

    let mainDiv = document.querySelector(".body");
    let innerDiv = `
        <p> this is a test </p>
        <ul>
            <li>This is the first</li> 
            <li>This is also a test</li>
        </ul>
    `;
    mainDiv.innerHTML = innerDiv;


    let [match, year, month, day] = /^(\d\d\d\d) - (\d\d) - (\d\d)$/.exec("2019 - 12 - 98");
    console.log(match);
    console.log(year);
    console.log(month);

    let guineaPig = {
        tester: "hello"
    };
    console.log(Object.getOwnPropertyDescriptor(guineaPig, "tester"));
    console.log(Object.getOwnPropertyNames(guineaPig));
    Object.defineProperty(guineaPig, "readOnly", {
        value: 4,
        writable: false,
        enumerable: true
    });

    console.log(Object.getOwnPropertyDescriptors(guineaPig));
    for (let prop in guineaPig) {
        console.log(prop);
    }
    console.log(guineaPig);

    const arrayValue = [1, 2, 3, 4];
    for (const val of arrayValue) {
        console.log(val);
    }

    for (const val of arrayValue.values()) {
        console.log(val);
    }

    console.log(arrayValue.entries());

    let varEntries = arrayValue.entries();
    for (let entry of varEntries) {
        let [i, val] = entry;
        console.log(`${i} - ${val}`);
    }
    console.log(Object.entries(guineaPig));
    for (const [key, val] of Object.entries(guineaPig)) {
        console.log(`${key} - ${val}`);
    }


    function defaultParams(x = 4, y = 5) {
        console.log(x * y);
    }
    defaultParams();


    function callAsMany(...args) {
        for (let arg of args) {
            console.log(arg);
        }
    }


    callAsMany("one", "two", "three");
    // bind binds this to a certain context
    //call and apply call the function now


    function Previous(el) {
        this.x = "test";
        el.addEventListener("click", this.testFunc.bind(this));
    }

    Previous.prototype.testFunc = function() {
        console.log(this.x);
    }

    const div = document.querySelector(".body");
    new Previous(div);


    const argObject = {cat: "Jeffrey"};
    function callMe() {
        console.log(this.cat);
    }

    function callTester(one, two) {
        console.log(`${this.cat}, ${one}, ${two}`);
    }

    //apply allows you to provide an array
    //fuck my head hurts
    callMe.apply(argObject);
    callTester.call(argObject, "apples", "oranges");

    function blockParams({first, second}) {
        console.log(`${first} and ${second}`);
    }

    blockParams({first: "bob", second: "second"});

    const enumerable = ["one", "two", "three"];

    for (let [i, val] of enumerable.entries()) {
        console.log(`${i} is ${val}`);
    }

    let tricycle;
    console.log(tricycle);

    console.log(tricycle == undefined);

    console.log(typeof("first"));
    console.log("test" instanceof String);

    function logParams(...args) {
        for (let arg of args) {
            console.log(arg);
        }
    }


    const arguments = [1, 2, 3, 4];
    logParams(...arguments);
    logParams.apply(null, arguments);

    console.log(`the max of arguments is ${Math.max(...arguments)}`);

    let firstArray = [2, 3, 4];
    let secondArray = [3, 4, 5];

    console.log(firstArray.concat(secondArray));

    for (let i = 0; i < secondArray.length; i++) {
        firstArray.push(secondArray[i]);
    }

    console.log(firstArray);

    firstArray.push.apply(secondArray, firstArray);

    let str = "";
    for (let el of secondArray) {
        str += `${el} `;
    }

    console.log(str);


    //Sweet, method definitinos

    const animalInstance = {
        meow() {
            console.log("Mew");
        },
        paws: 4,
        oldMeow: function () {
            console.log(this.paws);
        }
    }


    animalInstance.meow();
    animalInstance.oldMeow();


    if ("paws" in animalInstance) {
        console.log("I cam do this?");
    }

    const symbolTable = new Map();

    function incrementSymbolTable(symbolTable, key) {
       let val = symbolTable.get(key) || 0;
       symbolTable.set(key, val + 1);
    }


    incrementSymbolTable(symbolTable, "apples");
    incrementSymbolTable(symbolTable, "apples");

    console.log(symbolTable);

    const stringManipulation = "Hello World";

    console.log(stringManipulation.startsWith("Hello"));
    console.log(stringManipulation.endsWith("World"));

    console.log("#".repeat(3));

    function splitter(string, token) {
        let resArray = [];
        let start = 0;
        let index = 0;
        while ((index = string.indexOf(token)) >= 0) {
           resArray.push(string.slice(start, index));
           string = string.slice(index + 1);
        }
        resArray.push(string.slice(start));
        return resArray;
    }


    const myString = "This is a test to see if I'm snart";
    console.log((splitter(myString, " ")));

    let testArray = new Array(2);
    console.log(testArray);
    testArray.fill(null);
    console.log(testArray);


    //Sweet, getting to data

    console.log(Number.isInteger(4));
    console.log(Number.isInteger(Number.parseInt("43")));


}



function generatePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("we have resolved!"), 1000);
    });
}


async function doAsync() {
    const value = await generatePromise();
    return value;
}

doAsync().then(value => {
    console.log(value);
});




function Animal(name) {
   this.name = name;
}

Animal.prototype.speak = function() { console.log(this.name);};

function Zebra(name, age) {
    Animal.call(this, name);
    this.age = age;
}


Zebra.prototype = Object.assign({}, Animal.prototype);
Zebra.prototype.constructor = Zebra;
Zebra.prototype.zebraTalk = function () { return (this.speak() + " talks");};

const zebra = new Zebra("wallo", 34);
console.log(zebra.zebraTalk());
