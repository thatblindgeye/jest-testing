export default function analyzeArray(array) {
  if (!array || !array.length) {
    throw new Error('No array contents to analyze');
  }

  const sortedNums = array.sort((a, b) => a - b);
  const average = array.reduce((accumulator, current) => {
    return (accumulator + current) / array.length;
  });

  return {
    average,
    length: array.length,
    max: sortedNums[array.length - 1],
    min: sortedNums[0],
  };
}
