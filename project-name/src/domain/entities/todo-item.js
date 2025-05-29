/**
 * @typedef TodoItem
 * @property {string} todoId - The unique identifier for the todo item.
 * @property {string} todoTitle - The title of the todo item.
 * @property {string} description - A description of the todo item.
 * @property {string} dueDate - The due date for the todo item (YYYY-MM-DD).
 * @property {string} priority - The priority of the todo item (High, Medium, Low).
 * @property {string} tags - Tags associated with the todo item.
 * @property {string} completionDate - The date the todo item was completed (YYYY-MM-DD).
 * @property {string} notes - Additional notes for the todo item.
 * @property {string} location - The location associated with the todo item (On-Site, Remote, Hybrid).
 * @property {string} reserved - Reserved field for the todo item.
 */

class TodoItem {
  /**
   * Creates a new TodoItem.
   * @param {string} todoId
   * @param {string} todoTitle
   * @param {string} description
   * @param {string} dueDate
   * @param {string} priority
   * @param {string} tags
   * @param {string} completionDate
   * @param {string} notes
   * @param {string} location
   * @param {string} reserved
   */
  constructor(todoId, todoTitle, description, dueDate, priority, tags, completionDate, notes, location, reserved) {
    this.todoId = todoId;
    this.todoTitle = todoTitle;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.tags = tags;
    this.completionDate = completionDate;
    this.notes = notes;
    this.location = location;
    this.reserved = reserved;
  }
    /**
     * Creates a TodoItem object from a plain JavaScript object.
     * @param {object} obj - The plain JavaScript object.
     * @returns {TodoItem} - The TodoItem object.
     */
    static fromObject(obj) {
        return new TodoItem(
            obj.todoId,
            obj.todoTitle,
            obj.description,
            obj.dueDate,
            obj.priority,
            obj.tags,
            obj.completionDate,
            obj.notes,
            obj.location,
            obj.reserved
        );
    }
}

module.exports = TodoItem;