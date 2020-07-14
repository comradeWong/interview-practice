/*
 * @Description: 继承学习代码敲击 https://juejin.im/post/5c433e216fb9a049c15f841b#heading-0
 * @version:
 * @Author: jooey wong
 * @Date: 2020-07-08 09:24:52
 * @LastEditors: jooey wong
 * @LastEditTime: 2020-07-08 10:40:21
 */

// 构造函数、原型对象和实例之间的关系

function F() {}
const f = new F();
// 构造器
console.log(F.prototype.constructor === F);
console.log(F.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
// 实例
console.log(f.__proto__ === F.prototype);
console.log(F.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

class Parent {
  constructor(name) {
    this.name = name;
  }
  static sayHello() {
    console.log("hello");
  }
  sayName() {
    console.log("my name is " + this.name);
  }
}
class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  sayAge() {
    console.log("my age is " + this.age);
    return this.age;
  }
}
const parentInstance = new Parent('Parent')
const childInstance = new Child('Child', 17)

// 构造器原型链
console.log(Child.__proto__ === Parent);
console.log(Parent.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

// 实例原型链
console.log(childInstance.__proto__ === Child.prototype);
console.log(Child.prototype.__proto__ === Parent.prototype);
