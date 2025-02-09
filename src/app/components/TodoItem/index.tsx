import { deleteItem, updateItem } from "@/app/services/todos"
import { ActionIcon, Checkbox } from "@mantine/core"
import { IconTrash } from "@tabler/icons-react"

type TodoItemProps = {
  id: string
  name: string
  isCompleted: boolean
}

export default function TodoItem({ id, name, isCompleted }: TodoItemProps) {
  const handleUpdateItem = async () => {
    "use server"

    await updateItem(id, !isCompleted)
  }

  const handleDeleteItem = async () => {
    "use server"

    await deleteItem(id)
  }

  return (
    <div className="flex items-center gap-2 group p-1">
      <Checkbox checked={isCompleted} onChange={handleUpdateItem} className="cursor-pointer" />
      <span className={`${isCompleted && "line-through text-gray-500"}`}>{name}</span>

      <ActionIcon
        color="red"
        title="Delete todo"
        size={"sm"}
        className="ml-auto transition-opacity delay-100 opacity-0 group-hover:opacity-100"
        onClick={handleDeleteItem}
      >
        <IconTrash />
      </ActionIcon>
    </div>
  )
}
