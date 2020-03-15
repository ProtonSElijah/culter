export function calculateElementsToAdd(collection, collectionWhereAddLength, pageSize) {
    let elementsCount = collection.length;
    let shiftIndex = collectionWhereAddLength % pageSize;
    return collection.slice(shiftIndex, elementsCount);
}
