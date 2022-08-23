"use strict";
// Basic Types
let id = 5;
let company = "Akkis Company";
let isPublished = true;
let x = "HEllo";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
// Tuple
let person = [1, "Akkis", false];
// Tuple Array
let employee;
employee = [
    [1, "Akis"],
    [2, "Eve"],
    [3, "Phaedra"],
];
// Unions
let pid = 22;
pid = "asdas";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
// Objects
const user1 = {
    id: 1,
    name: "John",
};
const user2 = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
customerId = "3";
// Functions
function addNum(x, y) {
    return x + y;
}
// Void Function
function log(message) {
    console.log(message);
}
const userInter = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const subtrack = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "akkis");
console.log(brad.register());
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(4, "Shawn", "Developer");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "akis", "mary", "helen"]);
numArray.push(1);
//# sourceMappingURL=index.js.map