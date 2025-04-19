import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function Characters() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  const router = useRouter()
  if (error || !data?.user) {
    router.push('/login')
    return <></>
  }

  return <p>Hello {data.user.email}</p>
}