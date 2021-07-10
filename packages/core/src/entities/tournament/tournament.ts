import { Stage } from '../stage/stage';

export abstract class Tournament {
  abstract stages: Stage[];

  protected constructor() {
    this.validateStages();
  }

  private validateStages() {
    if (this.stages.length < 1) {
      throw Error(`Should be at least one stage in the tournament`);
    }
  }

  abstract start(): () => void;
  abstract end(): () => void;
}
