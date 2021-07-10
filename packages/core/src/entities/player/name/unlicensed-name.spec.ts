import { getUnlicensedPlayerName } from './unlicensed-name';

describe('Unlicensed player name replacement', () => {
  it('should replace only one letter in the surname', () => {
    const changedName = getUnlicensedPlayerName('Son Heung-min');

    expect(changedName).toBe('Son Hiung-min');
  });
});
