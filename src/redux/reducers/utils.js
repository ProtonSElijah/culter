export function calculateElementsToAdd(collection, collectionWhereAddLength, pageSize) {
  const elementsCount = collection.length;
  const shiftIndex = collectionWhereAddLength % pageSize;
  return collection.slice(shiftIndex, elementsCount);
}
