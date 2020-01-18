"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var url = "https://jsonplaceholder.typicode.com/todos/1";
var logTodo = function (id, title, completed) {
    console.log(id + " is " + title + " and is completed: " + completed);
};
var person = {
    age: 20
};
person.test = 40;
//type annotations vs type inference?
//type annotation, explicitly telling ts what the type is
//type inference, ts figures out the type of a value
/* Annotations */
var apples = 4;
var nothingMuch = null;
var nothingAtAll = undefined;
var now = new Date();
//objects, arrays and functinos
var stringArray = [];
for (var i = 0; i < 5; i++) {
    stringArray.push("" + i);
}
console.log(stringArray);
//object literal
var point = {
    x: 10,
    y: 20
};
//function
var logNumber = function (i) {
    console.log(i);
};
//type inference vs type annotation
//declaration vs initialization
// const declaration = initialization
// if we do declaration + initializiation, type inference happens
var test;
test = "whatever";
//when to use annotations
//when a function returns type any
var json = '{"x":10, "y":20}';
var coords = JSON.parse(json);
console.log(coords.x + coords.y);
//when we initialize a variable later
var words = ['red', 'green', 'blue'];
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] == "green") {
        foundWord = true;
    }
}
var numbers = [-3, -3, 10];
var numbersAboveZero;
numbersAboveZero = false;
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    if (number > 0) {
        numbersAboveZero = number;
    }
}
//when type inference doesn't work
//type inference works for function return values, not for parameters
var add = function (a, b) {
    return a + b;
};
//you should probably use type annotations for function return values
//if you don't you can return incorrect values and typescript will be cool with it
var subtract = function (a, b) {
    return a - b;
};
function divide(x, y) {
    return x / y;
}
var multiply = function (x, y) {
    return x * y;
};
//void and never? I vaguely remember it
var logger = function (message) {
    console.log(message);
};
logger("This is a test");
//never represents a function never properly returning, when you
//throw an error, you don't actually return from the function,
//the error simply  propogates up
var throwError = function (message) {
    throw new Error(message);
};
try {
    throwError("this is a test");
}
catch (e) {
    console.log(e.toString());
}
var foreCast = {
    date: new Date(),
    weather: "sunny"
};
var logWeather = function (foreCast) {
    console.log(foreCast.date + " " + foreCast.weather);
};
logWeather(foreCast);
var logWeatherDes = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date + " " + weather);
};
logWeatherDes(foreCast);
var profile = {
    name: "alex",
    age: 20,
    coords: {
        x: 0,
        y: 0
    },
    setAge: function (age) {
        this.age = age;
    }
};
profile.setAge(30);
console.log(profile.age);
var age = profile.age;
console.log(age);
//const {coords: {x, y}}: {coords: {x: number, y: number}} = profile;
var _a = profile.coords, x = _a.x, y = _a.y;
console.log(x);
console.log(y);
//typed arrays, lol
var strArray = ["one", "two", "three"];
for (var _b = 0, strArray_1 = strArray; _b < strArray_1.length; _b++) {
    var str = strArray_1[_b];
    console.log(str);
}
strArray.forEach(function (el) {
    console.log(el);
});
var variableType = [];
variableType.push(4);
variableType.push("asdf");
console.log(variableType[1]);
//freaking tuples, just like in python
var myTuple = ["test", "test", true];
var drink = {
    color: "brown",
    carbonated: true,
    sugar: 40
};
var myDrink = ["test", false, 43];
var myDrinkObject = { color: "tester", carbonated: true, sugar: 10 };
var Dog = /** @class */ (function () {
    function Dog(legs, name) {
        this.legs = legs;
        this.name = name;
    }
    Dog.testThing = function () {
        console.log("All animals can do this!");
    };
    Dog.prototype.speak = function () {
        return this.name + " says speak";
    };
    return Dog;
}());
var GuardDog = /** @class */ (function (_super) {
    __extends(GuardDog, _super);
    function GuardDog(legs, name, bite) {
        var _this = _super.call(this, legs, name) || this;
        _this.bite = bite;
        return _this;
    }
    GuardDog.prototype.speak = function () {
        return _super.prototype.speak.call(this) + " says the guard dog";
    };
    return GuardDog;
}(Dog));
var nick = new Dog(4, "nick");
var mow = new Dog(5, "test");
var guard = new GuardDog(4, "doggy", 50);
console.log(guard.speak());
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log("Chugga chugga arooga");
    };
    return Vehicle;
}());
var myCar = new Vehicle();
//learning to love programming again
//I am going to ignore the anxiety that is killing me, so this is my best attempt
//everything is going to be okay
//sweet inheritence
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super.call(this) || this;
        console.log("ok");
        return _this;
    }
    Car.prototype.helper = function () {
        console.log("This is a helper function");
    };
    Car.prototype.honk = function () {
        this.helper();
        this.drive();
        console.log("Arooga");
    };
    Car.prototype.drive = function () {
        console.log("Vroom fast car");
    };
    return Car;
}(Vehicle));
var car = new Car();
car.honk();
