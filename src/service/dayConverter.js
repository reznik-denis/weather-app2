export function unixDay(data) {
    const a = new Date(data*1000);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const dayOfWeek = days[a.getDay()];
    return dayOfWeek
}

export function unixHours(data) {
    const d = new Date(data * 1000);
    const hh = d.getHours();
    let h = hh;
    let ampm = 'AM';
       
    if (hh > 12) {
        h = hh - 12;
        ampm = 'PM';
    } else if (hh === 12) {
        h = 12;
        ampm = 'PM';
    } else if (hh === 0) {
        h = 12;
    }
    
    const time = `${h}:00 ${ampm}`;
    return time;
};