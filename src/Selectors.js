export const doneSelector = (s) => s.todos.filter((t) => t.done);
export const todoSelector = (s) => s.todos.filter((t) => !t.done);
export const doneCountSelector = (s) => s.todos.filter((t) => t.done).length;
export const todoCountSelector = (s) => s.todos.filter((t) => !t.done).length;
