import { TeamInterface } from '../team/team.interface';
import { GroupRulesInterface } from './group-rules.interface';

export abstract class Group {
  abstract teams: TeamInterface[];
  abstract groupRules: GroupRulesInterface;
  /**
   * Synthetic groups are groups that are a single group in a league. For example, in a national championship, there is a league and no groups (or one synthetic group without a name)
   */
  abstract isSynthetic: boolean;
}
