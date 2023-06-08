export const differenceInDays = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.round(timeDiff / oneDay);
};

export const addAMPM = (hour) => {
    if (hour >= 0 && hour <= 11) {
        return `${hour < 10 ? `0${hour}` : hour} AM`;
    } else if (hour === 12) {
        return "12 PM";
    } else if (hour >= 13 && hour <= 23) {
        return `${hour - 12 < 10 ? `0${hour - 12}` : hour - 12} PM`;
    } else {
        return "Invalid hour";
    }
};

export const extractDateTimeComponents = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based, so adding 1
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const millisecond = date.getMilliseconds();
    return { year, month, day, hour, minute, second, millisecond };
};

export const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

export const formatDateIso = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};

function getDayOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
        return "th";
    }

    const lastDigit = day % 10;

    switch (lastDigit) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

export const formatDate = (date) => {
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${day}${getDayOrdinalSuffix(day)} ${month}, ${year}`;
};
