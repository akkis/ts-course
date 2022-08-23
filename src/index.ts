// Basic Types
let id: number = 5;
let company: string = "Akkis Company";
let isPublished: boolean = true;
let x: any = "HEllo";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "hello"];

// Tuple
let person: [number, string, boolean] = [1, "Akkis", false];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Akis"],
  [2, "Eve"],
  [3, "Phaedra"],
];

// Unions
let pid: string | number = 22;
pid = "asdas";

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction2.Left);

// Objects
const user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John",
};

type User = {
  id: number;
  name: string;
};

const user2: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as string;

customerId = "3";

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// Void Function
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const userInter: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtrack: MathFunc = (x: number, y: number): number => x - y;

// Classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;
  protected year?: number; // Only inside this class and every other class that extend this one
  private isActive?: boolean; // Only inside this class

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(4, "Shawn", "Developer");

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "akis", "mary", "helen"]);

numArray.push(1);