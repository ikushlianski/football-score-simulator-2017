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
  offside,
  varReview,
  penalty,
  corner,
  freeKick,
  goalKick,
  tackle,
  throwIn,
  card,
  injury,
  substitution,
}

export abstract class MatchEvent {
  abstract type: MatchEventType;
}
