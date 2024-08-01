import { writable } from "svelte/store";

function createTodoStore() {
  const { subscribe, update } = writable([]);

  return {
    subscribe,
    add: (text) =>
      update((todos) => [...todos, { id: Date.now(), text, completed: false }]),
    toggleComplete: (id) =>
      update((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      ),
    delete: (id) => update((todos) => todos.filter((todo) => todo.id !== id)),
  };
}

export const todoStore = createTodoStore();
