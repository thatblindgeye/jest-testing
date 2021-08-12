import cipher from '../scripts/caesarCipher';

describe('Caesar Cipher', function () {
  test('handles shifting forward 1 letter', function () {
    expect(cipher('Et tu, Brute?', 1)).toBe('Fu uv, Csvuf?');
  });

  test.skip('handles shifting backward 1 letter', function () {
    expect(cipher('Et tu, Brute?', -1)).toBe('Ds st, Aqtsd?');
  });

  test.skip('handles large shifts', function () {
    expect(cipher('A', 25)).toBe('Z');
  });

  test.skip('handles wrapping around alphabet forwards', function () {
    expect(cipher('Z', 1)).toBe('A');
  });

  test.skip('handles wrapping around alphabet backwards', function () {
    expect(cipher('a', -1)).toBe('z');
  });
});
