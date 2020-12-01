import { Tournament } from '../../entities/tournament';
import { Stage } from '../../entities/stage/stage';

export class UnlCompetition extends Tournament {
  stages: Stage[];
  tournamentCode: CompetitionsEnum;
  tournamentRules: TournamentRules;

  constructor(stages: Stage[]) {
    super();
    this.stages = stages;
  }

  end(): () => void {
    return function () {};
  }

  start(): () => void {
    return function () {};
  }
}
