import { ELPProject } from './ELPProject';

export class Sector {
  id: number = 0;
  name: string = '';
  filename: string = '';
  filePath: string = '';
  extension: string = '';
  cover: string = '';
  activeStatus: boolean = true;
  elpProjects: ELPProject[] = [];
}
