export default function reverseString(string) {
  if (typeof string !== 'string') {
    throw new Error(`Argument passed in is not a string.`);
  }

  return string.split('').reverse().join('');
}
