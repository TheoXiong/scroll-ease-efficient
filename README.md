# **scroll-ease-efficient**
 A function that smoothly scroll the scrollbar to the specified position

# install
``` 
$   npm install scroll-ease-efficient 
```

# use
```
const { scrollTo } = require('scroll-ease-efficient')
// or import { scrollTo } from 'scroll-ease-efficient'

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
* ele <Dom> target scrollable element 
* pos <Number> specified the position which scroll to
* options <Object> 
   * timingFunction <String> specify velocity curve of scrolling, default value is 'linear'
   * duration <Number> specify time of scrolling, default value is 1000
   * factor <Number> specify the factor of gradually scrolling, it is only for gradually mode, should less then 100, and more then 1


# obey
MIT
# Keywords
scroll  front-end
