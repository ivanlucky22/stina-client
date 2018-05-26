import * as moment from 'moment';

export class Comment {

  userName: string;
  userId: string;
  content: string;
  timestamp: number;
  likes: Array<string> = [];
  dislikes: Array<string> = [];
  laughs: Array<string> = [];

  constructor(userName: string, userId: string, content: string) {
    this.userName = userName;
    this.userId = userId;
    this.content = content;
    this.timestamp = moment().unix() * 1000;
  }
}
