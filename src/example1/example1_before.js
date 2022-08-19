exports.calc = function (dist, d) {
  if (d.getHours() >= 22) {
    return dist * 3.9;
  } else {
    if (d.getDay() === 0) {
      return dist * 2.9;
    } else {
      return dist * 2.1;
    }
  }
};
