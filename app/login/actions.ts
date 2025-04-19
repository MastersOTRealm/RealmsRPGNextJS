'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  console.log("logging in")
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  console.dir(data)

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.log("there was an error: " + error)
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  return {success: true}
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  // console.log(`email: ${data.email} password: ${data.password}`)

  const { error } = await supabase.auth.signUp(data)
  console.log(`error: ${error}`)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  return { success: true}
}