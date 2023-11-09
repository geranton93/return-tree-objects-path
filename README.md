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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
