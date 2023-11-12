function getPagesCount(totalElements: number, limit: string) {
  return Math.ceil(totalElements / +limit);
}

export function getPagesArray(totalPages: number) {
  const pagesArray: string[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i.toString());
  }
  return pagesArray;
}

export default getPagesCount;
