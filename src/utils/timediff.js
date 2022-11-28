import timediff from 'timediff';

export const getTimeDiff = (time1, time2) => {
  const timeDiff = timediff(time1, time2);
  if (timeDiff.years) {
    return `${timeDiff.years}y`;
  }
  if (timeDiff.months) {
    return `${timeDiff.months}mo`;
  }
  if (timeDiff.weeks) {
    return `${timeDiff.weeks}w`;
  }
  if (timeDiff.days) {
    return `${timeDiff.days}d`;
  }
  if (timeDiff.hours) {
    return `${timeDiff.hours}h`;
  }
  return `${timeDiff.minutes}m`;
};

export const compareTime = (time1, time2) => {
  if (time1.createdAt < time2.createdAt) {
    return 1;
  } else if (time1.createdAt > time2.createdAt) {
    return -1;
  } else {
    return 0;
  }
};
