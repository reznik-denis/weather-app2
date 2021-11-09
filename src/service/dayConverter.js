export function unixDayRU(data) {
    const a = new Date(data*1000);
    const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    const dayOfWeek = days[a.getDay()];
    return dayOfWeek
}

export function unixDayUa(data) {
    const a = new Date(data*1000);
    const days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', `П'ятниця`,'Субота'];
    const dayOfWeek = days[a.getDay()];
    return dayOfWeek
}

export function unixDayEn(data) {
    const a = new Date(data*1000);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const dayOfWeek = days[a.getDay()];
    return dayOfWeek
}