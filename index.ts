
/**
 * Recursively finds paths in a list of objects based on a specified target key and value.
 *
 * @export
 * @template T
 * @param {T[]} objects - An array of objects to search through.
 * @param {string} targetKey - The key to search for in the objects.
 * @param {(string | number | boolean)} targetValue - The value to find in the objects based on the target key.
 * @param {string} childrenProperty - The property name representing the children of each object.
 * @returns {*}  {T[]} An array of objects representing the path from the root to the target.
 */
export function returnTreeObjectsPath<T>(
  objects: T[],
  targetKey: string,
  targetValue: string | number | boolean,
  childrenProperty: string
): T[] {
  const result: T[] = [];

  function findRecursively(obj: any): boolean {
    if (obj[targetKey] === targetValue) {
      const { [childrenProperty]: _, ...rest } = obj;
      result.push(rest);
      return true; // Added to stop further recursion
    }

    if (obj[childrenProperty] && obj[childrenProperty].length > 0) {
      for (const child of obj[childrenProperty]) {
        if (findRecursively(child)) {
          const { [childrenProperty]: _, ...rest } = obj;
          result.push(rest);
          return true; // Added to stop further recursion
        }
      }
    }

    return false; // Added for cases where targetValue is not found
  }

  objects.forEach((obj) => findRecursively(obj));

  return result.reverse(); // Reverse the result to get the path from root to target
}
