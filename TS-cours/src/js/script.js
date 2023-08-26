"use strict";
// Для компиляции в консоли команда:  tsc script.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Типы данных
// Булевы
let isComplited = true;
console.log(isComplited);
// Числа
const decimal = 7.10;
const integer = 6;
const hex = 0xf00d;
const binary = 0b10110;
const octal = 0o744;
console.log(decimal, integer, hex, binary, octal);
// Строка
const myName = "George";
const sentance = `Hello, my name is ${myName}!`;
console.log(sentance);
// null и undefined
const n = null;
const u = undefined;
console.log(`null: ${n}, undefined: ${u}`);
// void тип
// Для результата функции
const greetUser = () => {
    console.log(`Hello, ${myName}!`);
};
greetUser();
// Массив
const list = [1, 2, 3];
const listG = [4, 5, 6]; // Тип дженерик (Generic type)
// Tuple (картеж)
let x;
x = ["hello", 10];
// В одну строку
let y = ["goodby", 42];
// Тип Any
let z = [10, "super", false];
console.log(list, listG, x, y, z);
let notSure = false;
notSure = true;
console.log("notSure is " + typeof (notSure));
notSure = 42;
console.log("notSure is " + typeof (notSure));
notSure = "hello";
console.log("notSure is " + typeof (notSure));
// Enum тип
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 3] = "Up";
    Direction[Direction["Down"] = 4] = "Down";
    Direction[Direction["Left"] = 8] = "Left";
    Direction[Direction["Right"] = 9] = "Right";
})(Direction || (Direction = {}));
;
console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right);
// Never тип
// Функция возвращает ошибку
const msg = "hello";
const error = (msg) => {
    throw new Error(msg);
};
// Функция в бесконечной петле
const infiniteLoop = () => {
    while (true) {
    }
};
// Object тип предназначен для объекта или не примитива
const create = (o) => { };
//create(1); выдаст ошибку, не является объектом
//create('42'); выдаст ошибку, не является объектом
create({ obj: 1 });
// множественные типы
let id;
id = 10;
id = '42';
//id = true; выдаст ошибку, не является числом или строкой.
// Функции
const createPassword = (name = 'Max', age = 20) => `${name}${age}`;
const firstPas = createPassword('Geo', 38);
const secondPas = createPassword('Al', '33');
const defpas = createPassword();
// опциональный аргумент
const createPass = (name, age) => `${name}${age}`;
// REST аргументы
const createSkills = (name, ...skills) => `${name} my skills are${skills.join()}`;
console.log(`${firstPas} ${secondPas} ${defpas}`);
console.log(`My name is ${createSkills('George', ' JS', ' TS', ' ES6', ' vue')}`);
// Описание функции которую присвоят переменной
let myFunc;
function oldFunc(name) {
    console.log(`Hello ${name}, nice to see you!`);
}
;
myFunc = oldFunc;
myFunc('George');
// Типизайия объекта
let user = {
    name: 'George',
    age: 30,
    nickName: 'webDev'
};
console.log(user);
let user1 = {
    name: 'George',
    age: 30,
    nickName: 'webDev'
};
let admin = {
    name: 'Alex',
    age: 27,
    nickName: 'Loki',
    getPass() {
        return `${this.name}${this.age}`;
    },
};
console.log(user1.name + '\n' + admin.name);
// Классы и модификаторы типов
class User {
    constructor(name) {
        this.age = 38; // Не может быт доступен за пределами данного класса, ни наследники ни объекты созданные с помощью данного класса доступ не имеют
        this.nickName = 'web developer'; // Доступ к этому полю могут получить только наследники
        this.name = name;
        this.pass = 123;
    }
    getPass() {
        return `${this.name}${this.age}`;
    }
}
const george = new User('George');
console.log(george.name + '\n' + george.getPass());
// Сокращенная форма записи
class User1 {
    constructor(name, age, nickName, pass) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}
