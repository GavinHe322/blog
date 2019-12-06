// // 1. 生成新数组
// // 2. 接收一个函数  每次返回 item index arr
// // 
// Array.prototype.myMap = function(fn) {
//   if (Object.prototype.toString.call(this) !== '[object Array]') {
//     throw new SyntaxError('Invalid or unexpected token');
//   }
//   var len = this.length;
//   var arr = new Array(len)
//   for (var i = 0; i < this.length; i++) {
//     if (this[i] === undefined) continue;
//     var item = fn(this[i], i, this)
//     arr[i] = item
//   }
//   return arr
// }
// var arr = [1, ,3, 4]
// var newArr = arr.myMap((val, i, arr) => {
//   return val * 2
// })


// reduce 接收两个参数，1函数，2initialValue
// 函数接收四个个参数 accumulator arrayItem, currentIndex, array
// 1. 调用 reduce 时传入 initialValue，accumulator 取值为 initialValue
// 

// Array.prototype.myReduce = function(call)

var arr = [1, 2, 3, 4]

var a = arr.reduce(function(accumulator, item) {
  // accumulator.push(item)
  return accumulator.concat(item * 2)
}, [])
console.log(a)
console.log(arr)