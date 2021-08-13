import analyzeArray from '../scripts/arrayAnalysis';

describe('Array Analysis', function () {
  test('returns object with avg, min, max, and array length', function () {
    const input = [1, 8, 3, 4, 2, 6];
    const output = { average: 4, min: 1, max: 8, length: 6 };
    expect(analyzeArray(input)).toEqual(output);
  });

  test('handles large numbers', function () {
    const input = [500, 250, 1200, 900, 300];
    const output = { average: 630, min: 250, max: 1200, length: 5 };
    expect(analyzeArray(input)).toEqual(output);
  });

  test('handles floating point as average', function () {
    const input = [9, 4, 2, 3];
    const output = { average: 4.5, min: 2, max: 9, length: 4 };
    expect(analyzeArray(input)).toEqual(output);
  });

  test('handles all floating point', function () {
    const input = [1.25, 5.75, 9.25, 6.5];
    const output = { average: 5.6875, min: 1.25, max: 9.25, length: 4 };
    expect(analyzeArray(input)).toEqual(output);
  });

  test('handles empty array', function () {
    const input = [];
    expect(() => analyzeArray(input)).toThrow('No array contents to analyze');
  });

  test('handles missing argument', function () {
    expect(() => analyzeArray()).toThrow('No array contents to analyze');
  });
});
