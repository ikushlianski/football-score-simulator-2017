import { TeamInterface } from '../team/team.interface';
import { GroupRulesInterface } from './group-rules';
import { Team } from '../team/team';

export abstract class Group {
  abstract teams: Team[];
  abstract groupRules: GroupRulesInterface;
  /**
   * Synthetic groups are groups that are a single group in a league. For example, in a national championship, there is a league and no groups (or one synthetic group without a name)
   */
  abstract isSynthetic: boolean;
}
