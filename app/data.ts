// Day.js 是一个轻量的处理时间和日期的 JavaScript 库 - https://day.js.org/zh-CN/
import dayjs from 'dayjs'
// Day.js 完美支持国际化。但除非手动加载，多国语言默认是不会被打包到工程里的。
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')
// DayOfYear 增加了 .dayOfYear() API 返回一个 number 来表示 Dayjs 的日期是年中第几天，或设置成是年中第几天。
import dayOfYear from "dayjs/plugin/dayOfYear";
dayjs.extend(dayOfYear);
// 数据定义
import { Holiday } from './definitions';
import { log } from 'console';

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

// 获取两个日期相差的天数
export function getDaysInDiff(targetDate: string) {
    const target = dayjs(targetDate);
    const today = dayjs();
    const diff = target.diff(today, 'day');
    return diff;
}

// 获取公共节假日 - https://date.nager.at
export async function getPublicHolidays(year: number, countryCode: string) {
    const api = `https://date.nager.at/api/v3/publicholidays/${year}/${countryCode}`;
    const res = await fetch(api)
    const data = await res.json();
    return data;
}

// 获取接下来一年的公共节假日
export async function getNextPublicHolidays() {
    // 获取今年
    const year = getYear();
    // 获取今年的公共节假日
    const thisYear = await getPublicHolidays(year, 'CN');
    // 获取明年的公共节假日
    const nextYear = await getPublicHolidays(year + 1, 'CN');
    // 合并两个数组
    var holidays = thisYear.concat(nextYear);
    // 获取今天
    const today = dayjs();
    // 获取明年的今天日期
    const nextYearYesterday = today.add(1, 'year').subtract(1, 'day');
    // 保留【今天之后】到【明年昨天之前】的节假日
    holidays = holidays.filter((holiday: Holiday) => today.diff(dayjs(holiday.date)) <= 0 && nextYearYesterday.diff(dayjs(holiday.date)) > 0)
    return holidays;
}