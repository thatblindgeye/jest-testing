export default function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error(`Argument passed in is not a string.`);
  }

  return string === ''
    ? string
    : string.charAt(0).toUpperCase() + string.slice(1);
}
