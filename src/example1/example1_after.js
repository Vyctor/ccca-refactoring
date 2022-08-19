const OVERNIGHT_FARE = 3.9;
const NORMAL_FARE = 2.1;
const SUNDAY_FARE = 2.9;

const isOvernight = (date) => {
  return date.getHours() >= 22;
};

const isSunday = (date) => {
  return date.getDay() === 0;
};

const calculateRide = function (distance, date) {
  if (typeof distance !== "number")
    throw new Error("Invalid parameter distance");
  if (!(date instanceof Date)) throw new Error("Invalid parameter date");
  if (distance <= 0) throw new Error("Distance must be greater than zero");

  if (isOvernight(date)) return distance * OVERNIGHT_FARE;
  return isSunday(date) ? distance * SUNDAY_FARE : distance * NORMAL_FARE;
};

module.exports = {
  calculateRide,
  isSunday,
  isOvernight,
};
