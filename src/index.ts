/**
 * Recursively finds paths in a list of objects based on a specified target key and value.
 *
 * @export
 * @template T
 * @param {T[]} objects - An array of objects to search through.
 * @param {keyof T} targetKey - The key to search for in the objects.
 * @param {string | number | boolean} targetValue - The value to find in the objects based on the target key.
 * @param {keyof T} childrenProperty - The property name representing the children of each object.
 * @returns {Omit<T, typeof childrenProperty>[]} An array of objects representing the path from the root to the target.
 */
export function returnTreeObjectsPath<T>(
  objects: T[],
  targetKey: keyof T,
  targetValue: string | number | boolean,
  childrenProperty: keyof T,
): Omit<T, typeof childrenProperty>[] {
  const result: Omit<T, typeof childrenProperty>[] = [];

  function findRecursively(obj: T): boolean {
    if (obj[targetKey] === targetValue) {
      const { [childrenProperty]: _, ...rest } = obj;
      result.unshift(rest);
      return true;
    }

    if (obj[childrenProperty] && Array.isArray(obj[childrenProperty])) {
      for (const child of obj[childrenProperty] as T[]) {
        if (findRecursively(child)) {
          const { [childrenProperty]: _, ...rest } = obj;
          result.unshift(rest);
          return true;
        }
      }
    }

    return false;
  }

  objects.some(findRecursively);

  return result;
}
