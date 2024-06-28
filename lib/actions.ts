'use server'

import { revalidatePath } from 'next/cache'
import { createExpense } from '@/lib/expenses'

export async function createExpenseAction(state: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries())

  const title = data.title as string
  if (typeof title !== 'string') {
    throw new Error('Title must be a string')
  }

  const amount = parseFloat(data.amount as string)
  if (isNaN(amount)) {
    throw new Error('Amount must be a number')
  }

  await createExpense({ title, amount })
  revalidatePath('/')
}
