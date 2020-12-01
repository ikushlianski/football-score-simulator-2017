import { Stage, StageTypeEnum } from '../../entities/stage/stage';
import { League } from '../../entities/league/league';
import { Team } from '../../entities/team/team';

export class UnlFinals extends Stage {
  stageType: StageTypeEnum;

  constructor(teams: Team[]) {
    super();

    this.stageType = StageTypeEnum.playOff;
  }
}
