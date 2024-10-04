function timeAgo(serverTime) {
    const timeUnits = [
        { name: "year", milliseconds: 1000 * 60 * 60 * 24 * 365 },
        { name: "month", milliseconds: 1000 * 60 * 60 * 24 * 30 },
        { name: "day", milliseconds: 1000 * 60 * 60 * 24 },
        { name: "hour", milliseconds: 1000 * 60 * 60 },
        { name: "minute", milliseconds: 1000 * 60 },
        { name: "second", milliseconds: 1000 },
    ];

    const now = new Date();
    const time = new Date(serverTime);
    const timeDifference = now - time;

    for (let unit of timeUnits) {
        const elapsed = Math.floor(timeDifference / unit.milliseconds);
        if (elapsed > 0) {
            return elapsed === 1 ? `${elapsed} ${unit.name} ago` : `${elapsed} ${unit.name}s ago`;
        }
    }

    return "just now"; // If the time difference is less than a second
}

export default timeAgo;
