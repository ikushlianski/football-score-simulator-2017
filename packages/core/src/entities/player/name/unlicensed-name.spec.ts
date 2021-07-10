import { getUnlicensedPlayerName } from './unlicensed-name';

describe('Unlicensed player name replacement', () => {
  it('should replace only one letter in the surname', () => {
    const changedName = getUnlicensedPlayerName('Son Heung-min');

    expect(changedName).toBe('Son Hiung-min');
  });

  it('should replace a letter only in the last word in complex names', () => {
    const changedName = getUnlicensedPlayerName('Robin Van Persie');

    expect(changedName).toBe('Robin Van Pirsie');
  });

  it('should handle one-word names', () => {
    const changedName = getUnlicensedPlayerName('Jorginho');

    expect(changedName).toBe('Jarginho');
  });

  it('should trim last letter if nothing else could be replaced', () => {
    const changedName = getUnlicensedPlayerName('A. Lysyuk');

    expect(changedName).toBe('A. Lysyu');
  });

  it('should preserve capital letter is all words if trimming was used', () => {
    const changedName = getUnlicensedPlayerName('Mathias Sulju');

    expect(changedName).toBe('Mathias Sulj');
  });
});
