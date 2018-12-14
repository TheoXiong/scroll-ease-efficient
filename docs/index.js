/*
* Ttile: The scrollbar rolls smoothly to the specified position
* Author: TheoXiong
* Date: 20181212
*/

window.requestAnimationFrame = window.requestAnimationFrame ||
                               window.mozRequestAnimationFrame ||
                               window.webkitRequestAnimationFrame ||
                               window.msRequestAnimationFrame ||
                               window.oRequestAnimationFrame ||
                               function (callback) {
                                   return window.setTimeout(callback, 1000 / 60)
                               }

window.cancelAnimationFrame = window.cancelAnimationFrame ||
                              window.webkitCancelAnimationFrame ||
                              window.mozCancelAnimationFrame ||
                              window.msCancelAnimationFrame ||
                              window.oCancelAnimationFrame ||
                              function (id) {
                                  window.clearTimeout(id)
                              }

/**
 * Scroll the element to the specified position, it is apply to vertical direction
 * @param {Dom} ele target element
 * @param {Number} pos specified position
 * @param {Object} options include property: timingFunction duration factor
 *        timingFunction: specify velocity curve of scrolling, default value is 'linear'
 *        duration: specify time of scrolling, default value is 1000,
 *        factor: specify the factor of gradually scrolling, it is only for gradually mode, should less then 100, and more then 1
 */
function scrollTo (ele, pos, options) {
    if (!(ele && typeof ele.scrollTop === 'number' && typeof ele.scrollHeight === 'number' && typeof pos === 'number' && pos >= 0)) {
        return
    }
    if (!isScrollable(ele) || pos === ele.scrollTop) {
        return
    }
    let maxScrollDist = ele.scrollHeight - ele.clientHeight
    if (pos > maxScrollDist) {
        pos = maxScrollDist
    }

    if (options && typeof options !== 'object') {
        return console.error('[scroll.js] options type must be object')
    }
    let opt = options || {}
    opt.timingFunction = opt.timingFunction || 'linear'
    opt.duration = parseInt(opt.duration) || 1000
    if (opt.duration < 100) {
        opt.duration = 100
    }

    if (opt.timingFunction === 'gradually') {
        scrollGradually(ele, pos, opt)
    } else if (opt.timingFunction === 'linear') {
        scrollLinear(ele, pos, opt.duration)
    } else if (opt.timingFunction === 'instant') {
        scrollInstant(ele, pos)
    }
}

function scrollGradually (ele, pos, opt) {
    let winFrameId = null
    let scrollTop = ele.scrollTop || 0
    let factor = 5
    if (typeof opt.factor === 'number' && opt.factor > 1 && opt.factor < 100) {
        factor = opt.factor
    } else {
        factor = calcFactor(Math.abs(pos - scrollTop), opt.duration)
    }

    const step = function () {
        let distance = pos - scrollTop
        scrollTop = scrollTop + distance / factor

        if (Math.abs(distance) < 2) {
            ele.scrollTop = pos
            if (winFrameId) {
                window.cancelAnimationFrame(winFrameId)
                winFrameId = null
            }
        } else {
            ele.scrollTop = scrollTop
            winFrameId = window.requestAnimationFrame(step)
        }
    }
    step()
}

function scrollLinear (ele, pos, duration) {
    let winFrameId = null
    let scrollTop = ele.scrollTop || 0
    let stepTimes = duration / (1000 / 60)
    let stepDist = (pos - scrollTop) / stepTimes
    let stepCnt = 0

    const step = function () {
        scrollTop += stepDist
        stepCnt++
        if (stepCnt >= stepTimes || (Math.abs(pos - scrollTop) <= (stepDist + 2))) {
            ele.scrollTop = pos
            if (winFrameId) {
                window.cancelAnimationFrame(winFrameId)
                winFrameId = null
            }
        } else {
            ele.scrollTop = scrollTop
            winFrameId = window.requestAnimationFrame(step)
        }
    }
    step()
}

function scrollInstant (ele, pos) {
    ele.scrollTop = pos
}

/**
 * Check whether the element is scrollable
 * @param {Dom} ele target element
 * @param {String} direction scroll direction, the default value is 'vertical'
 */
function isScrollable (ele, direction) {
    if (!ele) {
        return false
    }

    direction = direction || 'vertical'
    if (direction === 'vertical') {
        return ele.scrollHeight > ele.clientHeight
    } else if (direction === 'horizontal') {
        return ele.scrollWidth > ele.clientWidth
    }
}

/**
 * Calculate the factor of Smooth moving, according to distance and duration
 * @param {Number} distance between target position and current scrollTop
 * @param {Number} duration the time from beginning to end of scrolling
 */
function calcFactor (distance, duration) {
    let stepTimes = duration / (1000 / 60)
    return 1 / (1 - Math.pow(2 / distance, 1 / stepTimes))
}

if (typeof module !== 'undefined' && module) {
    module.exports.scrollTo = scrollTo
}

