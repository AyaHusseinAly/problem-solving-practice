const schedule = [
    { days: "Wednesday-Friday", open: "8:00 AM", close: "6:00 PM" },
    { days: "Monday", open: "10:00 AM", close: "6:00 PM" },
    { days: "Sunday", open: null, close: null },
    { days: "Saturday", open: "11:00 AM", close: "4:00 PM" }
];

console.log(getOpenDays(schedule, "11:00 AM"));
// → ["Wednesday", "Thursday", "Friday", "Monday", "Sunday", "Saturday"]

function getOpenDays(schedule, time) {
    const dayMap = {
        'Sunday': 1,
        'Monday': 2,
        'Tuesday': 3,
        'Wednesday': 4,
        'Thursday': 5,
        'Friday': 6,
        'Saturday': 7,
    }
    const dayMapRev = {
        '1': 'Sunday',
        '2': 'Monday',
        '3': 'Tuesday',
        '4': 'Wednesday',
        '5': 'Thursday',
        '6': 'Friday',
        '7': 'Saturday',
    }
    const results = [];
    const timeAsNum = time.includes("AM") ? Number(time.split(":")[0]) : Number(time.split(":")[0]) + 12;
    const days = schedule.filter(elem => {
        if (!elem.open || !elem.close) return true;
        const openAsNum = elem.open.includes("AM") ? Number(elem.open.split(":")[0]) : Number(elem.open.split(":")[0]) + 12;
        const closeAsNum = elem.close.includes("AM") ? Number(elem.close.split(":")[0]) : Number(elem.close.split(":")[0]) + 12;
        return (timeAsNum >= openAsNum) && (timeAsNum <= closeAsNum)

    }).map(
        elem => elem.days
    ).forEach(
        elem => {
            if (!elem.includes('-'))
                result.push(elem);
            const daysBoundaries = elem.split('-')
            const daysNumArr = arrFrom(dayMap[daysBoundaries[0]], dayMap[daysBoundaries[1]]);
            daysNumArr.map(num => dayMapRev[num]);
            result = [...results, ...daysNumArr]
        });

    return days;
}

function arrFrom(lowEnd, highEnd) {
    var list = [];
    for (var i = lowEnd; i <= highEnd; i++) {
        list.push(i);
    }
    return list;
}