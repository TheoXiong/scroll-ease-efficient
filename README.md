# **scroll-ease-efficient**
 A function that smoothly scroll the scrollbar to the specified position

# demo
https://theoxiong.github.io/scroll-ease-efficient/

![demo](./scroll.gif)

# install
``` 
$   npm install scroll-ease-efficient 
```

# use
```
// Support CommonJs/ES6/Script 
// 1. CommonJs 
const { scrollTo } = require('scroll-ease-efficient')
// 2. ES6
import { scrollTo } from 'scroll-ease-efficient'
// 3. Script
<script type="text/javascript" src="scroll-ease-efficient/index.js"></script>

// scrollable element
let scrollEle = document.getElementById('id')

// basic usage
scrollTo(scrollEle, 500)

// specify the time of scrolling, unit is millisecond(ms)
scrollTo(scrollEle, 500, { duration: 500})

// specify the timing function, support 'gradually'/'liner'/'instant'
scrollTo(scrollEle, 500, { timingFunction: 'gradually'})

// specify the time of scrolling, and timing function
scrollTo(scrollEle, 500, { timingFunction: 'liner', duration: 500})

// specify the factor, it is just for 'gradually' mode, and duration is unuserful
scrollTo(scrollEle, 500, { timingFunction: 'gradually', factor: 6})
```

# description
**function scrollTo (ele, pos, [options])**
* ele &lt;Dom&gt; target scrollable element 
* pos &lt;Number&gt; specified the position which scroll to
* options &lt;Object&gt; 
   * timingFunction &lt;String&gt; specify velocity curve of scrolling, default value is 'linear'
   * duration &lt;Number&gt; specify time of scrolling, default value is 1000
   * factor &lt;Number&gt; specify the factor of gradually scrolling, it is only for gradually mode, should less then 100, and more then 1


# obey
MIT
# Keywords
scroll  front-end
