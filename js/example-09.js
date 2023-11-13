// Example 9 -Collection of courses (includes, indexOf, push, etc.)
// Write functions to work with the courses collection of training courses:

// addCourse(name) - adds a course to the end of the collection
// removeCourse(name) - removes a course from the collection
// updateCourse(oldName, newName) - changes the name to a new one
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // ' You already have this course'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Course with this name was not found'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']