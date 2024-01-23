export const compareArrays = (array1: string[], array2: string[]): string[] => {
    return array1.filter(element => !array2.includes(element));
}