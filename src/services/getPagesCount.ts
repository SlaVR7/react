export function getPagesArray(totalPages: number) {
  const pagesArray: string[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i.toString());
  }
  return pagesArray;
}
