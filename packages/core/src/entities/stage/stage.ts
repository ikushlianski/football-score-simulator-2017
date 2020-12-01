import { League } from '../league/league';
import { Team } from '../team/team';

export enum StageTypeEnum {
  groupStage,
  playOff,
}

export abstract class Stage {
  abstract stageType: StageTypeEnum;

  leagues?: League[];
  teams?: Team[]; // if knock-out, set teams right here instead of League or Group
}
