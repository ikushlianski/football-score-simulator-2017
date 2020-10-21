export enum MatchEventType {
  // org
  kickOff,
  finalWhistle,
  extraTime,
  penaltyShootout,
  matchCancellation,

  // events
  shot,
  foul,
  penalty,
  corner,
  card,
  injury,
  substitution,
}

export abstract class MatchEvent {
  abstract type: MatchEventType;
}
