//
// ─── SPLICE METHOD ───────────────────────────────────────────────────────────────
//

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// The splice() method removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// First argument that we can pass this place is where the removal to start

// If we pass 0, it will remove all of the items
// [48, 29, 30].splice(0); => []

// We can also supply the second argument which is the number of items that we want to be remove

// Splice also gives us as a return value, the value that it removed
// const removedValue = [48, 29, 30].splice(1, 1) => [29]

// Splice => Mutate
// Slice => does not Mutate
// Filter => does not Mutate
// Pop => Mutate

// split => turn string to array
