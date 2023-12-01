// 1. Make a copy of the original array before sorting.
// 2. Call the sort() method on the copy.
// 3. Apply the map() method to the result of the sort() method.
// 4. The variable names is assigned the result of the map() method.

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names); // ['Ajax', 'Poly', 'Mango', 'Kiwi']

// 1. Call flatMap() on the original array and create a flattened array of all courses.
// 2. Apply the filter() method to the result of the flatMap() method in order to filter unique elements.
// 3. Call sort() on the result of the filter() method.
// 4. The variable uniqueSortedCourses is assigned the result of the sort() method.

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ['biology', 'informatics', 'literature', 'mathematics', 'physics']
