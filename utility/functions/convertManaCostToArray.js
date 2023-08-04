export function convertManaCostToArray(manaCost) {
    if (typeof manaCost !== 'string') {
        return [];
    }
    const splitArray = manaCost.split('');
    const filteredArray = splitArray.filter((i) => /^[A-Za-z0-9]+$/.test(i));
    return filteredArray;
}