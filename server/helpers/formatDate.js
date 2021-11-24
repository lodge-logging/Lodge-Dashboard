const formatDate = (start, end) => {
  let startDateObj = new Date(start);
  let endDateObj = new Date(end);

  start = {
    year: startDateObj.getFullYear(),
    month: startDateObj.getMonth(),
    day: startDateObj.getDate(),
  };
  end = {
    year: endDateObj.getFullYear(),
    month: endDateObj.getMonth(),
    day: endDateObj.getDate(),
  };

  return [start, end];
};

module.exports = { formatDate };
