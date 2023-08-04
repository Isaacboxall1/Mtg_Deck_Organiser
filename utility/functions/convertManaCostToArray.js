export function convertManaCostToArray(manaCost) {
    if (typeof manaCost !== 'string') {
        return [];
    }
    const split = manaCost.split('');
    const noEmptyIndexes = split.filter((i) => /^[A-Za-z0-9]+$/.test(i));
    const convertedToInts = noEmptyIndexes.map((i) => isNaN(Number(i)) ? i : Number(i));
    return convertedToInts;
}