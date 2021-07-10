import { DrawService } from './draw.service';
import { Team } from '../team/team';

export abstract class Draw {
  abstract teams: Team[];

  protected constructor(private drawService: DrawService) {}
}
