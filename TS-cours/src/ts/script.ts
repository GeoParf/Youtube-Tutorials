// Для компиляции в консоли команда:  tsc script.ts

// Типы данных
// Булевы
let isComplited: boolean = true;

console.log(isComplited);

// Числа
const decimal: number = 7.10;
const integer: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b10110;
const octal: number = 0o744;

console.log(decimal, integer, hex, binary, octal);

// Строка
const myName: string = "George";

const sentance: string = `Hello, my name is ${myName}!`;

console.log(sentance);

// null и undefined

const n: null = null;
const u: undefined = undefined;

console.log(`null: ${n}, undefined: ${u}`);

// void тип
// Для результата функции

const greetUser = (): void =>{
  console.log(`Hello, ${myName}!`);
}
greetUser();

// Массив

const list:number[] = [1, 2, 3];

const listG: Array<number> = [4, 5, 6]; // Тип дженерик (Generic type)

// Tuple (картеж)

let x: [string, number];
x = ["hello", 10];

// В одну строку

let y: [string, number] = ["goodby", 42];

// Тип Any

let z: Array<any> = [10, "super", false];

console.log(list, listG, x, y, z);

let notSure: any = false;

notSure = true;
console.log("notSure is " + typeof(notSure));
notSure = 42;
console.log("notSure is " + typeof(notSure));
notSure = "hello"
console.log("notSure is " + typeof(notSure));

// Enum тип

enum Direction {
  Up = 3,
  Down,
  Left = 8,
  Right
};

const enum links {
  youtube = 'https://youtube.com',
  vk = 'https://vk.com',
  facebook = 'https://facebook.com'
}

console.log(
  Direction.Up,
  Direction.Down,
  Direction.Left,
  Direction.Right
);

// Never тип

// Функция возвращает ошибку

const msg = "hello";
const error = (msg: string): never => {
  throw new Error(msg);
};

// Функция в бесконечной петле

const infiniteLoop = (): never => {
  while(true){

  }
};

// Object тип предназначен для объекта или не примитива

const create = (o: object | null): void => {};

//create(1); выдаст ошибку, не является объектом
//create('42'); выдаст ошибку, не является объектом
create({obj: 1});

// множественные типы

let id: number| string;

id = 10;
id = '42';
//id = true; выдаст ошибку, не является числом или строкой.


// Функции

const createPassword = (name: string = 'Max', age: number | string = 20): string  => `${name}${age}`;

const firstPas = createPassword('Geo', 38);
const secondPas = createPassword('Al', '33');
const defpas = createPassword()

// опциональный аргумент
const createPass = (name: string, age?: number | string) => `${name}${age}`;

// REST аргументы

const createSkills = (name: string, ...skills: Array<string>) => `${name} my skills are${skills.join()}`;

console.log( `${firstPas} ${secondPas} ${defpas}`);
console.log(`My name is ${createSkills('George', ' JS', ' TS', ' ES6', ' vue')}`);

// Описание функции которую присвоят переменной

let myFunc: (firstArg: string) => void;

function oldFunc(name: string): void {
  console.log(`Hello ${name}, nice to see you!`);
};

myFunc = oldFunc;
myFunc('George');

// Типизайия объекта

let user: {name: string, age: number, nickName: string} = {
  name: 'George',
  age: 30,
  nickName: 'webDev'
};

console.log(user);

// Ключевое слово Type

type Person = {
  name: string,
  age: number,
  nickName?: string, // Опциональное свойство
  getPass?: () => string, // Опциональный метод
};

let user1: Person = {
  name: 'George',
  age: 30,
  nickName: 'webDev'
};

let admin: Person ={
  name: 'Alex',
  age: 27,
  nickName: 'Loki',
  getPass() {
    return `${this.name}${this.age}`;
  },
};

console.log(user1.name + '\n' + admin.name  );


// Классы и модификаторы типов

class User {
  public name: string; // Модно получить свободный доступ
  private age: number = 38; // Не может быт доступен за пределами данного класса, ни наследники ни объекты созданные с помощью данного класса доступ не имеют
  protected nickName: string = 'web developer'; // Доступ к этому полю могут получить только наследники
  readonly pass: number; // Только для чтения, изменить нельзя

  constructor(name: string){
    this.name = name;
    this.pass = 123;
  }

  getPass(): string {
    return `${this.name}${this.age}`
  }
}

const george = new User('George');
console.log(george.name +'\n'+george.getPass());


// Сокращенная форма записи

class User1 {
  constructor(
    public name: string,
    public age: number,
    public nickName: string,
    public pass: number
  ){}
}

// Аксессоры

class Client {
  private age: number = 20;
  constructor(public name: string) {}

  setAge(age: number){
    this.age = age
  }
  
  set myAge(age: number) {
    this.age = age;
  }
}

const petr = new Client('Petr')
// console.log(petr)

petr.setAge(12);
// console.log(petr);

petr.myAge = 11;
console.log(petr);

// Наследрование

// Статические свойства классов

class Consumer {

  private nickName: string = 'wedDev'
  static secret = 12345; // статическое свойство

  constructor(public myName: string, public age: number){};

  getPass():string {
    return `${this.myName}${Consumer.secret}`
  }
}

// Переопределение метода в классе наследнике

class Tonia extends Consumer {
  name: string = 'Tonia';

  constructor(age: number) {
    super(myName, age);
  }

  getPass(): string {
    return `${this.age}${this.myName}${Consumer.secret}`
  }
}

const tonia = new Tonia(5);

// Абстрактные классы

abstract class Costomer {
  constructor(public name: string, public age: number) {}

  grert(): void {
    console.log(this.name);
    
  }

