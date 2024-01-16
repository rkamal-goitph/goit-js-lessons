// Example script showcasing Date object usage

// Basic Date Object
const date = new Date();
console.log(date);
console.log(typeof date);
console.log(date.toString());
console.log(typeof date.toString());

// UNIX Time Examples
console.log(new Date(0));
console.log(new Date(15000));

// Instantiating Date Object in Different Ways
// Add examples of creating Date objects using different formats
new Date('2030-03-16');
new Date('2030-03');
new Date('2018');
new Date('03/16/2030');
new Date('2030/03/16');
new Date('2030/3/16');
new Date('March 16, 2030');
new Date('March 16, 2030 14:25:00');
new Date('2030-03-16 14:25:00');
new Date('2030-03-16T14:25:00');
new Date('16 March 2030');
const dateArgs = new Date(2030, 2, 16, 14, 25, 0, 0);
console.log(dateArgs);

// Getter Methods Examples
console.log('Date: ', date);
console.log('getDate(): ', date.getDate());

// Returns day of month from 1 to 31
console.log('getDate(): ', date.getDate());

// Returns day of week from 0 to 6
console.log('getDay(): ', date.getDay());

// Returns month from 0 to 11
console.log('getMonth(): ', date.getMonth());

// Returns 4-digit year
console.log('getFullYear(): ', date.getFullYear());

// Returns hour
console.log('getHours(): ', date.getHours());

// Returns minutes
console.log('getMinutes(): ', date.getMinutes());

// Returns seconds
console.log('getSeconds(): ', date.getSeconds());

// Returns milliseconds
console.log('getMilliseconds(): ', date.getMilliseconds());

// UTC Getter Methods Examples
console.log('getUTCDate(): ', date.getUTCDate());
console.log('Date: ', date);

// Returns day of month from 1 to 31
console.log('getUTCDate(): ', date.getUTCDate());

// Returns day of week from 0 to 6
console.log('getUTCDay(): ', date.getUTCDay());

// Returns month from 0 to 11
console.log('getUTCMonth(): ', date.getUTCMonth());

// Returns 4-digit year
console.log('getUTCFullYear(): ', date.getUTCFullYear());

// Returns hour
console.log('getUTCHours(): ', date.getUTCHours());

// Returns minutes
console.log('getUTCMinutes(): ', date.getUTCMinutes());

// Returns seconds
console.log('getUTCSeconds(): ', date.getUTCSeconds());

// Returns milliseconds
console.log('getUTCMilliseconds(): ', date.getUTCMilliseconds());

// Setter Methods Examples
const setDate = new Date('March 16, 2030 14:25:00');
setDate.setMinutes(50);
console.log(setDate);
setDate.setFullYear(2040, 4, 8);
console.log(setDate);

// Formatting Methods Examples
const formatDate = new Date('March 16, 2030 14:25:00');
console.log(formatDate.toString());
console.log(formatDate.toTimeString());
console.log(formatDate.toLocaleTimeString());
console.log(formatDate.toUTCString());
console.log(formatDate.toDateString());
console.log(formatDate.toISOString());
console.log(formatDate.toLocaleString());
console.log(formatDate.getTime());
