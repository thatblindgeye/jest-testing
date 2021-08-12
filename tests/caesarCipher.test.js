import cipher from '../scripts/caesarCipher';

describe('Caesar Cipher', function () {
  test('handles shifting forward 1 letter', function () {
    expect(cipher('Et tu, Brute?', 1)).toBe('Fu uv, Csvuf?');
  });

  test('handles shifting backward 1 letter', function () {
    expect(cipher('Et tu, Brute?', -1)).toBe('Ds st, Aqtsd?');
  });

  test('handles large shift without wrapping', function () {
    expect(cipher('A', 25)).toBe('Z');
  });

  test('handles single positive wrap', function () {
    expect(cipher('Z', 1)).toBe('A');
  });

  test('handles single negative wrap', function () {
    expect(cipher('a', -1)).toBe('z');
  });

  test('handles several positive wraps', function () {
    expect(cipher('a', 51)).toBe('z');
  });

  test('handles several negative wraps', function () {
    expect(cipher('A', -51)).toBe('B');
  });
});
