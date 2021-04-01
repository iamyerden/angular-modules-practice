import {Group} from './group';

export class User {
  id: number;
  username: string;
  gender: string;
  age: number;
  groupId: number;
  group: Group;
}
