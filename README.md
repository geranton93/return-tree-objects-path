# Return Tree Objects Path Library

The Return Tree Objects Path Library is a utility that allows you to recursively find paths in a list of objects based on a specified target key and value. It provides a simple and flexible way to traverse and search through complex object structures, enabling you to retrieve paths from the root to the target.

## Installation

You can install the Return Tree Objects Path Library via npm. Make sure you have Node.js and npm installed. Then, run the following command:

```sh
npm install return-tree-objects-path
```

```
import { returnTreeObjectsPath } from 'return-tree-objects-path';

// Sample usage
const objects = [
  {
    id: 1,
    name: 'Parent',
    children: [
      {
        id: 2,
        name: 'Child 1',
        children: [],
      },
      {
        id: 3,
        name: 'Child 2',
        children: [
          {
            id: 4,
            name: 'Grandchild 1',
            children: [],
          },
        ],
      },
    ],
  },
];

const paths = returnTreeObjectsPath(objects, 'id', 4, 'children');
console.log(paths);
```

```
[
  { "id": 1, "name": "Parent" },
  { "id": 3, "name": "Child 2" },
  { "id": 4, "name": "Grandchild 1" }
]
```

## API

### `returnTreeObjectsPath(objects, targetKey, targetValue, childrenProperty)`

Recursively finds paths in a list of objects based on a specified target key and value.

- `objects`: An array of objects to search through.
- `targetKey`: The key to search for in the objects.
- `targetValue`: The value to find in the objects based on the target key.
- `childrenProperty`: The property name representing the children of each object.

Returns an array of objects representing the path from the root to the target.

## Sample Usage

The Return Tree Objects Path Library can be useful for building breadcrumbs in a tree structure. Here's an example of how you can use the library to generate breadcrumbs from a hierarchical list of objects:

```javascript
import { returnTreeObjectsPath } from 'return-tree-objects-path';

// Sample data representing a tree structure
const categories = [
  {
    id: 1,
    name: 'Home',
    children: [
      {
        id: 2,
        name: 'Products',
        children: [
          {
            id: 3,
            name: 'Laptops',
            children: [
              {
                id: 4,
                name: 'Gaming Laptops',
                children: [],
              },
              {
                id: 5,
                name: 'Business Laptops',
                children: [],
              },
            ],
          },
          {
            id: 6,
            name: 'Smartphones',
            children: [],
          },
        ],
      },
      {
        id: 7,
        name: 'About Us',
        children: [],
      },
    ],
  },
];
```
## Keywords

Return Tree Objects Path, Tree Traversal, Recursive Search, Object Paths, JavaScript, TypeScript, Tree Navigation, Data Structure, Hierarchical Structure, Pathfinding, Nested Objects, JSON, Utility Library, Node.js
