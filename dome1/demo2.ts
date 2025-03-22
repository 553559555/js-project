// namespace School {
//     export interface Person {
//         name: string;
//         age: number;
//         greet(): void;
//     }

//     export class Student implements Person {
//         constructor(public name: string, public age: number) {
//             this.name = name;
//             this.age = age;
//         }
//         greet() {
//             console.log("Hello, world!");
//             console.log(this.name, this.age);
//         }
//     }
// }

// const demo2Student = new School.Student("张三", 20);
// demo2Student.greet();

//在这个例子当中我们看到接口中并没有定义C但是并没有报错
//应为我们定义了[propName: string]: any;
//允许添加新的任意属性
// interface Person {
//     b?:string,
//     readonly a:string,
//     [propName: string]: any;
// }

// const person:Person  = {
//     a:"213",
//     c:"123",
//     d:"123"
// }

// const fn = (name: string, age: number): string => {
//   return `name: ${name}, age: ${age}`;
// };

// fn("张三", 20);

// interface User {
//   name: string;
//   age: number;
// }

// const getUserInfo = (user) => {
//   return user;
// };

// console.log(
//   "================================",
//   getUserInfo({ name: "张三", age: 18 })
// );


// const fn = (arr:number[], ...items:any[]): any[] => {
//   console.log(arr, items)
//   return items
// }

// let a: number[] = [1, 2, 3]

// let b: string[] = ['a', 'b', 'c']

// console.log("================================",fn(a, ...b))