// Аксессоры
class Client {
    constructor(name) {
        this.name = name;
        this.age = 20;
    }
    setAge(age) {
        this.age = age;
    }
    set myAge(age) {
        this.age = age;
    }
}
const petr = new Client('Petr');
// console.log(petr)
petr.setAge(12);
// console.log(petr);
petr.myAge = 11;
console.log(petr);
// Наследрование
// Статические свойства классов
class Consumer {
    constructor(myName, age) {
        this.myName = myName;
        this.age = age;
        this.nickName = 'wedDev';
    }
    ;
    getPass() {
        return `${this.myName}${Consumer.secret}`;
    }
}
Consumer.secret = 12345; // статическое свойство
// Переопределение метода в классе наследнике
class Tonia extends Consumer {
    constructor(age) {
        super(myName, age);
        this.name = 'Tonia';
    }
    getPass() {
        return `${this.age}${this.myName}${Consumer.secret}`;
    }
}
const tonia = new Tonia(5);
// Абстрактные классы
class Costomer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    grert() {
        console.log(this.name);
    }
}
class Sasha extends Costomer {
    constructor(age) {
        super(myName, age);
        this.name = 'Sasha';
    }
    getPass() {
        return `${this.age}${this.name}`;
    }
}
const sasha = new Sasha(35);
// Класс созданный, базируясь на интерфейсе
class Adam {
    constructor() {
        this.name = 'Adam';
        this.age = 33;
        this.nickName = 'The_First';
    }
    getPass() {
        return `${this.name}${this.age}`;
    }
}
class Floor {
    constructor() {
        this.lenght = 10;
        this.width = 6;
    }
    getArea() {
        return this.lenght * this.width;
    }
}
const firstFlor = new Floor;
console.log(`First floor:\nWidth ${firstFlor.width}\nLenght ${firstFlor.lenght}\nArea ${firstFlor.getArea()}`);
class Floor2 {
    constructor() {
        this.lenght = 8;
        this.width = 4;
    }
    getArea() {
        return this.lenght * this.width;
    }
}
const secondFloor = new Floor2;
console.log(`Second floor:\nWidth ${secondFloor.width}\nLenght ${secondFloor.lenght}\nArea ${secondFloor.getArea()}`);
// Обобщения (Generic)
// Нужны чтоб если в функцию в качестве аргумента прилетает строка, то функция возвращала строку, если число, то возвращала чилсо.
// Примеры
// ES6 синтаксис
const getterES6 = (data) => data;
// ES5 синтаксис
function getterES5(data) {
    return data;
}
//getterES6(10).lenght; выдаст ошибку метода lenght не существует в типе 10
console.log('Вывод длины слова "test" ' + getterES6('test').length);
class Furniture {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPass() {
        return `${this.name}${this.age}`;
    }
}
//const chear = new Furniture('Chear', '40'); ошибка: тип число не может быть у типа строка
const armchear = new Furniture(20, 23);
const table = new Furniture('Table', 189);
//console.log(chear.getPass());
console.log(armchear.getPass());
console.log(table.getPass());
// Декораторы
// Обычная функция, может быть прикреплена к классу, методу, аксессору, свойству или параметру. Оборачивают сущность и меняют ее поведение
const logClass = (constructor) => {
    console.log(constructor);
};
const logProperty = (target, propertyKey) => {
    console.log(propertyKey);
};
const logMethod = (target, propertyKey, descriptor) => {
    console.log(propertyKey);
};
let Auto = class Auto {
    constructor(name, age, secret) {
        this.name = name;
        this.age = age;
        this.secret = secret;
    }
    getPass() {
        return `${this.name}${this.age}`;
    }
};
__decorate([
    logProperty,
    __metadata("design:type", Number)
], Auto.prototype, "secret", void 0);
__decorate([
    logMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Auto.prototype, "getPass", null);
Auto = __decorate([
    logClass,
    __metadata("design:paramtypes", [String, Number, Number])
], Auto);
const volkswagen = new Auto("VolksWagen", 234, 12);
console.log(volkswagen.secret);
