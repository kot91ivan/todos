import type { Todo } from "@prisma/client"

import { Button, TextInput } from "@mantine/core"
import TodoItem from "../TodoItem"
import { createItem, getTodos } from "@/app/services/todos"

export default async function TodoList() {
  const todos = await getTodos()

  return (
    <div className="flex flex-col gap-4">
      <form className="flex gap-2" action={createItem}>
        <TextInput placeholder="Enter todo name" radius="md" name="title" />
        <Button variant="filled" radius="md" type="submit">
          Submit
        </Button>
      </form>

      <div className="flex flex-col gap-1">
        {todos.map((todoItem: Todo) => (
          <TodoItem key={todoItem.id} id={todoItem.id} name={todoItem.title} isCompleted={todoItem.isComplete} />
        ))}
      </div>
    </div>
  )
}
