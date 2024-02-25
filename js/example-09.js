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

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(newCourse) {
  if (courses.includes(newCourse)) {
    console.log('You already have this course');
    return;
  }

  courses.push(newCourse);
}

function replaceCourse(name, newName = noll) {
  const courseIndex = courses.indexOf(name);

  if (courseIndex === -1) {
    console.log('Course with this name was not found');
    return;
  }

  courses.splice(courseIndex, 1);
}

function updateCourse(name, newName) {
  const courseIndex = courses.indexOf(name);

  if (courseIndex === -1) {
    console.log('Course with this name was not found');
    return;
  }

  courses[courseIndex] = newName;
}

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'You already have this course'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Course with this name was not found'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
