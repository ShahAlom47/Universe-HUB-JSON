// Ekta array of date strings
let dateArray = ['12/3/2011', '1/20/2010', '5/8/2008', '3/21/2022', '1/15/2010'];

// Convert koro date strings to Date objects
let sortedDates = dateArray.map(dateString => new Date(dateString))
let xx=sortedDates.sort((a, b) => a - b);
console.log(xx);
// Abar convert koro Date objects to formatted date strings
let formattedDates = sortedDates.map(date => {
  let day = date.getDate();
  let month = date.getMonth() + 1; // Month is zero-based, so add 1
  let year = date.getFullYear();
  return `${month}/${day}/${year}`;
});

// Tumi chaile sortedDates array o dekhte paro, formattedDates array o dekhte paro
// console.log('Sorted Dates (Date Objects):', sortedDates);
// console.log('Sorted Dates (Formatted Strings):', formattedDates);
