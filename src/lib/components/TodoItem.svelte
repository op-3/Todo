<script>
    import { todoStore } from "$lib/stores/todoStore";
  
    export let todo;
  
    function toggleComplete() {
      todoStore.toggleComplete(todo.id);
    }
  
    function deleteTodo() {
      todoStore.delete(todo.id);
    }
  </script>
  
  <li class="flex items-center space-x-2">
    <input
      type="checkbox"
      checked={todo.completed}
      on:change={toggleComplete}
      class="checkbox"
    />
    <span class={todo.completed ? "line-through" : ""}>{todo.text}</span>
    <button on:click={deleteTodo} class="btn btn-error btn-sm">حذف</button>
  </li>