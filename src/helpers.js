/** Return six random items from incoming array */
export const sort = (array) => {
  let sortedArray = [];
  if (array && array.length <= 5) {
    sortedArray = array;
  } else if (array && array.length > 5) {
    array.sort(() => Math.random() - 0.5);
    for (let i = 0; i <= 5; i++) {
      sortedArray.push(array[i]);
    }
  }
  return sortedArray;
};

/** Sorts incoming data by date*/
export const sortByDate = (array) => {
  return (
    array &&
    array.sort((a, b) => {
      return new Date(b.dateTime) - new Date(a.dateTime);
    })
  );
};
