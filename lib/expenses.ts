import prisma from '@/lib/prisma'

export async function getExpenses() {
  return await prisma.expense.findMany()
}

export async function createExpense(data: { amount: number; title: string }) {
  return await prisma.expense.create({
    data
  })
}
