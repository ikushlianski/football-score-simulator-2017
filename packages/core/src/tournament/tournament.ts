import { League } from '../league/league';
import { TournamentRules } from '../rules/tournament-rules';
import { CompetitionsEnum } from '../competitions/competitions.enum';
import { Team } from '../team/team';

export abstract class Tournament {
  abstract tournamentCode: CompetitionsEnum;
  abstract tournamentRules: TournamentRules;
  abstract leagues?: League[];
  abstract teams?: Team[]; // if knock-out, set teams right here instead of League or Group

  abstract start(): () => void;
  abstract end(): () => void;
}
