export class TodoTask {
  id: number;
  text: string;
  isDone: boolean;
  isDeleted: boolean;

  constructor(id: number, text: string, isDone: boolean, isDeleted: boolean) {
    this.id = id;
    this.text = text;
    this.isDone = isDone;
    this.isDeleted = isDeleted;
  }
}
