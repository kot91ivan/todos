import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => new PrismaClient()

export const prisma = prismaClientSingleton()
