
export function isNull(v: unknown): boolean {
  return v === null || v === undefined;
}

export function asInt(v: string | null): number | null {
  return isNull(v) ? null : parseInt(v!, 10);
}