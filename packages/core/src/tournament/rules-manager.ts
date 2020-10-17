import { TournamentRulesInterface } from './tournament-rules.interface';

export abstract class RulesManager {
  abstract rules: TournamentRulesInterface;

  getRules(): TournamentRulesInterface {
    return this.rules;
  }

  setRules(rules: Partial<TournamentRulesInterface>): TournamentRulesInterface {
    return {
      ...this.rules,
      ...rules,
    };
  }
}
