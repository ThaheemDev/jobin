import dayjs from "dayjs";

export function isWithinNextDay(date: Date) {
    // Convert nextRunAt to a Day.js object
    const nextRunAtTime = dayjs(date);

    const differenceInHours = nextRunAtTime.diff(dayjs(), 'hour');

    // Compare the difference with 1 day
    if (differenceInHours <= 24) return true
}