export function getPagesArray(totalPages: number) {
  return Array.from({ length: totalPages }, (_e, i) => (i + 1).toString());
}
