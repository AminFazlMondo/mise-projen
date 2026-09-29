/**
 * Recursively merges `source` into `target`, mutating and returning `target`.
 *
 * Plain objects are merged key by key, arrays are concatenated and de-duplicated,
 * and any other value type overwrites the previous one.
 *
 * @internal
 */
export function deepMerge(target: Record<string, any>, source: Record<string, any>): Record<string, any> {
  for (const [key, value] of Object.entries(source)) {
    if (value === undefined) {
      continue;
    }

    if (Array.isArray(value)) {
      const existing = Array.isArray(target[key]) ? target[key] : [];
      target[key] = dedupe([...existing, ...value]);
    } else if (isPlainObject(value)) {
      target[key] = deepMerge(isPlainObject(target[key]) ? target[key] : {}, value);
    } else {
      target[key] = value;
    }
  }

  return target;
}

/**
 * Normalizes a tool-versions map so single version strings become single-element arrays.
 *
 * @internal
 */
export function normalizeTools(tools: { [tool: string]: string | string[] }): { [tool: string]: string[] } {
  return Object.fromEntries(
    Object.entries(tools).map(([tool, versions]) => [tool, Array.isArray(versions) ? versions : [versions]]),
  );
}

function isPlainObject(value: any): value is Record<string, any> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function dedupe<T>(items: T[]): T[] {
  const seen = new Set<string>();
  const result: T[] = [];
  for (const item of items) {
    const key = typeof item === 'object' && item !== null ? JSON.stringify(item) : String(item);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }
  return result;
}
