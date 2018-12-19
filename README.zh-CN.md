简体中文 | [English](./README.md)

## 简介
 [scroll-ease-efficient](https://theoxiong.github.io/scroll-ease-efficient) 是一个可以将滚动条平滑移动到指定位置的函数.

## 特点
- 不依赖其他模块或插件库
- 支持水平方向和垂直方向滚动
- 可指定任意滚动位置
- 支持线性、缓动、立刻三种过渡效果

## 演示
https://theoxiong.github.io/scroll-ease-efficient/

![demo](./scroll.gif)

## 安装
``` 
$   npm install scroll-ease-efficient --save
```

## 使用
```
# 支持 CommonJs/ES6/Script 三种引入方法
# 1. CommonJs 
const { scrollTo } = require('scroll-ease-efficient')
# 2. ES6
import { scrollTo } from 'scroll-ease-efficient'
# 3. Script
<script type="text/javascript" src="scroll-ease-efficient/index.js"></script>

# 可滚动元素(div)
let scrollEle = document.getElementById('id')

# 基本用法
scrollTo(scrollEle, 500)

# 指定滚动时间，单位ms
scrollTo(scrollEle, 500, { duration: 500})

# 指定滚动动画效果
scrollTo(scrollEle, 500, { timingFunction: 'gradually'})

# 指定滚动时间和滚动动画效果
scrollTo(scrollEle, 500, { timingFunction: 'liner', duration: 500})

# 指定缓动因子
scrollTo(scrollEle, 500, { timingFunction: 'gradually', factor: 6})

# 指定水平方向滚动
scrollTo(scrollEle, 500, { direction: 'horizontal' })
```

# API
**<font size=4>function scrollTo (ele, pos, [options])</font>**
* **ele** &lt;<font color=#9acd32>Dom</font>&gt; 可滚动元素 
* **pos** &lt;<font color=#9acd32>Number</font>&gt; 指定滚动的位置
* **options** &lt;<font color=#9acd32>Object</font>&gt; 
   * **direction** &lt;<font color=#9acd32>String</font>&gt; 指定滚动方向, 可选'vertical'或'horizontal'，默认为'vertical'
   * **timingFunction** &lt;<font color=#9acd32>String</font>&gt; 指定滚动动画效果, 可选'liner'/'gradually'/'instant'，默认为'linear'
   * **duration** &lt;<font color=#9acd32>Number</font>&gt; 指定滚动时间, 默认为1000
   * **factor** &lt;<font color=#9acd32>Number</font>&gt; 指定缓动因子（只对gradually有效，范围[1, 100]）


# obey
MIT
# Keywords
scroll smooth animation js front-end
