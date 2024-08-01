<script>
    import { todoStore } from "$lib/stores/todoStore";
    import TodoItem from "./TodoItem.svelte";
  
    let newTodoText = "";
  
    function addTodo() {
      if (newTodoText.trim()) {
        todoStore.add(newTodoText);
        newTodoText = "";
      }
    }
  </script>
  
  <div class="space-y-4">
    <form on:submit|preventDefault={addTodo} class="flex space-x-2">
      <input
        type="text"
        bind:value={newTodoText}
        placeholder="أضف مهمة جديدة"
        class="input input-bordered flex-grow"
      />
      <button type="submit" class="btn btn-primary">إضافة</button>
    </form>
  
    <ul class="space-y-2">
      {#each $todoStore as todo (todo.id)}
        <TodoItem {todo} />
      {/each}
    </ul>
  </div>