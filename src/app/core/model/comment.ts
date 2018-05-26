export class Comment {

  userName: string;
  userId: string;
  content: string;
  timestamp: number;
  likes: Array<string> = [];
  dislikes: Array<string> = [];
  laughs: Array<string> = [];

  constructor(userName: string, userId: string, content: string, timestamp: number) {
    this.userName = userName;
    this.userId = userId;
    this.content = content;
    this.timestamp = timestamp;
  }
}
