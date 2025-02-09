"use client"

import { Button } from "@mantine/core"
import { useFormStatus } from "react-dom"

export default function ButtonSubmit() {
  const { pending } = useFormStatus()
  return (
    <Button variant="filled" radius="md" type="submit" disabled={pending}>
      {pending ? "Adding..." : "Add"}
    </Button>
  )
}
