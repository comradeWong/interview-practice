/*
 * @Description: this 指向问题 https://juejin.im/post/5c0c87b35188252e8966c78a#heading-3
 * @version:
 * @Author: jooey wong
 * @Date: 2020-07-08 11:27:56
 * @LastEditors: jooey wong
 * @LastEditTime: 2020-07-08 14:33:00
 */
/* 全局上下文 */
this.name = "wxy";
console.log(this);

/* 函数上下文 */
// 普通函数调用模式
var name = "normal windows";
var doSth = function () {
  console.log(this.name);
};
doSth();

// 对象中的函数调用模式
var name = "window";
var dosth2 = function () {
  console.log(this.name);
};
var student = {
  name: "张大富",
  doSth: dosth2,
  other: {
    name: "other",
    doSth: dosth2,
  },
};
console.log(student.doSth());
console.log(student.other.doSth.call(student));