import type { Todo } from "@prisma/client"

import TodoItem from "../TodoItem"
import { getTodos } from "@/app/services/todos"
import CreateForm from "../CreateForm"
import { Suspense } from "react"

export default async function TodoList() {
  const todos = await getTodos()

  return (
    <div className="flex flex-col gap-4">
      <CreateForm />

      <div className="flex flex-col gap-1">
        <Suspense fallback={<div>Loading...</div>}>
          {todos.map((todoItem: Todo) => (
            <TodoItem key={todoItem.id} id={todoItem.id} title={todoItem.title} isComplete={todoItem.isComplete} />
          ))}
        </Suspense>
      </div>
    </div>
  )
}
