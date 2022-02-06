export function idGenerator(): number {
  return Number(
    Math.random().toString(8).substring(2, 8) + Date.now().toString(8).substring(2, 8)
  );
}