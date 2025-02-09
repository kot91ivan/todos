import { TextInput } from "@mantine/core"
import ButtonSubmit from "../ButtonSubmit"
import { createItem } from "@/app/services/todos"

export default function CreateForm() {
  return (
    <form className="flex gap-2" action={createItem}>
      <TextInput placeholder="Enter todo name" radius="md" name="title" />
      <ButtonSubmit />
    </form>
  )
}
