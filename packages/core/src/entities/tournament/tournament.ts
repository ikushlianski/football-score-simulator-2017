import { TournamentRules } from '../rules/tournament-rules';
import { CompetitionsEnum } from '../../competitions/competitions.enum';
import { Stage } from '../stage/stage';

export abstract class Tournament {
  abstract tournamentCode: CompetitionsEnum;
  abstract tournamentRules: TournamentRules;
  abstract stages: Stage[];

  protected constructor() {
    this.validateStages();
  }

  private validateStages() {
    if (this.stages.length < 1) {
      throw Error(`Should be at least one stage in ${this.tournamentCode}`);
    }
  }

  abstract start(): () => void;
  abstract end(): () => void;
}
