import capitalize from '../scripts/capitalize';

describe('Capitalize', function () {
  test('"this is a test" returns "This is a test."', function () {
    expect(capitalize('this is a test.')).toBe('This is a test.');
  });

  test('"" returns ""', function () {
    expect(capitalize('')).toBe('');
  });

  test('numbers throw an error', function () {
    expect(() => capitalize(1)).toThrow('Argument passed in is not a string.');
  });

  test('arrays throw an error', function () {
    expect(() => capitalize(['this', 'is', 'a', 'test'])).toThrow(
      'Argument passed in is not a string.'
    );
  });

  test('missing argument throws an error', function () {
    expect(() => capitalize()).toThrow('Argument passed in is not a string.');
  });
});
