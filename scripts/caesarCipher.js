function checkForWrap(charCode, shiftAmount) {
  const shiftedCharCode = charCode + shiftAmount;
  const charCodeRange =
    charCode >= 97 ? { start: 97, end: 122 } : { start: 65, end: 90 };
  let difference;
  let wrappedCharCode;

  if (shiftedCharCode > charCodeRange.end) {
    // Offsets the difference by -/+ 1 so that the recursive checkToWrap call
    // adds any remainder shifting to the start/end of the charCodeRange
    difference = shiftedCharCode - charCodeRange.end - 1;
    wrappedCharCode = charCodeRange.start;
  } else if (shiftedCharCode < charCodeRange.start) {
    difference = shiftedCharCode - charCodeRange.start + 1;
    wrappedCharCode = charCodeRange.end;
  }

  if (wrappedCharCode) {
    return checkForWrap(wrappedCharCode, difference);
  }

  return shiftedCharCode;
}

function shiftLetter(letter, shiftAmount) {
  const charCode = letter.charCodeAt(0);
  const newCharCode = checkForWrap(charCode, shiftAmount);

  return String.fromCharCode(newCharCode);
}

export default function cipher(string, shiftAmount) {
  const arrayOfCharacters = string.split('');

  const caesarized = arrayOfCharacters.map((character) => {
    if (/[A-Za-z]/.test(character)) {
      return shiftLetter(character, shiftAmount);
    }

    return character;
  });

  return caesarized.join('');
}
