// Javascript has an Array.map() substitute that we can use which is Array.from()
// https://www.linkedin.com/posts/nick-foscarini_javascript-activity-6828791799465750529-B_UE/

let dogs = [
  { name: "Rico", age: 2 },
  { name: "Mac", age: 3 },
  { name: "Bruno", age: 5 },
  { name: "Jucas", age: 10 },
  { name: "Furr", age: 8 },
  { name: "Blu", age: 7 },
];

let names = Array.from(dogs, ({ name }) => name);

console.log(names);
