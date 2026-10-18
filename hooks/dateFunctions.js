import { differenceInSeconds, format, formatDistanceToNow } from "date-fns";

export const findDateDiffInSec = (date) => {
  if (date) return differenceInSeconds(new Date(date), new Date()) || 0;
  return 0;
};

export const dateFormatter = (time) => {
  return time ? format(new Date(time), "PPpp") : "";
};

export const dateYearFormatter = (time) => {
  return time ? format(new Date(time), "P") : "";
};

export const dateFormatFromNow = (time) => {
  return time
    ? formatDistanceToNow(new Date(time), { includeSeconds: true })
    : "";
};

export const currentTime = (time) => {
  return time ? format(new Date(time), "hh:mm aaa") : "";
};
