import { Tournament } from '../tournament/tournament';
import { NationsEnum } from '../nation/nations.enum';

export abstract class Team {
  abstract name: string;
  abstract nation: NationsEnum;
  abstract stars: number;

  abstract nationalLeague?: Tournament;
}
