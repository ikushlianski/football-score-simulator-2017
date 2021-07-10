import { Tournament } from '../../entities/tournament';
import { Stage } from '../../entities/stage/stage';

export class UnlCompetition extends Tournament {
  stages: Stage[];

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
