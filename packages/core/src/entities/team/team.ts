import { Tournament } from '../tournament/tournament';
import { NationsEnum } from '../nation/nations.enum';

export class Team {
  name: string;
  nation: NationsEnum;
  stars: number;

  nationalLeague?: Tournament;

  constructor(name: string, nation: NationsEnum, stars: number) {
    this.name = name;
    this.nation = nation;
    this.stars = stars;
  }
}
