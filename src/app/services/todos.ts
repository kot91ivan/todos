"use server"
import type { Todo } from "@prisma/client"
import { prisma } from "../../../lib/prisma"
import { revalidatePath } from "next/cache"

export async function getTodos() {
  const items = await prisma.todo.findMany()

  return items
}

export async function createItem(data: FormData) {
  const { title } = Object.fromEntries(data) as Omit<Todo, "id" | "isComplete">

  await prisma.todo.create({
    data: {
      title
    }
  })

  revalidatePath("/")
}

export async function updateItem(id: string, isComplete: boolean) {
  await prisma.todo.update({
    where: {
      id
    },
    data: {
      isComplete
    }
  })

  revalidatePath("/")
}

export async function deleteItem(id: string) {
  await prisma.todo.delete({
    where: {
      id
    }
  })

  revalidatePath("/")
}