  abstract getPass(): string // Метод должен быть реализован в наследниках
}

class Sasha extends Costomer{

  name: string = 'Sasha';

  constructor(age: number){
    super(myName, age)
  }

  getPass(): string {
    return `${this.age}${this.name}`
  }
}

const sasha = new Sasha(35);

// Пространство имен и модули

// import   {someString}  from './utils';

// console.log(someString);

// Интерфейсы - именованный тип объекта

interface Man {
  name: string,
  age: number,
  getPass(): string
}

// Опциональные свойства как и в других сущностях отмечаются ?

interface Woman {
  readonly name: string, // Свойство предназначенное только для чтения
  age?: number, // Опциональное свойство
  [propName: string]: any,  // Позволяет бобавлять свойства объекту
}

// Класс созданный, базируясь на интерфейсе

class Adam implements Man{
  name: string = 'Adam';
  age: number = 33;
  nickName: string = 'The_First'

  getPass() {
    return `${this.name}${this.age}`
  }
}

// Можно создавать классы базирующиеся на двух и более интерфейсах

interface Rectangle {
  lenght: number,
  width: number,
}

interface Area {
  getArea(): number
}

class Floor implements Rectangle, Area {
  lenght: number = 10;
  width: number = 6;
  

  getArea(): number {
    return this.lenght * this.width;
  }
}

const firstFlor = new Floor;
console.log(`First floor:\nWidth ${firstFlor.width}\nLenght ${firstFlor.lenght}\nArea ${firstFlor.getArea()}`)

// Расширение интерфейса

interface FullArea extends Rectangle{
  getArea(): number,
}

class Floor2 implements FullArea {
  lenght: number = 8;
  width: number = 4;
  

  getArea(): number {
    return this.lenght * this.width;
  }
}

const secondFloor = new Floor2;

console.log(`Second floor:\nWidth ${secondFloor.width}\nLenght ${secondFloor.lenght}\nArea ${secondFloor.getArea()}`)

// Обобщения (Generic)
// Нужны чтоб если в функцию в качестве аргумента прилетает строка, то функция возвращала строку, если число, то возвращала чилсо.

// Примеры
// ES6 синтаксис
const getterES6 = <T>(data: T): T => data;

// ES5 синтаксис
function getterES5<T>(data: T): T {
  return data;
}

//getterES6(10).lenght; выдаст ошибку метода lenght не существует в типе 10
console.log('Вывод длины слова "test" ' + getterES6('test').length);


class Furniture<T, K extends number> {
  constructor(public name: T, public age: K) {}

  public getPass(): string {
    return `${this.name}${this.age}`;
  }

}

//const chear = new Furniture('Chear', '40'); ошибка: тип число не может быть у типа строка
const armchear = new Furniture(20, 23);
const table = new Furniture('Table', 189)

//console.log(chear.getPass());
console.log(armchear.getPass());
console.log(table.getPass());


// Декораторы

// Обычная функция, может быть прикреплена к классу, методу, аксессору, свойству или параметру. Оборачивают сущность и меняют ее поведение

// Декоратор класса
const logClass = (constructor: Function) => {
  console.log(constructor)
};

// Декоратор свойства
const logProperty = (target: Object, propertyKey: string | symbol) => {
  console.log(propertyKey)
}

// Декоратор метода
const logMethod = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<() => string>
  ) => {
    console.log(propertyKey);
  };

@logClass
class Auto {

  @logProperty
  secret: number;
  constructor(public name: string, public age: number, secret: number) {
    this.secret = secret;
  }
  @logMethod
  public getPass() :string {
    return `${this.name}${this.age}`;
  }
}

const volkswagen = new Auto("VolksWagen", 234, 12);
console.log(volkswagen.secret);

// Утилиты

// Readonly<T>
interface User {
  name: string;
}

const user: Readonly<User> = {
  name: 'Yauhen',
};

user.name = 'Max';      // Error: cannot reassign a readonly property

// Required<T>
interface Props {
  a?: number;
  b?: string;
};

const obj: Props = { a: 5 };              // OK

const obj2: Required<Props> = { a: 5 };   // Error: property 'b' missing

// Record<K, T>
interface PageInfo {
  title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' },
};

// Compiled code
"use strict";
const x = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' },
};

// Pick<T, K>
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

// Omit<T, K>
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

// Exclude<T, U>
type T0 = Exclude<"a" | "b" | "c", "a">;                      // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;                // "c"
type T2 = Exclude<string | number | (() => void), Function>;  // string | number

// Extract<T, U>
type T0 = Extract<"a" | "b" | "c", "a" | "f">;                // "a"
type T1 = Extract<string | number | (() => void), Function>;  // () => void

// NonNullable<T>
type T0 = NonNullable<string | number | undefined>;   // string | number
type T1 = NonNullable<string[] | null | undefined>;   // string[]

// ReturnType<T>
declare function f1(): { a: number, b: string };

type T0 = ReturnType<() => string>;                                  // string
type T1 = ReturnType<(s: string) => void>;                           // void
type T2 = ReturnType<(<T>() => T)>;                                  // {}
type T3 = ReturnType<(<T extends X, X extends number[]>() => T)>;    // number[]
type T4 = ReturnType<typeof f1>;                                     // { a: number, b: string }
type T5 = ReturnType<any>;                                           // any
type T6 = ReturnType<never>;                                         // any
type T7 = ReturnType<string>;                                        // Error
type T8 = ReturnType<Function>;                                      // Error

// InstanceType<T>
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;     // C
type T1 = InstanceType<any>;          // any
type T2 = InstanceType<never>;        // any
type T3 = InstanceType<string>;       // Error
type T4 = InstanceType<Function>;     // Error
