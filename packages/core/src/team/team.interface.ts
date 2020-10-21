import { League } from '../league/league';

export interface TeamInterface {
  name: string;
  nation: NationsEnum;
  stars: number;

  nationalLeague?: Tournament;
}
