import { Stage, StageTypeEnum } from '../../entities/stage/stage';
import { League } from '../../entities/league/league';

export class UnlGroupStage extends Stage {
  leagues: League[];
  stageType: StageTypeEnum;

  constructor(leagues: League[]) {
    super();

    this.leagues = leagues;
    this.stageType = StageTypeEnum.groupStage;
  }
}
