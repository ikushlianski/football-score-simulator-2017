import { TournamentRules } from '../../rules/tournament-rules';
import { TournamentRulesInterface } from '../../rules/tournament-rules.interface';
import { TournamentFormatEnum } from '../../tournament/tournament-format.enum';
import { PlayOffFormatEnum } from '../../format/play-off-format.enum';

export class UnlRulesManager extends TournamentRules {
  rules: TournamentRulesInterface;

  constructor() {
    super();
    this.rules = {
      teamCount: 55,
      leagueCount: 4,
      groupsPerLeague: 4,
      format: TournamentFormatEnum.multiStage,
      qualification: false,
      playOffFormat: {
        legsBeforeFinal: 1,
        legsInFinal: 1,
        thirdPlaceMatch: false,
      },
      playOffTeamCount: PlayOffFormatEnum.semiFinals,

      // todo move to League manager
      promotions: true,
      promotionRules: {
        lastNTeamsPromoted: 1,
      },
      relegationRules: {
        lastNTeamsRelegated: 1,
      },
    };
  }
}
