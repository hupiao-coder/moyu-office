// Day.js 是一个轻量的处理时间和日期的 JavaScript 库 - https://day.js.org/zh-CN/
import dayjs from 'dayjs'
// Day.js 完美支持国际化。但除非手动加载，多国语言默认是不会被打包到工程里的。
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')
// DayOfYear 增加了 .dayOfYear() API 返回一个 number 来表示 Dayjs 的日期是年中第几天，或设置成是年中第几天。
var dayOfYear = require("dayjs/plugin/dayOfYear");
dayjs.extend(dayOfYear);


// 获取今年
export function getYear() {
    return dayjs().year();
}

// 获取今天日期
export function getToday() {
    return dayjs().format('YYYY年MM月DD日');
}

// 获取每年中的第几天
export function getDayOfYear() {
    return dayjs().dayOfYear();
}

// 获取今天星期几
export function getDayOfWeek() {
    return dayjs().day();
}

// 获取今天星期几
export function getDayOfWeekFormat() {
    return dayjs().format('dddd');
}

// 获取今天月份里的日期
export function getDateOfMonth() {
    return dayjs().date();
}

// 获取当前月份包含的天数
export function getDaysInMonth() {
    return dayjs().daysInMonth();
}