// Example 7 - Link formatting (ternary operator)
// Make code refactoring of the task number 4 code using ternary operator.

let link = 'https://somesite.com/about';
if (link.includes('my-site') && !link.endsWith('/')) {
  link += '/';
}

// alternate implementation using ternary operator
link.includes('my-site') && !link.endsWith('/') ? link += '/' : null;

console.log(link);