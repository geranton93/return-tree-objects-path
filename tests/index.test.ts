import { returnTreeObjectsPath } from "../src";

interface TestData {
  id: number;
  name: string;
  children?: TestData[];
}

interface TestData2 extends TestData {
    isActive: boolean;
    children?: TestData2[];
  }

describe('returnTreeObjectsPath', () => {
  const tree: TestData[] = [
    {
      id: 1,
      name: 'Root',
      children: [
        {
          id: 2,
          name: 'Child1',
          children: [
            {
              id: 3,
              name: 'SubChild1',
            },
            {
              id: 4,
              name: 'SubChild1',
            },
          ],
        },
        {
          id: 5,
          name: 'Child2',
        },
      ],
    },
  ];

  const tree2: TestData2[] = [
    {
      id: 1,
      name: 'Root',
      isActive: true,
      children: [
        {
          id: 2,
          name: 'Child1',
          isActive: false,
          children: [
            {
              id: 3,
              name: 'Child1.1',
              isActive: true,
            },
            {
              id: 4,
              name: 'Child1.2',
              isActive: true,
            },
          ],
        },
        {
          id: 5,
          name: 'Child2',
          isActive: false,
        },
      ],
    },
  ];

  it('should find the path to a target value', () => {
    const result = returnTreeObjectsPath(tree, 'id', 3, 'children');
    expect(result).toEqual([
      {
        id: 1,
        name: 'Root',
      },
      {
        id: 2,
        name: 'Child1',
      },
      {
        id: 3,
        name: 'SubChild1',
      },
    ]);
  });

  it('should return an empty array if the target value is not found', () => {
    const result = returnTreeObjectsPath(tree, 'id', 999, 'children');
    expect(result).toEqual([]);
  });

  it('should handle different types for target value', () => {
    const result = returnTreeObjectsPath(tree, 'name', 'Child2', 'children');
    expect(result).toEqual([
      {
        id: 1,
        name: 'Root',
      },
      {
        id: 5,
        name: 'Child2',
      },
    ]);
  });


  it('should find the path to a target value with string key', () => {
    const result = returnTreeObjectsPath(tree2, 'name', 'Child1', 'children');
    expect(result).toEqual([
      {
        id: 1,
        name: 'Root',
        isActive: true,
      },
      {
        id: 2,
        name: 'Child1',
        isActive: false,
      },
    ]);
  });

  it('should find the path to a target value with boolean key', () => {
    const result = returnTreeObjectsPath(tree2, 'isActive', true, 'children');
    expect(result).toEqual([
      {
        id: 1,
        name: 'Root',
        isActive: true,
      },
    ]);
  });

  it('should return an empty array if the target value is not found', () => {
    const result = returnTreeObjectsPath(tree2, 'name', 'Nonexistent', 'children');
    expect(result).toEqual([]);
  });
});
