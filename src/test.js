const a = Object.prototype.toString

class Student {}
// console.log(a.call(new Student()))
// console.log(a.call(new Object()))
// console.log(a.call(new Array()))
// console.log(a.call([]))
// console.log(a.call({}))
// console.log(a.call(new Date()))
// console.log(a.call(new Promise((resolve, reject) => {})))
console.log(a.call(0))
