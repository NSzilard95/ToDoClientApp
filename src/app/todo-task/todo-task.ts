/**
 * The todo task entity
 */
export class TodoTask {
  /**
   * Gets or sets the id
   */
  id: number;
  /**
   * Gets or sets the text
   */
  text: string;
  /**
   * Gets or sets whether the entity is done
   */
  isDone: boolean;
  /**
   * Gets or sets whether the entity is deleted
   */
  isDeleted: boolean;

  /**
   * The constructor
   * @param id The entity id
   * @param text The entity text
   * @param isDone The entity isDone value
   * @param isDeleted The entity isDeleted value
   */
  constructor(id: number, text: string, isDone: boolean, isDeleted: boolean) {
    this.id = id;
    this.text = text;
    this.isDone = isDone;
    this.isDeleted = isDeleted;
  }
}
