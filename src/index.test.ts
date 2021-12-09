import { hexToRgb, rgbToHex } from '.';

describe('converts colors', () => {
  const initialHex = '#30a14e';
  const initialRgb = {
    r: 48,
    g: 161,
    b: 78,
  };

  it('should convert "#30a14e" to rgb(48 161 78)', () => {
    expect(hexToRgb(initialHex)).toEqual(initialRgb);
  });

  it('should convert rgb(48 161 78) to "#30a14e"', () => {
    expect(rgbToHex(initialRgb.r, initialRgb.g, initialRgb.b)).toBe(initialHex);
  });
});
