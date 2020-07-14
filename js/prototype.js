/*
 * @Description: 彻底理解JavaScript原型链（一）—__proto__的默认指向
 * @version: 
 * @Author: jooey wong
 * @Date: 2020-07-02 22:13:28
 * @LastEditors: jooey wong
 * @LastEditTime: 2020-07-04 09:37:11
 */ 

// 对象分为 对象 和 函数
// 对象 由 函数 生成
// 对象生成的时候 __proto__ 会指向 函数的prototype属性

 // 隐式调用
const o = {}
console.log(o.__proto__ === Object.prototype)

// 显式调用
const ob = Object()
console.log(o.__proto__ === Object.prototype);

// 使用函数创建自定义对象
function MyObj() {}
console.log(typeof Object);
const mo = new MyObj()
console.log(mo.__proto__ === MyObj.prototype);

// 函数对象 也是由Function函数生成的
function fn() {}
console.log(fn.__proto__ === Function.prototype);

// Function函数本身作为对象时，生成它的函数是他自身
console.log(Function.__proto__ === Function.prototype);

// Object函数也是一个函数对象，生成它的函数自然也是Function函数
console.log(Object.__proto__ === Function.prototype);

console.log(typeof fn.prototype);

console.log(fn.prototype);

console.log(fn.prototype.constructor === fn);

console.log(fn.prototype.__proto__ === Object.prototype);