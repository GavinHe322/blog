# 懒加载

## 最简单的懒加载

- document.documentElement.clientHeight  获取当前视口高度
- img.getBoundingClientRect().top  获取图片距离顶部的高度
- 滚动事件未使用函数接口

```js
img {
  width: 400px;
  height: 700px;
  display: block;
  margin: 0 auto;
}

```

```js
// 创建文件片段
var fragment = document.createDocumentFragment()

 // 总共大小 3.5MB，已经非常爆炸了
const imgList = [
  'http://g.hiphotos.baidu.com/image/pic/item/c2cec3fdfc03924590b2a9b58d94a4c27d1e2500.jpg',
  'http://g.hiphotos.baidu.com/image/pic/item/d52a2834349b033b95e7b4601fce36d3d539bd19.jpg',
  'http://e.hiphotos.baidu.com/image/pic/item/b812c8fcc3cec3fdb850efcfdc88d43f87942719.jpg',
  'http://a.hiphotos.baidu.com/image/pic/item/0ff41bd5ad6eddc40189fc4133dbb6fd52663319.jpg',
  'http://f.hiphotos.baidu.com/image/pic/item/f2deb48f8c5494eefd4b47a327f5e0fe99257e1a.jpg',
  'http://g.hiphotos.baidu.com/image/pic/item/8b82b9014a90f6030dded4fd3312b31bb051ed1a.jpg',
  'http://c.hiphotos.baidu.com/image/pic/item/42a98226cffc1e17f0d1c48b4090f603738de91a.jpg',
  'http://h.hiphotos.baidu.com/image/pic/item/8d5494eef01f3a2922ce9d749325bc315c607c01.jpg'
]

for (var i = 0; i < imgList.length; i++) {
  let img = document.createElement('img')
  // 设置一个初始的占位符
  img.setAttribute('data-url', imgList[i])
  fragment.append(img)
}
document.body.append(fragment)

// 获取或有 imgNodes
var imgNodes = document.getElementsByTagName('img')
// 获取文档可见视口范围
var clientHeight = document.documentElement.clientHeight

// 已经加载过 src 的不做循环
var isloaded = 0

function onScroll(e) {
  for (var i = isloaded; i < imgNodes.length; i++) {
  
    var img = imgNodes[i]
    var top = img.getBoundingClientRect().top
    // 如果 img 没有 src 并且 img 距离顶部的距离小于可视窗口，则将占位符 url，赋值给 src。
    if (!img.src && top < clientHeight) {
      img.src = img.getAttribute('data-url')
      isloaded += 1
    }
  }
}
document.addEventListener('scroll', onScroll)

// 一开始执行一次函数，加载可见范围的图片.
onScroll()

```
