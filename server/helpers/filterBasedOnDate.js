function dateCheck(current, from, to) {
  let fromDate = new Date(Date.UTC(from.year, from.month, from.day));
  let toDate = new Date(Date.UTC(to.year, to.month, to.day, 23, 59, 59, 999));

  return current >= fromDate && current <= toDate;
}

function filterBasedOnDate(data, from, to) {
  let objectkeys = data
    .filter((object) => {
      return dateCheck(object.LastModified, from, to);
    })
    .map((object) => object.Key);

  return objectkeys.splice(1);
}

module.exports = { filterBasedOnDate };
