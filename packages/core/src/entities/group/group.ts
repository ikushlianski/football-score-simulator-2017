import { Team } from '../team/team';
import { GroupRules } from './group-rules';

export abstract class Group {
  abstract teams: Team[];

  groupRules?: GroupRules;
  /**
   * Synthetic groups are groups that are a single group in a league. For example, in a national championship, there is a league and no groups (or one synthetic group without a name)
   */
  abstract isSynthetic: boolean;
}
