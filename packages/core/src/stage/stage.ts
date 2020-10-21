export enum StageTypeEnum {
  groupStage,
  playOff,
  thirdPlaceMatch,
  final,
}

export abstract class Stage {
  abstract stageType: StageTypeEnum;
}
