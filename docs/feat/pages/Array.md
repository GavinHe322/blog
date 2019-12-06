#数组Api

## Map

```js
// 规范
// 1. 生成新数组
// 2. 接收一个函数  每次返回 arrayItem currentIndex array
// 3. 稀疏数组
Array.prototype.myMap = function(fn) {
  
  if (Object.prototype.toString.call(this) !== '[object Array]') {
    throw new TypeError('cannot read prototype "map" of null or undefined');
  }

  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    throw new TypeError(fn + 'it not a function');
  }

  var len = this.length;
  var newArr = new Array(len)
  for (var i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    var item = fn(this[i], i, this)
    newArr[i] = item
  }
  return newArr
}
var arr = [1, ,3, 4]
var newArr = arr.myMap((val, i, arr) => {
  return val * 2
})

```

