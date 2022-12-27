import { month } from "./constants";
export function humanizeDate(date) {
    return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
}

export function humanizeTime(date) {
    let minute = date.getMinutes()
    if(minute.length === 1) minute = `0${minute}`
    return `${date.getHours()}:${minute}`;
}